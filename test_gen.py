import sys
import traceback

print("=== TEST BUILD DOCX ===", flush=True)

try:
    from generator import build_docx
    print("Import OK", flush=True)
    
    data = {
        'identitas': {'judul': 'Test Judul', 'nama': 'Test Nama', 'nim': '123456789'},
        'chapters': [],
        'sources': [],
        'referensi': [],
        'citationStyle': 'apa'
    }
    
    print("Calling build_docx...", flush=True)
    stream = build_docx(data)
    size = len(stream.getvalue())
    print(f"SUCCESS - stream size: {size} bytes", flush=True)
    
except Exception as e:
    print(f"ERROR: {e}", flush=True)
    traceback.print_exc()
    sys.exit(1)

print("=== DONE ===", flush=True)
