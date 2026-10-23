import base64
import math
import re
from io import BytesIO
from pathlib import Path
from docx import Document
from docx.shared import Cm, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.style import WD_STYLE_TYPE
import html
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn
from citation_utils import format_reference, reference_sources, replace_citation_tokens

def latex_to_omml(latex):
    """
    Konversi ekspresi matematika LaTeX menjadi OMML (Office Open XML Math)
    Mendukung pecahan \\frac{a}{b}, subscript _{sub}, perkalian \\times, minus \\minus, teks \\text{...}, dsb.
    """
    latex = latex.strip()
    omml_parts = []
    pos = 0
    while pos < len(latex):
        if latex[pos:pos+6] == r"\frac{":
            pos += 6
            start1 = pos
            depth = 1
            while pos < len(latex) and depth > 0:
                if latex[pos] == "{": depth += 1
                elif latex[pos] == "}": depth -= 1
                pos += 1
            num = latex[start1:pos-1]
            if pos < len(latex) and latex[pos] == "{":
                pos += 1
                start2 = pos
                depth = 1
                while pos < len(latex) and depth > 0:
                    if latex[pos] == "{": depth += 1
                    elif latex[pos] == "}": depth -= 1
                    pos += 1
                den = latex[start2:pos-1]
                num_omml = latex_to_omml(num)
                den_omml = latex_to_omml(den)
                omml_parts.append(f"<m:f><m:num>{num_omml}</m:num><m:den>{den_omml}</m:den></m:f>")
                continue
        elif latex[pos:pos+6] == r"\times":
            omml_parts.append("<m:r><m:t> \u00d7 </m:t></m:r>")
            pos += 6
            continue
        elif latex[pos:pos+6] == r"\minus":
            omml_parts.append("<m:r><m:t> \u2212 </m:t></m:r>")
            pos += 6
            continue
        elif latex[pos:pos+11] == r"\rightarrow":
            omml_parts.append("<m:r><m:t> \u2192 </m:t></m:r>")
            pos += 11
            continue
        elif latex[pos:pos+3] == r"\to":
            omml_parts.append("<m:r><m:t> \u2192 </m:t></m:r>")
            pos += 3
            continue
        elif latex[pos:pos+6] == r"\text{":
            pos += 6
            start = pos
            depth = 1
            while pos < len(latex) and depth > 0:
                if latex[pos] == "{": depth += 1
                elif latex[pos] == "}": depth -= 1
                pos += 1
            txt = latex[start:pos-1]
            escaped = html.escape(txt)
            omml_parts.append(f"<m:r><m:rPr><m:nor/></m:rPr><m:t>{escaped}</m:t></m:r>")
            continue
        elif latex[pos:pos+4] == r"\sum":
            pos += 4
            # Cek limit bawah _{...} dan atas ^{...}
            sub_omml = ""
            sup_omml = ""
            while pos < len(latex) and latex[pos] in [" ", "\t"]:
                pos += 1
            if pos < len(latex) and latex[pos] == "_":
                pos += 1
                sub_txt = ""
                if pos < len(latex) and latex[pos] == "{":
                    pos += 1
                    start = pos
                    depth = 1
                    while pos < len(latex) and depth > 0:
                        if latex[pos] == "{": depth += 1
                        elif latex[pos] == "}": depth -= 1
                        pos += 1
                    sub_txt = latex[start:pos-1]
                elif pos < len(latex):
                    sub_txt = latex[pos]
                    pos += 1
                sub_omml = latex_to_omml(sub_txt)

            while pos < len(latex) and latex[pos] in [" ", "\t"]:
                pos += 1
            if pos < len(latex) and latex[pos] == "^":
                pos += 1
                sup_txt = ""
                if pos < len(latex) and latex[pos] == "{":
                    pos += 1
                    start = pos
                    depth = 1
                    while pos < len(latex) and depth > 0:
                        if latex[pos] == "{": depth += 1
                        elif latex[pos] == "}": depth -= 1
                        pos += 1
                    sup_txt = latex[start:pos-1]
                elif pos < len(latex):
                    sup_txt = latex[pos]
                    pos += 1
                sup_omml = latex_to_omml(sup_txt)

            omml_parts.append(
                f"<m:nary>"
                f"<m:naryPr><m:chr m:val=\"\u2211\"/><m:limLoc m:val=\"undOvr\"/></m:naryPr>"
                f"<m:sub>{sub_omml}</m:sub>"
                f"<m:sup>{sup_omml}</m:sup>"
                f"<m:e></m:e>"
                f"</m:nary>"
            )
            continue
        elif latex[pos] == "^":
            pos += 1
            sup_txt = ""
            if pos < len(latex) and latex[pos] == "{":
                pos += 1
                start = pos
                depth = 1
                while pos < len(latex) and depth > 0:
                    if latex[pos] == "{": depth += 1
                    elif latex[pos] == "}": depth -= 1
                    pos += 1
                sup_txt = latex[start:pos-1]
            elif pos < len(latex):
                sup_txt = latex[pos]
                pos += 1
            sup_omml = latex_to_omml(sup_txt)
            if omml_parts:
                prev = omml_parts.pop()
                omml_parts.append(f"<m:sSup><m:e>{prev}</m:e><m:sup>{sup_omml}</m:sup></m:sSup>")
            else:
                omml_parts.append(f"<m:sSup><m:e><m:r><m:t></m:t></m:r></m:e><m:sup>{sup_omml}</m:sup></m:sSup>")
            continue
        elif latex[pos] == "_":
            pos += 1
            sub_txt = ""
            if pos < len(latex) and latex[pos] == "{":
                pos += 1
                start = pos
                depth = 1
                while pos < len(latex) and depth > 0:
                    if latex[pos] == "{": depth += 1
                    elif latex[pos] == "}": depth -= 1
                    pos += 1
                sub_txt = latex[start:pos-1]
            elif pos < len(latex):
                sub_txt = latex[pos]
                pos += 1
            sub_omml = latex_to_omml(sub_txt)
            if omml_parts:
                prev = omml_parts.pop()
                omml_parts.append(f"<m:sSub><m:e>{prev}</m:e><m:sub>{sub_omml}</m:sub></m:sSub>")
            else:
                omml_parts.append(f"<m:sSub><m:e><m:r><m:t></m:t></m:r></m:e><m:sub>{sub_omml}</m:sub></m:sSub>")
            continue
        elif latex[pos] in [" ", "\t", "\n"]:
            omml_parts.append("<m:r><m:t xml:space=\"preserve\"> </m:t></m:r>")
            pos += 1
            continue
        else:
            m = re.match(r"[^\\\{\}_\^\s]+", latex[pos:])
            if m:
                txt = m.group(0)
                escaped = html.escape(txt)
                omml_parts.append(f"<m:r><m:t>{escaped}</m:t></m:r>")
                pos += len(txt)
            else:
                pos += 1
    return "".join(omml_parts)

def append_math_or_text(paragraph, text, font_size=10, bold=False, italic=False, color=None):
    """
    Memasukkan teks atau rumus matematika standar ($...$ atau $$...$$) ke dalam paragraph docx
    """
    parts = re.split(r"(\$\$.*?\$\$|\$.*?\$)", str(text or ""))
    for part in parts:
        if not part:
            continue
        if (part.startswith("$$") and part.endswith("$$")) or (part.startswith("$") and part.endswith("$")):
            math_code = part[2:-2] if part.startswith("$$") else part[1:-1]
            inner = latex_to_omml(math_code)
            xml_str = f'<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math">{inner}</m:oMath>'
            paragraph._element.append(parse_xml(xml_str))
        else:
            r = paragraph.add_run(part)
            font_run(r, size=font_size, bold=bold, italic=italic, color=color)

BASE_DIR = Path(__file__).resolve().parent
LOGO_PATH = BASE_DIR / "assets" / "logo_ums.png"

def configure_section(section):
    section.page_width = Cm(21)
    section.page_height = Cm(29.7)
    section.left_margin = Cm(4)
    section.right_margin = Cm(3)
    section.top_margin = Cm(3)
    section.bottom_margin = Cm(3)
    section.header_distance = Cm(1.2)
    section.footer_distance = Cm(1.3)

def font_run(run, size=12, bold=False, italic=False, color=None):
    run.font.name = "Times New Roman"
    run._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), "Times New Roman")
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color:
        run.font.color.rgb = RGBColor(*color)

def set_page_number(section, fmt, start=1):
    sectPr = section._sectPr
    pg = sectPr.find(qn("w:pgNumType"))
    if pg is None:
        pg = OxmlElement("w:pgNumType")
        sectPr.append(pg)
    pg.set(qn("w:fmt"), fmt)
    pg.set(qn("w:start"), str(start))

def page_field(paragraph):
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = paragraph.add_run()
    begin = OxmlElement("w:fldChar"); begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText"); instr.set(qn("xml:space"), "preserve"); instr.text = " PAGE "
    end = OxmlElement("w:fldChar"); end.set(qn("w:fldCharType"), "end")
    r._r.extend([begin, instr, end])

def toc_field(paragraph):
    r = paragraph.add_run()
    begin = OxmlElement("w:fldChar"); begin.set(qn("w:fldCharType"), "begin")
    begin.set(qn("w:dirty"), "true")
    instr = OxmlElement("w:instrText"); instr.set(qn("xml:space"), "preserve"); instr.text = ' TOC \\o "1-3" \\h \\z \\u '
    sep = OxmlElement("w:fldChar"); sep.set(qn("w:fldCharType"), "separate")
    end = OxmlElement("w:fldChar"); end.set(qn("w:fldCharType"), "end")
    r._r.extend([begin, instr, sep])
    rr = paragraph.add_run("Daftar isi akan diperbarui saat dokumen dibuka di Microsoft Word. Jika nomor halaman belum sesuai, tekan Ctrl+A lalu F9.")
    font_run(rr, 10, italic=True)
    paragraph.add_run()._r.append(end)

def update_fields(doc):
    settings = doc.settings._element
    node = settings.find(qn("w:updateFields"))
    if node is None:
        node = OxmlElement("w:updateFields")
        settings.append(node)
    node.set(qn("w:val"), "true")

def clear_footer(section):
    section.footer.is_linked_to_previous = False
    for p in section.footer.paragraphs:
        p.clear()

def remove_borders(table):
    tblPr = table._tbl.tblPr
    borders = tblPr.first_child_found_in("w:tblBorders")
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tblPr.append(borders)
    for edge in ("top","left","bottom","right","insideH","insideV"):
        el = borders.find(qn(f"w:{edge}"))
        if el is None:
            el = OxmlElement(f"w:{edge}")
            borders.append(el)
        el.set(qn("w:val"), "nil")

def set_cell_fill(cell, fill="E8E7FF"):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = tcPr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tcPr.append(shd)
    shd.set(qn("w:fill"), fill)

def add_center(doc, text, bold=False, after=0, size=12):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.line_spacing = 1
    p.paragraph_format.space_after = Pt(after)
    r = p.add_run(text)
    font_run(r, size, bold=bold)
    return p

def add_abstract(doc, heading, text, keyword_label, keywords):
    add_center(doc, heading, bold=True, after=6, size=11)

    paragraph = doc.add_paragraph(style="Normal")
    paragraph.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    paragraph.paragraph_format.first_line_indent = Cm(0)
    paragraph.paragraph_format.line_spacing = 1
    paragraph.paragraph_format.space_before = Pt(0)
    paragraph.paragraph_format.space_after = Pt(4)
    body = " ".join(str(text or "").split())
    font_run(paragraph.add_run(body), size=10)

    keyword_paragraph = doc.add_paragraph(style="Normal")
    keyword_paragraph.paragraph_format.first_line_indent = Cm(0)
    keyword_paragraph.paragraph_format.line_spacing = 1
    keyword_paragraph.paragraph_format.space_before = Pt(2)
    keyword_paragraph.paragraph_format.space_after = Pt(12)
    font_run(keyword_paragraph.add_run(f"{keyword_label}: "), size=10, bold=True)
    font_run(keyword_paragraph.add_run(" ".join(str(keywords or "").split())), size=10)

def add_heading(doc, text, level=1):
    return doc.add_paragraph(text, style=f"Heading {level}")

def add_paragraphs(doc, text):
    """Every blank-line-separated block becomes its own academic paragraph."""
    for block in [x.strip() for x in (text or "").split("\n\n") if x.strip()]:
        p = doc.add_paragraph(style="Normal")
        p.paragraph_format.first_line_indent = Cm(1.25)
        append_math_or_text(p, block, font_size=12)

def add_numbered(doc, items):
    for i, item in enumerate(items or [], 1):
        if not str(item).strip():
            continue
        p = doc.add_paragraph(style="Normal")
        p.paragraph_format.left_indent = Cm(.75)
        p.paragraph_format.first_line_indent = Cm(-.75)
        r = p.add_run(f"{i}. {str(item).strip()}")
        font_run(r)

def add_content_list(doc, items, ordered=True):
    style = "List Number" if ordered else "List Bullet"
    for item in items or []:
        if not str(item).strip():
            continue
        paragraph = doc.add_paragraph(style=style)
        font_run(paragraph.add_run(str(item).strip()))

def add_content_table(doc, text):
    rows = [[cell.strip() for cell in line.split("|")] for line in (text or "").splitlines() if line.strip()]
    if not rows:
        return
    column_count = max(len(row) for row in rows)
    headers = (rows[0] + [""] * column_count)[:column_count]
    body = [(row + [""] * column_count)[:column_count] for row in rows[1:]]
    add_simple_table(doc, headers, body)


def add_content_chart(doc, block):
    lines = [line.strip() for line in (block.get("chartData") or "").splitlines() if line.strip()]
    chart_type = block.get("chartType", "bar")
    comparison = chart_type in ("bar-comparison", "line-comparison")
    if comparison:
        if len(lines) < 2:
            raise ValueError("Grafik perbandingan memerlukan header dan minimal satu baris data.")
        headers = [cell.strip() for cell in lines[0].split("|")]
        if len(headers) < 3 or not headers[0] or any(not label for label in headers[1:]):
            raise ValueError("Header grafik perbandingan harus berformat Kategori | Seri 1 | Seri 2 (atau lebih).")
        if len(headers) > 7:
            raise ValueError("Grafik perbandingan maksimal memiliki 6 seri.")
        series_names = headers[1:]
        rows = []
        for line in lines[1:]:
            parts = [cell.strip() for cell in line.split("|")]
            if len(parts) != len(headers) or not parts[0]:
                raise ValueError("Setiap baris harus memiliki kategori dan nilai untuk semua seri.")
            try:
                values = [float(value.replace(",", ".")) for value in parts[1:]]
            except ValueError as error:
                raise ValueError(f"Semua nilai grafik untuk kategori '{parts[0]}' harus berupa angka.") from error
            if any(not math.isfinite(value) or value < 0 for value in values):
                raise ValueError("Nilai grafik harus angka positif atau nol.")
            rows.append((parts[0], values))
    else:
        series_names = ["Nilai"]
        rows = []
        for line in lines:
            parts = [cell.strip() for cell in line.split("|")]
            if len(parts) != 2 or not parts[0]:
                raise ValueError("Data grafik harus berformat Kategori | Nilai, satu baris per data.")
            try:
                value = float(parts[1].replace(",", "."))
            except ValueError as error:
                raise ValueError(f"Nilai grafik untuk '{parts[0]}' harus berupa angka.") from error
            if not math.isfinite(value) or value < 0:
                raise ValueError("Nilai grafik harus angka positif atau nol.")
            rows.append((parts[0], [value]))

    if not rows:
        raise ValueError("Grafik belum memiliki data. Isi minimal satu baris kategori dan nilai.")
    if len(rows) > 30:
        raise ValueError("Grafik maksimal memuat 30 kategori.")
    if chart_type == "pie" and any(values[0] <= 0 for _, values in rows):
        raise ValueError("Semua nilai pada grafik lingkaran harus lebih besar dari nol.")

    from matplotlib.backends.backend_agg import FigureCanvasAgg
    from matplotlib.figure import Figure

    labels = [label for label, _ in rows]
    series_values = [[values[index] for _, values in rows] for index in range(len(series_names))]
    colors = ["#635bff", "#ec4899", "#18a976", "#f59e0b", "#38bdf8", "#a855f7"]
    figure = Figure(figsize=(8, 4.5), dpi=160, facecolor="white")
    axis = figure.add_subplot(1, 1, 1)
    title = (block.get("chartTitle") or "").strip()
    if title:
        axis.set_title(title, fontsize=13, pad=14)

    if chart_type == "pie":
        values = series_values[0]
        axis.pie(values, labels=labels, autopct="%1.1f%%", startangle=90)
        axis.axis("equal")
    elif chart_type in ("line", "line-comparison"):
        for index, (series_name, values) in enumerate(zip(series_names, series_values)):
            axis.plot(
                labels,
                values,
                marker="o",
                linewidth=2.2,
                color=colors[index % len(colors)],
                label=series_name if comparison else None,
            )
        axis.set_ylabel("Nilai")
        axis.grid(axis="y", alpha=0.25)
        if comparison:
            axis.legend()
    elif chart_type == "bar-comparison":
        import numpy as np

        positions = np.arange(len(labels))
        width = min(0.8 / len(series_names), 0.32)
        for index, (series_name, values) in enumerate(zip(series_names, series_values)):
            offset = (index - (len(series_names) - 1) / 2) * width
            axis.bar(
                positions + offset,
                values,
                width,
                color=colors[index % len(colors)],
                label=series_name,
            )
        axis.set_xticks(positions, labels)
        axis.legend()
        axis.set_ylabel("Nilai")
        axis.grid(axis="y", alpha=0.25)
        axis.set_axisbelow(True)
    else:
        bars = axis.bar(labels, series_values[0], color=colors[0], width=0.65)
        axis.bar_label(bars, padding=3, fontsize=8)
        axis.set_ylabel("Nilai")
        axis.grid(axis="y", alpha=0.25)
        axis.set_axisbelow(True)

    axis.tick_params(axis="x", labelrotation=20, labelsize=8)
    figure.tight_layout()
    image_stream = BytesIO()
    FigureCanvasAgg(figure).print_png(image_stream)
    image_stream.seek(0)
    paragraph = doc.add_paragraph()
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    paragraph.paragraph_format.space_before = Pt(6)
    paragraph.paragraph_format.space_after = Pt(4)
    chart_pic = paragraph.add_run().add_picture(image_stream, width=Cm(11.5))
    max_h = Cm(7.2)
    if chart_pic.height > max_h:
        scale = max_h / chart_pic.height
        chart_pic.height = int(chart_pic.height * scale)
        chart_pic.width = int(chart_pic.width * scale)

    caption = (block.get("caption") or title).strip()
    if caption:
        caption_paragraph = doc.add_paragraph()
        caption_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_paragraph.paragraph_format.space_before = Pt(2)
        caption_paragraph.paragraph_format.space_after = Pt(8)
        font_run(caption_paragraph.add_run(caption), 10, italic=True)

def parse_flowchart_markdown(text):
    if not text or not text.strip():
        return []
    raw = text.strip()

    # Detect Graphviz DOT syntax
    if re.search(r"^\s*(strict\s+)?(di)?graph\b", raw, re.IGNORECASE) or ("{" in raw and "->" in raw):
        lines = [line.strip() for line in raw.splitlines() if line.strip()]
        node_map = {}
        order = []

        def ensure_node(nid, ntext="", nshape="process"):
            nid = nid.strip()
            if not nid or nid.lower() in ["graph", "node", "edge", "rank", "strict", "digraph"]:
                return None
            if nid not in node_map:
                node_map[nid] = {"id": nid, "text": ntext or nid, "shape": nshape}
                order.append(nid)
            else:
                n = node_map[nid]
                if ntext and (not n["text"] or n["text"] == nid):
                    n["text"] = ntext
                if nshape and nshape != "process":
                    n["shape"] = nshape
            return node_map[nid]

        for line in lines:
            if re.match(r"^\s*(strict\s+)?(di)?graph\b", line, re.IGNORECASE) or re.match(r"^\s*(graph|node|edge)\s*\[", line, re.IGNORECASE) or line in ["{", "}"]:
                continue
            
            # Node declaration: A [label="...", shape=diamond, ...]
            m_decl = re.match(r"^([a-zA-Z0-9_-]+)\s*\[(.*?)\]", line)
            if m_decl:
                nid = m_decl.group(1)
                attrs = m_decl.group(2)
                m_lbl = re.search(r'label\s*=\s*"([^"]*)"', attrs, re.IGNORECASE)
                m_shp = re.search(r'shape\s*=\s*([a-zA-Z0-9_-]+)', attrs, re.IGNORECASE)
                text = m_lbl.group(1).replace(r"\n", " ") if m_lbl else nid
                shape = "process"
                if m_shp:
                    s = m_shp.group(1).lower()
                    if s == "diamond": shape = "decision"
                    elif s in ["oval", "ellipse", "circle"]: shape = "terminator"
                    elif s == "parallelogram": shape = "io"
                ensure_node(nid, text, shape)

            # Node chain: A -> B -> C
            if "->" in line:
                clean_line = re.sub(r"\[.*?\]", "", line)
                parts = [p.strip().rstrip(";") for p in clean_line.split("->") if p.strip()]
                for p in parts:
                    if re.match(r"^[a-zA-Z0-9_-]+$", p):
                        ensure_node(p, p, "process")

        if order:
            return [
                {
                    "id": f"s_{idx + 1}",
                    "shape": node_map[nid]["shape"],
                    "text": node_map[nid]["text"]
                }
                for idx, nid in enumerate(order)
            ]

    # Detect Mermaid syntax
    if re.search(r"^\s*(graph|flowchart)\s+(TD|TB|LR|RL)", raw, re.IGNORECASE) or "-->" in raw:
        lines = [line.strip() for line in raw.splitlines() if line.strip()]
        node_map = {}
        order = []

        def ensure_node(nid, ntext="", nshape="process"):
            nid = nid.strip()
            if nid not in node_map:
                node_map[nid] = {"id": nid, "text": ntext or nid, "shape": nshape}
                order.append(nid)
            else:
                n = node_map[nid]
                if ntext and (not n["text"] or n["text"] == nid):
                    n["text"] = ntext
                if nshape and nshape != "process":
                    n["shape"] = nshape
            return node_map[nid]

        def extract_node(tok):
            tok = tok.strip()
            # Oval: A([text])
            m = re.match(r"^([a-zA-Z0-9_-]+)\s*\(\[(.*?)\]\)", tok)
            if m: return ensure_node(m.group(1), m.group(2), "terminator")
            # Diamond: A{text}
            m = re.match(r"^([a-zA-Z0-9_-]+)\s*\{(.*?)\}", tok)
            if m: return ensure_node(m.group(1), m.group(2), "decision")
            # IO: A[/text/]
            m = re.match(r"^([a-zA-Z0-9_-]+)\s*\[\/(.*?)\/\]", tok) or re.match(r"^([a-zA-Z0-9_-]+)\s*\[\\(.*?)\\\]", tok)
            if m: return ensure_node(m.group(1), m.group(2), "io")
            # Rect: A[text]
            m = re.match(r"^([a-zA-Z0-9_-]+)\s*\[(.*?)\]", tok)
            if m: return ensure_node(m.group(1), m.group(2), "process")
            # ID only: A
            m = re.match(r"^([a-zA-Z0-9_-]+)$", tok)
            if m: return ensure_node(m.group(1), m.group(1), "process")
            return None

        for line in lines:
            if re.match(r"^\s*(graph|flowchart)\s+", line, re.IGNORECASE):
                continue
            if "-->" in line or "---" in line or "->" in line:
                parts = re.split(r"-->|---|->", line)
                for i in range(len(parts) - 1):
                    left_p = parts[i].strip()
                    right_p = parts[i + 1].strip()
                    m_lbl = re.match(r"^(.*?)\s*--\s*(.*?)$", left_p)
                    if m_lbl:
                        left_p = m_lbl.group(1).strip()
                    m_pipe = re.match(r"^\|(.*?)\|\s*(.*)$", right_p)
                    if m_pipe:
                        right_p = m_pipe.group(2).strip()
                    extract_node(left_p)
                    extract_node(right_p)
            else:
                extract_node(line)

        return [
            {
                "id": f"s_{idx + 1}",
                "shape": node_map[nid]["shape"],
                "text": node_map[nid]["text"]
            }
            for idx, nid in enumerate(order)
        ]

    lines = [line.strip() for line in raw.splitlines() if line.strip()]
    steps = []
    
    for i, line in enumerate(lines):
        clean = line
        if clean.startswith("- "):
            clean = clean[2:].strip()
        elif "." in clean[:4] and clean.split(".", 1)[0].isdigit():
            clean = clean.split(".", 1)[1].strip()
            
        shape = "process"
        main_part = clean
        branch_info = ""
        
        if "->" in clean:
            parts = clean.split("->", 1)
            main_part = parts[0].strip()
            branch_info = parts[1].strip()
            
        # Detect shape
        lower_main = main_part.lower()
        if "(terminator)" in lower_main or "(oval)" in lower_main or "(start)" in lower_main or "(mulai)" in lower_main or "(selesai)" in lower_main:
            shape = "terminator"
        elif "(decision)" in lower_main or "(diamond)" in lower_main or "(keputusan)" in lower_main or "(?)" in lower_main or "?" in main_part:
            shape = "decision"
        elif "(io)" in lower_main or "(input)" in lower_main or "(output)" in lower_main or "(data)" in lower_main:
            shape = "io"
        elif "(process)" in lower_main or "(rect)" in lower_main or "(kotak)" in lower_main or "(proses)" in lower_main:
            shape = "process"
            
        cleaned_text = main_part
        for tag in ["(terminator)", "(oval)", "(decision)", "(diamond)", "(io)", "(process)", "(rect)", "(input)", "(output)", "(mulai)", "(selesai)", "(proses)", "(keputusan)"]:
            idx = cleaned_text.lower().find(tag)
            if idx != -1:
                cleaned_text = cleaned_text[:idx] + cleaned_text[idx + len(tag):]
        cleaned_text = cleaned_text.strip()
        if not cleaned_text:
            cleaned_text = f"Langkah {i + 1}"
            
        step = {
            "id": f"s{i + 1}",
            "shape": shape,
            "text": cleaned_text
        }
        
        if shape == "decision" and branch_info:
            step["branchType"] = "node"
            step["branchAssign"] = "sideYes_straightNo"
            side_steps = []
            
            # Format: Samping: Teks | Rejoin: Target
            sub_parts = [p.strip() for p in branch_info.split("|")]
            for sp in sub_parts:
                sp_lower = sp.lower()
                if "rejoin" in sp_lower:
                    rj_val = sp.split(":", 1)[-1].strip()
                    if rj_val.isdigit():
                        step["sideRejoinTarget"] = int(rj_val) - 1
                elif "loop" in sp_lower or "kembali" in sp_lower:
                    step["branchType"] = "jump"
                    lp_val = sp.split(":", 1)[-1].strip()
                    if lp_val.isdigit():
                        step["branchNoTarget"] = int(lp_val) - 1
                elif "arah" in sp_lower or "assign" in sp_lower:
                    if "sideno" in sp_lower or "tidaksamping" in sp_lower:
                        step["branchAssign"] = "sideNo_straightYes"
                else:
                    side_content = sp
                    if ":" in side_content:
                        side_content = side_content.split(":", 1)[1].strip()
                    s_shape = "process"
                    s_lower = side_content.lower()
                    if "(io)" in s_lower or "io" in s_lower:
                        s_shape = "io"
                    elif "(terminator)" in s_lower or "selesai" in s_lower:
                        s_shape = "terminator"
                    elif "(decision)" in s_lower:
                        s_shape = "decision"
                    for tag in ["(io)", "(process)", "(rect)", "(terminator)", "(decision)"]:
                        idx = side_content.lower().find(tag)
                        if idx != -1:
                            side_content = side_content[:idx] + side_content[idx + len(tag):]
                    side_content = side_content.strip()
                    if side_content:
                        side_steps.append({"shape": s_shape, "text": side_content})
                        
            if side_steps:
                step["sideSteps"] = side_steps
                step["sideNodeText"] = side_steps[0]["text"]
                step["sideNodeShape"] = side_steps[0]["shape"]
                
        steps.append(step)
    return steps

def add_content_flowchart(doc, block):
    import matplotlib.pyplot as plt
    from matplotlib.backends.backend_agg import FigureCanvasAgg
    from matplotlib.figure import Figure
    import matplotlib.patches as patches

    # If high-fidelity rendered raster/PNG dataUrl is provided from Mermaid/Canvas, embed it directly
    data_url = block.get("dataUrl") or ""
    if data_url.startswith("data:image/") and "," in data_url:
        try:
            image_data = base64.b64decode(data_url.split(",", 1)[1], validate=True)
            paragraph = doc.add_paragraph()
            paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            paragraph.paragraph_format.space_before = Pt(6)
            paragraph.paragraph_format.space_after = Pt(4)
            picture = paragraph.add_run().add_picture(BytesIO(image_data), width=Cm(12))
            # Batasi tinggi maksimal agar tidak memakan ruang halaman A4 berlebihan (maksimal 11 cm)
            max_height = Cm(11)
            if picture.height > max_height:
                scale = max_height / picture.height
                picture.height = int(picture.height * scale)
                picture.width = int(picture.width * scale)

            title = (block.get("flowchartTitle") or block.get("caption") or "Gambar Diagram Alir Penelitian").strip()
            if title:
                caption_paragraph = doc.add_paragraph()
                caption_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
                caption_paragraph.paragraph_format.space_before = Pt(2)
                caption_paragraph.paragraph_format.space_after = Pt(8)
                font_run(caption_paragraph.add_run(title), 10, italic=True)
            return
        except Exception:
            pass

    steps = []
    if block.get("flowchartText"):
        steps = parse_flowchart_markdown(block.get("flowchartText"))
    if not steps:
        steps = block.get("flowchartSteps") or []
    if not steps:
        steps = [
            {"id": "s1", "shape": "terminator", "text": "Mulai"},
            {"id": "s2", "shape": "process", "text": "Pengumpulan Data"},
            {"id": "s3", "shape": "decision", "text": "Data Valid?"},
            {"id": "s4", "shape": "process", "text": "Analisis Data"},
            {"id": "s5", "shape": "terminator", "text": "Selesai"}
        ]

    n = len(steps)
    # Proporsi diagram alir yang lebih ringkas dan hemat tempat vertikal
    fig_height = min(10.0, max(2.8, n * 0.95))
    fig = Figure(figsize=(6.4, fig_height), dpi=180, facecolor="white")
    ax = fig.add_subplot(1, 1, 1)
    ax.set_xlim(0, 11)
    ax.set_ylim(0, n * 2 + 1)
    ax.axis("off")

    box_w = 4.2
    box_h = 0.95
    center_x = 4.2

    step_y = []
    for i, step in enumerate(steps):
        y = (n - i) * 2 - 0.5
        step_y.append(y)
        shape_type = step.get("shape", "process")
        txt = step.get("text", f"Langkah {i+1}")

        if shape_type == "terminator":
            # Oval / rounded pill (Terminator Mulai/Selesai)
            box = patches.FancyBboxPatch(
                (center_x - box_w/2, y - box_h/2), box_w, box_h,
                boxstyle="round,pad=0.2,rounding_size=0.45",
                edgecolor="#1e293b", facecolor="#f8fafc", linewidth=1.5
            )
            ax.add_patch(box)
        elif shape_type == "decision":
            # Belah ketupat / Diamond (Keputusan)
            d_h = box_h * 1.25
            d_w = box_w * 0.95
            diamond = patches.Polygon(
                [[center_x, y + d_h/2], [center_x + d_w/2, y], [center_x, y - d_h/2], [center_x - d_w/2, y]],
                closed=True, edgecolor="#1e293b", facecolor="#f8fafc", linewidth=1.5
            )
            ax.add_patch(diamond)
        elif shape_type == "io":
            # Jajar genjang / Parallelogram (Input / Output)
            offset = 0.4
            poly = patches.Polygon(
                [[center_x - box_w/2 + offset, y + box_h/2],
                 [center_x + box_w/2 + offset, y + box_h/2],
                 [center_x + box_w/2 - offset, y - box_h/2],
                 [center_x - box_w/2 - offset, y - box_h/2]],
                closed=True, edgecolor="#1e293b", facecolor="#f8fafc", linewidth=1.5
            )
            ax.add_patch(poly)
        else:
            # Persegi panjang / Rectangle (Proses)
            rect = patches.Rectangle(
                (center_x - box_w/2, y - box_h/2), box_w, box_h,
                edgecolor="#1e293b", facecolor="#f8fafc", linewidth=1.5
            )
            ax.add_patch(rect)

        ax.text(center_x, y, txt, ha="center", va="center", fontsize=9, fontfamily="serif", color="#0f172a", wrap=True)

    # Sambungkan kotak-kotak secara berurutan dengan panah standar flowchart
    for i in range(n - 1):
        y_curr = step_y[i]
        y_next = step_y[i+1]
        shape_curr = steps[i].get("shape", "process")
        offset_curr = (box_h * 1.25 / 2) if shape_curr == "decision" else (box_h / 2)
        shape_next = steps[i+1].get("shape", "process")
        offset_next = (box_h * 1.25 / 2) if shape_next == "decision" else (box_h / 2)

        start_pt = (center_x, y_curr - offset_curr)
        end_pt = (center_x, y_next + offset_next)

        ax.annotate(
            "", xy=end_pt, xytext=start_pt,
            arrowprops=dict(arrowstyle="-|>", color="#1e293b", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
        )
        if shape_curr == "decision":
            branch_type = steps[i].get("branchType") or ("node" if (steps[i].get("sideSteps") or steps[i].get("sideNodeText")) else "jump")
            side_steps = steps[i].get("sideSteps") or []
            if not side_steps and steps[i].get("sideNodeText"):
                side_steps = [{"shape": steps[i].get("sideNodeShape", "process"), "text": steps[i].get("sideNodeText")}]

            if branch_type == "node" and side_steps:
                # Render rangkaian kotak samping (Multi Side-Branch Boxes)
                side_w = 2.4
                side_h = 0.85
                gap_side_y = 0.6
                side_cx = center_x + (box_w * 0.95 / 2) + 0.6 + side_w / 2
                last_side_cy = y_curr

                branch_assign = steps[i].get("branchAssign") or "sideYes_straightNo"
                side_lbl = "Yes" if branch_assign == "sideYes_straightNo" else "No"
                straight_lbl = "No" if branch_assign == "sideYes_straightNo" else "Yes"
                side_color = "#15803d" if branch_assign == "sideYes_straightNo" else "#dc2626"
                straight_color = "#dc2626" if branch_assign == "sideYes_straightNo" else "#15803d"

                # Label Yes/No
                ax.text(center_x + (box_w * 0.95 / 2) + 0.3, y_curr + 0.15, side_lbl, fontsize=8, fontfamily="serif", color=side_color, weight="bold")
                ax.text(center_x + 0.15, (start_pt[1] + end_pt[1])/2, straight_lbl, fontsize=8, fontfamily="serif", color=straight_color, weight="bold")

                for s_idx, s_step in enumerate(side_steps):
                    s_cy = y_curr - s_idx * (side_h + gap_side_y)
                    last_side_cy = s_cy
                    s_shape = s_step.get("shape", "process")
                    s_txt = s_step.get("text", f"Side {s_idx+1}")

                    if s_idx == 0:
                        # Panah dari Decision -> Kotak Samping Pertama
                        x_start_side = center_x + (box_w * 0.95 / 2)
                        x_end_side = side_cx - side_w / 2
                        ax.annotate(
                            "", xy=(x_end_side, s_cy), xytext=(x_start_side, s_cy),
                            arrowprops=dict(arrowstyle="-|>", color="#1e293b", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
                        )
                    else:
                        # Panah antar kotak samping bertingkat
                        prev_side_cy = y_curr - (s_idx - 1) * (side_h + gap_side_y)
                        ax.annotate(
                            "", xy=(side_cx, s_cy + side_h / 2), xytext=(side_cx, prev_side_cy - side_h / 2),
                            arrowprops=dict(arrowstyle="-|>", color="#1e293b", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
                        )

                    # Gambar bentuk kotak samping
                    if s_shape == "decision":
                        d_side_w = side_w * 0.95
                        d_side_h = side_h * 1.15
                        diamond_side = patches.Polygon(
                            [[side_cx, s_cy + d_side_h/2],
                             [side_cx + d_side_w/2, s_cy],
                             [side_cx, s_cy - d_side_h/2],
                             [side_cx - d_side_w/2, s_cy]],
                            closed=True, edgecolor="#1e293b", facecolor="#fef08a", linewidth=1.5
                        )
                        ax.add_patch(diamond_side)
                    elif s_shape == "io":
                        offset_io = 0.25
                        poly_side = patches.Polygon(
                            [[side_cx - side_w/2 + offset_io, s_cy + side_h/2],
                             [side_cx + side_w/2 + offset_io, s_cy + side_h/2],
                             [side_cx + side_w/2 - offset_io, s_cy - side_h/2],
                             [side_cx - side_w/2 - offset_io, s_cy - side_h/2]],
                            closed=True, edgecolor="#1e293b", facecolor="#fef08a", linewidth=1.5
                        )
                        ax.add_patch(poly_side)
                    elif s_shape == "terminator":
                        box_side = patches.FancyBboxPatch(
                            (side_cx - side_w/2, s_cy - side_h/2), side_w, side_h,
                            boxstyle="round,pad=0.15,rounding_size=0.4",
                            edgecolor="#1e293b", facecolor="#fbcfe8", linewidth=1.5
                        )
                        ax.add_patch(box_side)
                    else:
                        rect_side = patches.Rectangle(
                            (side_cx - side_w/2, s_cy - side_h/2), side_w, side_h,
                            edgecolor="#1e293b", facecolor="#fef08a", linewidth=1.5
                        )
                        ax.add_patch(rect_side)

                    ax.text(side_cx, s_cy, s_txt, ha="center", va="center", fontsize=8, fontfamily="serif", color="#0f172a", wrap=True)

                # Jalur Rejoin dari Kotak Samping Terakhir ke langkah tujuan di bawah
                rejoin_target = steps[i].get("sideRejoinTarget")
                t_rejoin = int(rejoin_target) if (rejoin_target is not None and str(rejoin_target) != "") else (i + 2 if i + 2 < n else None)
                if t_rejoin is not None and 0 <= t_rejoin < n:
                    y_rejoin = step_y[t_rejoin]
                    x_out_side = side_cx - side_w / 2
                    x_target_box = center_x + (box_w / 2)
                    if abs(last_side_cy - y_rejoin) < 0.2:
                        ax.annotate(
                            "", xy=(x_target_box, y_rejoin), xytext=(x_out_side, y_rejoin),
                            arrowprops=dict(arrowstyle="-|>", color="#1e293b", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
                        )
                    else:
                        mid_x = (x_out_side + x_target_box) / 2
                        ax.plot([x_out_side, mid_x, mid_x, x_target_box],
                                [last_side_cy, last_side_cy, y_rejoin, y_rejoin],
                                color="#1e293b", lw=1.5)
                        ax.annotate(
                            "", xy=(x_target_box, y_rejoin), xytext=(x_target_box + 0.35, y_rejoin),
                            arrowprops=dict(arrowstyle="-|>", color="#1e293b", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
                        )
            else:
                # Mode panah lurus Ya + loop Tidak
                ax.text(center_x + 0.15, (start_pt[1] + end_pt[1])/2, "Ya", fontsize=8, fontfamily="serif", color="#15803d", weight="bold")

                branch_target = steps[i].get("branchNoTarget")
                if branch_target is not None and str(branch_target) != "":
                    t_idx = int(branch_target)
                    if 0 <= t_idx < n:
                        y_target = step_y[t_idx]
                        x_out = center_x + (box_w * 0.95 / 2)
                        x_elbow = center_x + 3.2
                        ax.plot([x_out, x_elbow, x_elbow, center_x + (box_w / 2)],
                                [y_curr, y_curr, y_target, y_target],
                                color="#dc2626", lw=1.5, linestyle="--")
                        ax.annotate(
                            "", xy=(center_x + (box_w / 2), y_target), xytext=(center_x + (box_w / 2) + 0.5, y_target),
                            arrowprops=dict(arrowstyle="-|>", color="#dc2626", lw=1.5, shrinkA=0, shrinkB=0, mutation_scale=12)
                        )
                        ax.text(x_out + 0.15, y_curr + 0.15, "Tidak", fontsize=8, fontfamily="serif", color="#dc2626", weight="bold")

    fig.tight_layout()
    image_stream = BytesIO()
    FigureCanvasAgg(fig).print_png(image_stream)
    image_stream.seek(0)

    paragraph = doc.add_paragraph()
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    paragraph.paragraph_format.space_before = Pt(6)
    paragraph.paragraph_format.space_after = Pt(4)
    picture = paragraph.add_run().add_picture(image_stream, width=Cm(11))
    max_height = Cm(10)
    if picture.height > max_height:
        scale = max_height / picture.height
        picture.height = int(picture.height * scale)
        picture.width = int(picture.width * scale)

    title = (block.get("flowchartTitle") or block.get("caption") or "Gambar Diagram Alir Penelitian").strip()
    if title:
        caption_paragraph = doc.add_paragraph()
        caption_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_paragraph.paragraph_format.space_before = Pt(2)
        caption_paragraph.paragraph_format.space_after = Pt(8)
        font_run(caption_paragraph.add_run(title), 10, italic=True)


def add_content_block(doc, block, sources=None, citation_style="apa", citation_numbers=None):
    block_type = block.get("type")
    if block_type == "paragraph":
        text = replace_citation_tokens(
            block.get("text", ""),
            sources or [],
            citation_style,
            citation_numbers or {},
        )
        add_paragraphs(doc, text)
    elif block_type == "list":
        add_content_list(doc, block.get("items", []), block.get("ordered", True))
    elif block_type == "table":
        add_content_table(doc, block.get("tableText", ""))
    elif block_type == "chart":
        add_content_chart(doc, block)
    elif block_type == "flowchart":
        add_content_flowchart(doc, block)
    elif block_type == "image":
        data_url = block.get("dataUrl", "")
        if not data_url.startswith("data:image/") or "," not in data_url:
            return
        try:
            image_data = base64.b64decode(data_url.split(",", 1)[1], validate=True)
            paragraph = doc.add_paragraph()
            paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            paragraph.paragraph_format.space_before = Pt(6)
            paragraph.paragraph_format.space_after = Pt(4)

            # Mengambil ukuran kustom jika pengguna menentukan (misal: 11 cm default)
            custom_w = block.get("widthCm")
            target_w = Cm(min(13.5, max(5.0, float(custom_w)))) if custom_w else Cm(11.5)
            picture = paragraph.add_run().add_picture(BytesIO(image_data), width=target_w)

            # Batasi tinggi maksimal agar tidak memakan ruang halaman A4 berlebihan (maksimal 9.5 cm)
            max_h_param = block.get("maxHeightCm")
            max_height = Cm(min(15.0, max(4.0, float(max_h_param)))) if max_h_param else Cm(9.5)
            if picture.height > max_height:
                scale = max_height / picture.height
                picture.width = int(picture.width * scale)
                picture.height = int(picture.height * scale)
        except Exception:
            return
        caption = (block.get("caption") or "").strip()
        if caption:
            caption_paragraph = doc.add_paragraph()
            caption_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            caption_paragraph.paragraph_format.space_before = Pt(2)
            caption_paragraph.paragraph_format.space_after = Pt(8)
            font_run(caption_paragraph.add_run(caption), 10, italic=True)

def set_table_borders_apa(table):
    """
    Format tabel terbuka sesuai kaidah karya ilmiah / APA (3 garis horizontal):
    - Garis atas tabel (top)
    - Garis bawah baris header (bottom cell baris 0 / insideH)
    - Garis bawah tabel (bottom)
    - Tanpa garis vertikal (left, right, insideV = nil)
    """
    tblPr = table._tbl.tblPr
    borders = tblPr.first_child_found_in("w:tblBorders")
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tblPr.append(borders)
    
    # Top border & Bottom border
    for edge in ("top", "bottom"):
        el = borders.find(qn(f"w:{edge}"))
        if el is None:
            el = OxmlElement(f"w:{edge}")
            borders.append(el)
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), "6")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), "000000")

    # Clear vertical & inside vertical
    for edge in ("left", "right", "insideV"):
        el = borders.find(qn(f"w:{edge}"))
        if el is None:
            el = OxmlElement(f"w:{edge}")
            borders.append(el)
        el.set(qn("w:val"), "nil")

    # InsideH (between rows) default nil, bottom of header will have border
    insideH = borders.find(qn("w:insideH"))
    if insideH is None:
        insideH = OxmlElement("w:insideH")
        borders.append(insideH)
    insideH.set(qn("w:val"), "nil")

    # Tambahkan garis bawah khusus untuk sel-sel di baris header (baris pertama)
    if len(table.rows) > 0:
        for cell in table.rows[0].cells:
            tcPr = cell._tc.get_or_add_tcPr()
            tcBorders = tcPr.first_child_found_in("w:tcBorders")
            if tcBorders is None:
                tcBorders = OxmlElement("w:tcBorders")
                tcPr.append(tcBorders)
            b = tcBorders.find(qn("w:bottom"))
            if b is None:
                b = OxmlElement("w:bottom")
                tcBorders.append(b)
            b.set(qn("w:val"), "single")
            b.set(qn("w:sz"), "6")
            b.set(qn("w:space"), "0")
            b.set(qn("w:color"), "000000")

def add_simple_table(doc, headers, rows, widths_font=10, caption=""):
    """
    Format tabel ilmiah:
    - Judul/label tabel ditaruh di ATAS tabel (misal Tabel 1. Judul)
    - Model tabel 3 garis (open table) tanpa background warna ungu/abu
    """
    if caption:
        p_cap = doc.add_paragraph()
        p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_cap.paragraph_format.line_spacing = 1.15
        p_cap.paragraph_format.space_before = Pt(6)
        p_cap.paragraph_format.space_after = Pt(4)
        p_cap.paragraph_format.keep_with_next = True
        font_run(p_cap.add_run(caption), size=10, bold=True)

    table = doc.add_table(rows=1, cols=len(headers))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders_apa(table)

    # Header
    for i, h in enumerate(headers):
        c = table.cell(0, i)
        c.text = str(h)
        c.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
        for p in c.paragraphs:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(3)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.line_spacing = 1
            for r in p.runs:
                font_run(r, widths_font, bold=True)

    # Body rows
    for row in rows:
        cells = table.add_row().cells
        for i, val in enumerate(row):
            raw_val = str(val or "")
            # Dukung newline '\n' atau tag '<br>' di dalam satu sel tabel
            lines = re.split(r"(?:<br\s*/?>|\r?\n)", raw_val)
            for line_idx, line_text in enumerate(lines):
                if line_idx == 0:
                    p = cells[i].paragraphs[0]
                else:
                    p = cells[i].add_paragraph()
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT if i > 0 else WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(2)
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.line_spacing = 1
                append_math_or_text(p, line_text.strip(), font_size=widths_font)
    
    # Spacing after table
    p_space = doc.add_paragraph()
    p_space.paragraph_format.space_before = Pt(0)
    p_space.paragraph_format.space_after = Pt(6)
    p_space.paragraph_format.line_spacing = 1
    return table

def add_content_table(doc, text, caption=""):
    rows = [[cell.strip() for cell in line.split("|")] for line in (text or "").splitlines() if line.strip()]
    if not rows:
        return
    column_count = max(len(row) for row in rows)
    headers = (rows[0] + [""] * column_count)[:column_count]
    body = [(row + [""] * column_count)[:column_count] for row in rows[1:]]
    add_simple_table(doc, headers, body, caption=caption)

def build_docx(data):
    ident = data.get("identitas", {})
    abstract = data.get("abstrak", {})
    persantunan_text = data.get("persantunan", "")
    refs = data.get("referensi", [])
    sources = data.get("sources", [])
    citation_style = "ieee" if data.get("citationStyle") == "ieee" else "apa"
    bibliography_sources = reference_sources(data.get("chapters", []), sources)
    citation_numbers = {
        source.get("id"): index
        for index, source in enumerate(bibliography_sources, 1)
        if source.get("id")
    }

    doc = Document()
    configure_section(doc.sections[0])

    # Styles
    normal = doc.styles["Normal"]
    normal.font.name = "Times New Roman"
    normal._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), "Times New Roman")
    normal.font.size = Pt(12)
    normal.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    normal.paragraph_format.line_spacing = 1.5
    normal.paragraph_format.space_before = Pt(0)
    normal.paragraph_format.space_after = Pt(0)
    normal.paragraph_format.widow_control = True

    for sname in ("Heading 1", "Heading 2", "Heading 3"):
        st = doc.styles[sname]
        st.font.name = "Times New Roman"
        st._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), "Times New Roman")
        st.font.size = Pt(12)
        st.font.bold = True
        st.font.color.rgb = RGBColor(0, 0, 0)
        st.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.LEFT
        st.paragraph_format.line_spacing = 1.15
        st.paragraph_format.keep_with_next = True
        st.paragraph_format.space_before = Pt(6)
        st.paragraph_format.space_after = Pt(2)

    # ==========================================
    # HALAMAN 1: COVER (PUBLIKASI ILMIAH)
    # ==========================================
    cover_sec = doc.sections[0]
    clear_footer(cover_sec)

    p_cov_title = doc.add_paragraph()
    p_cov_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_cov_title.paragraph_format.line_spacing = 1.15
    p_cov_title.paragraph_format.space_before = Pt(0)
    p_cov_title.paragraph_format.space_after = Pt(24)
    r = p_cov_title.add_run((ident.get("judul") or "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").upper())
    font_run(r, 12, bold=True)

    # Logo UMS (dibesarkan sedikit: 4.8 cm)
    p_logo = doc.add_paragraph()
    p_logo.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_logo.paragraph_format.space_before = Pt(12)
    p_logo.paragraph_format.space_after = Pt(24)
    if LOGO_PATH.exists():
        p_logo.add_run().add_picture(str(LOGO_PATH), width=Cm(4.8))
    else:
        r = p_logo.add_run("[LOGO UMS]")
        font_run(r, 12, bold=True)

    # PUBLIKASI ILMIAH
    p_pub = doc.add_paragraph()
    p_pub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_pub.paragraph_format.line_spacing = 1.15
    p_pub.paragraph_format.space_after = Pt(8)
    r = p_pub.add_run("PUBLIKASI ILMIAH")
    font_run(r, 12, bold=True)

    # Keterangan syarat
    prodi = ident.get("programStudi", "Teknik Informatika")
    prodi_str = prodi.replace("PROGRAM STUDI", "").replace("Program Studi", "").strip()
    fakultas = ident.get("fakultas", "Fakultas Komunikasi dan Informatika")
    fakultas_str = fakultas.replace("FAKULTAS", "").replace("Fakultas", "").strip()

    p_syarat = doc.add_paragraph()
    p_syarat.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_syarat.paragraph_format.line_spacing = 1.15
    p_syarat.paragraph_format.space_after = Pt(0)
    r = p_syarat.add_run(
        f"Disusun sebagai salah satu syarat menyelesaikan Program Studi Strata I pada\n"
        f"Program Studi {prodi_str} Fakultas {fakultas_str}"
    )
    font_run(r, 12, bold=True)

    # Enters antara syarat dan Oleh: (pas 1 halaman)
    for _ in range(3):
        p_blank = doc.add_paragraph()
        p_blank.paragraph_format.line_spacing = 1
        p_blank.paragraph_format.space_before = Pt(0)
        p_blank.paragraph_format.space_after = Pt(0)

    p_oleh = doc.add_paragraph()
    p_oleh.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_oleh.paragraph_format.line_spacing = 1.15
    p_oleh.paragraph_format.space_after = Pt(2)
    r = p_oleh.add_run("Oleh:")
    font_run(r, 12, bold=True)

    nama_mhs = (ident.get("nama") or "NAMA LENGKAP MAHASISWA").upper()
    nim_mhs = ident.get("nim") or "L200070150"

    p_mhs = doc.add_paragraph()
    p_mhs.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_mhs.paragraph_format.line_spacing = 1.15
    p_mhs.paragraph_format.space_after = Pt(2)
    r = p_mhs.add_run(nama_mhs)
    r.underline = True
    font_run(r, 12, bold=True)

    p_nim = doc.add_paragraph()
    p_nim.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_nim.paragraph_format.line_spacing = 1.15
    p_nim.paragraph_format.space_after = Pt(0)
    r = p_nim.add_run(nim_mhs)
    font_run(r, 12, bold=True)

    # Enters antara NIM dan Institusi (pas 1 halaman)
    for _ in range(4):
        p_blank = doc.add_paragraph()
        p_blank.paragraph_format.line_spacing = 1
        p_blank.paragraph_format.space_before = Pt(0)
        p_blank.paragraph_format.space_after = Pt(0)

    inst_items = [
        ident.get("programStudi", "PROGRAM STUDI TEKNIK INFORMATIKA").upper(),
        f"{ident.get('fakultas', 'FAKULTAS KOMUNIKASI DAN INFORMATIKA').upper()} {ident.get('universitas', 'UNIVERSITAS MUHAMMADIYAH SURAKARTA').upper()}",
        str(ident.get("tahun", "2023"))
    ]
    for idx, txt in enumerate(inst_items):
        p = doc.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.line_spacing = 1.15
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(txt)
        font_run(r, 12, bold=True)

    # ==========================================
    # HALAMAN 2: HALAMAN PERSETUJUAN (Page 1)
    # ==========================================
    front = doc.add_section(WD_SECTION.NEW_PAGE)
    configure_section(front); clear_footer(front)
    set_page_number(front, "decimal", 1)
    page_field(front.footer.paragraphs[0])

    add_center(doc, "HALAMAN PERSETUJUAN", True, after=18)
    add_center(doc, (ident.get("judul") or "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").upper(), True, after=18)
    add_center(doc, "PUBLIKASI ILMIAH", True, after=14)
    add_center(doc, "oleh:", False, after=18)

    p_penulis = add_center(doc, nama_mhs, True, after=2)
    p_penulis.runs[0].underline = True
    add_center(doc, nim_mhs, True, after=0)

    # Jarak enter terukur agar pas tepat 1 halaman A4
    for _ in range(6):
        p_b = doc.add_paragraph()
        p_b.paragraph_format.space_before = Pt(0); p_b.paragraph_format.space_after = Pt(0)

    p_uji = doc.add_paragraph()
    p_uji.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_uji.paragraph_format.line_spacing = 1.15
    p_uji.paragraph_format.space_after = Pt(0)
    r = p_uji.add_run("Telah diperiksa dan disetujui untuk diuji oleh:\nDosen Pembimbing")
    font_run(r, 12)

    for _ in range(3):
        p_b = doc.add_paragraph()
        p_b.paragraph_format.space_before = Pt(0); p_b.paragraph_format.space_after = Pt(0)

    pemb = ident.get("pembimbing") or "Dr. Dosen Pembimbing, M.Sc."
    nidn = ident.get("nidn") or "123"
    p_pemb = add_center(doc, pemb, True, after=0)
    p_pemb.runs[0].underline = True
    add_center(doc, f"NIDN.{nidn}", True, after=0)

    # ==========================================
    # HALAMAN 3: HALAMAN PENGESAHAN (Page 2)
    # ==========================================
    doc.add_page_break()
    add_center(doc, "HALAMAN PENGESAHAN", True, after=12)
    add_center(doc, (ident.get("judul") or "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").upper(), True, after=12)
    add_center(doc, "OLEH", True, after=4)
    p_penulis2 = add_center(doc, nama_mhs, True, after=0)
    p_penulis2.runs[0].underline = True
    add_center(doc, nim_mhs, True, after=10)

    fakultas_clean = ident.get("fakultas", "Fakultas Komunikasi dan Informatika")
    hari = ident.get("hariUjian", "…….")
    tanggal = ident.get("tanggalUjian", "………. 2023")
    tahun = str(ident.get("tahun", "2023"))

    p_pengesahan_text = doc.add_paragraph()
    p_pengesahan_text.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_pengesahan_text.paragraph_format.line_spacing = 1.15
    p_pengesahan_text.paragraph_format.space_after = Pt(8)
    r = p_pengesahan_text.add_run(
        f"Telah dipertahankan di depan Dewan Penguji\n"
        f"{fakultas_clean}\n"
        f"Universitas Muhammadiyah Surakarta\n"
        f"Pada hari {hari}, {tanggal}\n"
        f"dan dinyatakan telah memenuhi syarat"
    )
    font_run(r, 12, bold=True)

    add_center(doc, "Dewan Penguji:", True, after=6)

    penguji1 = ident.get("penguji1") or "Dosen Penguji, S. Pd. M.Hum."
    penguji2 = ident.get("penguji2") or "Dr. Dosen Penguji, M. Ed."

    tbl_penguji = doc.add_table(rows=3, cols=2)
    tbl_penguji.alignment = WD_TABLE_ALIGNMENT.CENTER
    remove_borders(tbl_penguji)
    tbl_penguji.columns[0].width = Cm(10)
    tbl_penguji.columns[1].width = Cm(4)

    dewan_data = [
        (f"1. {pemb}\n    (Ketua Dewan Penguji)", "(……..……..)"),
        (f"2. {penguji1}\n    (Anggota I Dewan Penguji)", "(……………)"),
        (f"3. {penguji2}\n    (Anggota II Dewan Penguji)", "(…………….)")
    ]
    for i, (text_dewan, sign_placeholder) in enumerate(dewan_data):
        row = tbl_penguji.rows[i]
        c0 = row.cells[0]; c0.text = text_dewan
        c1 = row.cells[1]; c1.text = sign_placeholder
        for p in c0.paragraphs:
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.space_after = Pt(3)
            for r in p.runs:
                font_run(r, 11, bold=False)
        for p in c1.paragraphs:
            p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.space_after = Pt(3)
            for r in p.runs:
                font_run(r, 11)

    # Dekan dan Kaprodi: jarak pas agar tetap dalam 1 halaman
    for _ in range(2):
        p_b = doc.add_paragraph()
        p_b.paragraph_format.space_before = Pt(0); p_b.paragraph_format.space_after = Pt(0)

    tbl_pejabat = doc.add_table(rows=1, cols=2)
    tbl_pejabat.alignment = WD_TABLE_ALIGNMENT.CENTER
    remove_borders(tbl_pejabat)
    tbl_pejabat.columns[0].width = Cm(7)
    tbl_pejabat.columns[1].width = Cm(7)

    dekan = ident.get("dekan") or "Prof. Dr. Nama Lengkap"
    nidn_dekan = ident.get("nidnDekan") or "…"
    kaprodi = ident.get("kaprodi") or "Prof. Dr. Nama Lengkap"
    nidn_kaprodi = ident.get("nidnKaprodi") or "…"

    cell_dekan = tbl_pejabat.cell(0, 0)
    cell_dekan.text = f"Dekan\n{fakultas_clean}\n\n\n\n{dekan}\nNIDN. {nidn_dekan}"
    for p in cell_dekan.paragraphs:
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.line_spacing = 1.15
        for r in p.runs:
            font_run(r, 11)

    cell_kaprodi = tbl_pejabat.cell(0, 1)
    cell_kaprodi.text = f"Ketua Program Studi\n{prodi_str}\n\n\n\n{kaprodi}\nNIDN. {nidn_kaprodi}"
    for p in cell_kaprodi.paragraphs:
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.line_spacing = 1.15
        for r in p.runs:
            font_run(r, 11)

    # ==========================================
    # HALAMAN 4: PERNYATAAN (Page 3)
    # ==========================================
    doc.add_page_break()
    add_center(doc, "PERNYATAAN", True, after=24)

    p_pernyataan = doc.add_paragraph(style="Normal")
    p_pernyataan.paragraph_format.first_line_indent = Cm(1.25)
    p_pernyataan.paragraph_format.line_spacing = 1.5
    p_pernyataan.paragraph_format.space_after = Pt(12)
    font_run(p_pernyataan.add_run(
        "Dengan ini saya menyatakan bahwa dalam skripsi ini tidak terdapat karya yang "
        "pernah diajukan untuk memperoleh gelar kesarjanaan di suatu perguruan tinggi dan "
        "sepanjang pengetahuan saya juga tidak terdapat karya atau pendapat yang pernah ditulis "
        "atau diterbitkan orang lain, kecuali secara tertulis diacu dalam naskah dan disebutkan "
        "dalam daftar pustaka."
    ))

    p_pernyataan2 = doc.add_paragraph(style="Normal")
    p_pernyataan2.paragraph_format.first_line_indent = Cm(1.25)
    p_pernyataan2.paragraph_format.line_spacing = 1.5
    p_pernyataan2.paragraph_format.space_after = Pt(12)
    font_run(p_pernyataan2.add_run(
        "Apabila kelak terbukti ada ketidakbenaran dalam pernyataan saya di atas, "
        "maka akan saya pertanggungjawabkan sepenuhnya."
    ))

    # Enters sebelum Surakarta agar tetap 1 halaman
    for _ in range(4):
        p_b = doc.add_paragraph()
        p_b.paragraph_format.space_before = Pt(0); p_b.paragraph_format.space_after = Pt(0)

    # Tanda tangan penulis di kanan
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.paragraph_format.line_spacing = 1.15
    p_ttd.paragraph_format.right_indent = Cm(1)
    r = p_ttd.add_run(f"Surakarta, …………….. {tahun}\nPenulis\n\n\n\n\n{nama_mhs}\n{nim_mhs}")
    font_run(r, 12, bold=True)

    # ==========================================
    # HALAMAN 5: SURAT KETERANGAN LULUS PLAGIASI (Page 4)
    # ==========================================
    doc.add_page_break()
    p_plag = add_center(doc, "SURAT KETERANGAN LULUS PLAGIASI", True, after=18)
    p_plag.runs[0].underline = True
    add_center(doc, ":", False, after=0)

    # ==========================================
    # HALAMAN 6+: NASKAH PUBLIKASI ILMIAH
    # Penomoran dimulai kembali dari 1
    # ==========================================
    main = doc.add_section(WD_SECTION.NEW_PAGE)
    configure_section(main); clear_footer(main)
    set_page_number(main, "decimal", 1)
    page_field(main.footer.paragraphs[0])

    # Judul Artikel Naskah Publikasi Ilmiah
    p_art_title = doc.add_paragraph()
    p_art_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_art_title.paragraph_format.line_spacing = 1
    p_art_title.paragraph_format.space_after = Pt(12)
    r = p_art_title.add_run((ident.get("judul") or "JUDUL NASKAH PUBLIKASI ILMIAH MAHASISWA").upper())
    font_run(r, 12, bold=True)

    # Abstrak Indonesia
    add_abstract(
        doc,
        "Abstrak",
        abstract.get("indonesia", ""),
        "Kata Kunci",
        abstract.get("kataKunci", ""),
    )

    # Abstract English
    add_abstract(
        doc,
        "Abstract",
        abstract.get("english", ""),
        "Keywords",
        abstract.get("keywords", ""),
    )

    # Section Pembagian Batang Tubuh Publikasi Ilmiah
    p_space = doc.add_paragraph()
    p_space.paragraph_format.space_after = Pt(12)

    for chapter_index, chapter in enumerate(data.get("chapters", []), 1):
        chapter_title = (chapter.get("title") or f"Bagian {chapter_index}").strip()
        add_heading(doc, f"{chapter_index}. {chapter_title.upper()}", 1)
        
        # Sections
        for section_index, section in enumerate(chapter.get("sections", []), 1):
            if section.get("title"):
                section_title = section.get("title").strip()
                add_heading(doc, f"{chapter_index}.{section_index} {section_title}", 2)
            
            blocks = section.get("blocks", [])
            for b_idx, block in enumerate(blocks):
                # Paragraf pertama setelah heading tanpa indentasi (style First Paragraph)
                if block.get("type") == "paragraph":
                    text = replace_citation_tokens(block.get("text", ""), sources, citation_style, citation_numbers)
                    paragraphs = [x.strip() for x in (text or "").split("\n\n") if x.strip()]
                    for p_sub_idx, para_text in enumerate(paragraphs):
                        p = doc.add_paragraph(style="Normal")
                        # Paragraf pertama di section/block = tanpa indentasi, berikutnya indent 1.25 cm
                        if b_idx == 0 and p_sub_idx == 0:
                            p.paragraph_format.first_line_indent = Cm(0)
                        else:
                            p.paragraph_format.first_line_indent = Cm(1.25)
                        append_math_or_text(p, para_text, font_size=12)
                elif block.get("type") == "table":
                    caption = block.get("caption") or block.get("title") or f"Tabel {chapter_index}.{section_index}"
                    add_content_table(doc, block.get("tableText", ""), caption=caption)
                else:
                    add_content_block(doc, block, sources, citation_style, citation_numbers)

            for subsection_index, subsection in enumerate(section.get("subsections", []), 1):
                subsection_title = (subsection.get("title") or f"Sub-sub {subsection_index}").strip()
                add_heading(doc, f"{chapter_index}.{section_index}.{subsection_index} {subsection_title}", 3)
                for sb_idx, block in enumerate(subsection.get("blocks", [])):
                    if block.get("type") == "paragraph":
                        text = replace_citation_tokens(block.get("text", ""), sources, citation_style, citation_numbers)
                        paragraphs = [x.strip() for x in (text or "").split("\n\n") if x.strip()]
                        for p_sub_idx, para_text in enumerate(paragraphs):
                            p = doc.add_paragraph(style="Normal")
                            if sb_idx == 0 and p_sub_idx == 0:
                                p.paragraph_format.first_line_indent = Cm(0)
                            else:
                                p.paragraph_format.first_line_indent = Cm(1.25)
                            append_math_or_text(p, para_text, font_size=12)
                    elif block.get("type") == "table":
                        caption = block.get("caption") or block.get("title") or f"Tabel {chapter_index}.{section_index}.{subsection_index}"
                        add_content_table(doc, block.get("tableText", ""), caption=caption)
                    else:
                        add_content_block(doc, block, sources, citation_style, citation_numbers)

    # PERSANTUNAN (Sebelum Daftar Pustaka jika diisi atau default)
    if persantunan_text and str(persantunan_text).strip():
        add_heading(doc, "PERSANTUNAN", 1)
        p_pers = doc.add_paragraph(style="Normal")
        p_pers.paragraph_format.first_line_indent = Cm(0)
        font_run(p_pers.add_run(str(persantunan_text).strip()))

    # DAFTAR PUSTAKA
    add_heading(doc, "DAFTAR PUSTAKA", 1)
    for ref in refs:
        if not str(ref).strip():
            continue
        p = doc.add_paragraph(style="Normal")
        p.paragraph_format.first_line_indent = Cm(-1)
        p.paragraph_format.left_indent = Cm(1)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.line_spacing = 1.15
        r = p.add_run(str(ref).strip())
        font_run(r)

    formatted_sources = bibliography_sources
    if citation_style == "apa":
        formatted_sources = sorted(
            bibliography_sources,
            key=lambda source: str(source.get("authors") or "").casefold(),
        )
    for source in formatted_sources:
        p = doc.add_paragraph(style="Normal")
        p.paragraph_format.first_line_indent = Cm(-1)
        p.paragraph_format.left_indent = Cm(1)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.line_spacing = 1.15
        number = citation_numbers.get(source.get("id"))
        text = format_reference(source, citation_style, number)
        font_run(p.add_run(text))

    update_fields(doc)
    doc.core_properties.title = ident.get("judul", "Publikasi Ilmiah")
    doc.core_properties.author = ident.get("nama", "")
    doc.core_properties.subject = "Publikasi Ilmiah UMS"

    out = BytesIO()
    doc.save(out)
    out.seek(0)
    return out
