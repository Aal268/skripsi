from pathlib import Path
from flask import Flask, request, jsonify, send_file, send_from_directory
from generator import build_docx
from datetime import datetime
import re
import uuid

from citation_utils import extract_pdf_metadata

BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = BASE_DIR / "hasil generate"
app = Flask(__name__, static_folder=None)
MAX_PDF_SIZE = 20 * 1024 * 1024
app.config["MAX_CONTENT_LENGTH"] = MAX_PDF_SIZE + 1024 * 1024

@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")

@app.get("/style.css")
def css():
    return send_from_directory(BASE_DIR, "style.css")

@app.get("/app.js")
def js():
    return send_from_directory(BASE_DIR, "app.js")

@app.get("/assets/<path:name>")
def assets(name):
    return send_from_directory(BASE_DIR / "assets", name)

@app.get("/api/health")
def health():
    return jsonify({"ok": True, "message": "Generator Python terhubung dan siap membuat DOCX."})


@app.errorhandler(413)
def request_too_large(_error):
    return jsonify({"error": "Ukuran file terlalu besar. Maksimal PDF 20 MB."}), 413


@app.post("/api/references/import")
def import_reference():
    uploaded_file = request.files.get("file")
    if uploaded_file is None or not uploaded_file.filename:
        return jsonify({"error": "Pilih file jurnal PDF terlebih dahulu."}), 400
    if not uploaded_file.filename.lower().endswith(".pdf"):
        return jsonify({"error": "Format belum didukung. Unggah file PDF."}), 400

    pdf_bytes = uploaded_file.stream.read(MAX_PDF_SIZE + 1)
    if len(pdf_bytes) > MAX_PDF_SIZE:
        return jsonify({"error": "Ukuran PDF maksimal 20 MB."}), 413
    if not pdf_bytes.startswith(b"%PDF-"):
        return jsonify({"error": "File yang diunggah bukan PDF yang valid."}), 400

    try:
        source = extract_pdf_metadata(pdf_bytes)
    except ValueError as error:
        return jsonify({"error": str(error)}), 400

    source["id"] = uuid.uuid4().hex
    missing_fields = [
        label for key, label in (
            ("authors", "Penulis"),
            ("year", "Tahun"),
            ("journal", "Jurnal"),
            ("volume", "Volume"),
            ("issue", "Nomor"),
            ("pages", "Halaman"),
            ("doi", "DOI"),
        )
        if not source.get(key)
    ]
    if source["metadataSource"] == "Crossref":
        message = "Metadata berhasil dicocokkan dari Crossref dan jurnal masuk ke daftar pustaka."
    else:
        message = "Jurnal masuk ke daftar pustaka. Metadata PDF diisi sejauh bisa dibaca."
    if missing_fields:
        message += f" Belum ditemukan: {', '.join(missing_fields)}."
    return jsonify({
        "source": source,
        "message": message,
    })


@app.post("/api/generate")
def generate():
    try:
        data = request.get_json(force=True)
        if not isinstance(data, dict):
            return jsonify({"error": "Data form tidak valid."}), 400

        stream = build_docx(data)
        docx_bytes = stream.getvalue()

        # Buat nama file dari judul skripsi
        judul = data.get("identitas", {}).get("judul", "") or ""
        safe_judul = re.sub(r'[\\/:*?"<>|\r\n]+', "", judul).strip()
        safe_judul = re.sub(r'\s+', '_', safe_judul)[:80]  # maks 80 karakter
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        download_name = f"Proposal_{safe_judul}_{timestamp}.docx" if safe_judul else f"Proposal_Skripsi_{timestamp}.docx"

        # Simpan backup ke disk
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        existing_numbers = [
            int(match.group(1))
            for path in OUTPUT_DIR.glob("*.docx")
            if (match := re.match(r"(\d+)_", path.name))
        ]
        number = max(existing_numbers, default=0) + 1
        while True:
            backup_path = OUTPUT_DIR / f"{number:02d}_{timestamp}.docx"
            try:
                with backup_path.open("xb") as f:
                    f.write(docx_bytes)
                break
            except FileExistsError:
                number += 1

        # Kirim dari memory stream langsung (hindari masalah path Windows)
        from io import BytesIO
        output_stream = BytesIO(docx_bytes)
        output_stream.seek(0)

        from flask import Response
        response = Response(
            output_stream.read(),
            status=200,
            mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
        # Gunakan RFC 5987 encoding untuk nama file agar aman di semua browser
        from urllib.parse import quote
        encoded_name = quote(download_name, safe='')
        response.headers["Content-Disposition"] = (
            f'attachment; filename="{download_name}"; filename*=UTF-8\'\'{encoded_name}'
        )
        response.headers["Content-Type"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        response.headers["X-Download-Filename"] = download_name
        return response

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Gagal membuat dokumen: {e}"}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
