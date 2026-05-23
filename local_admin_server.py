#!/usr/bin/env python3
import json
import shutil
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
CONTENT_PATH = ROOT / "data" / "content.json"
BACKUP_PATH = ROOT / "data" / "content.backup.json"
HOST = "127.0.0.1"
PORT = 8766
MAX_BODY_SIZE = 2_000_000


class AdminHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if urlparse(self.path).path == "/api/content":
            self.send_content()
            return
        super().do_GET()

    def do_POST(self):
        if urlparse(self.path).path != "/api/content":
            self.send_json(404, {"ok": False, "error": "Not found."})
            return

        try:
            content_length = int(self.headers.get("Content-Length", "0"))
            if content_length > MAX_BODY_SIZE:
                raise ValueError("Request body is too large.")

            raw_body = self.rfile.read(content_length).decode("utf-8")
            content = json.loads(raw_body)
            self.validate_content(content)

            shutil.copyfile(CONTENT_PATH, BACKUP_PATH)
            CONTENT_PATH.write_text(
                json.dumps(content, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

            self.send_json(
                200,
                {
                    "ok": True,
                    "savedAt": datetime.now(timezone.utc).isoformat(),
                    "backup": "data/content.backup.json",
                },
            )
        except Exception as error:
            self.send_json(400, {"ok": False, "error": str(error)})

    def send_content(self):
        try:
            body = CONTENT_PATH.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as error:
            self.send_json(500, {"ok": False, "error": str(error)})

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    @staticmethod
    def validate_content(content):
        if not isinstance(content, dict):
            raise ValueError("Content must be a JSON object.")

        for lang in ("zh", "en"):
            if not isinstance(content.get(lang), dict):
                raise ValueError(f'Missing "{lang}" language content.')


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), AdminHandler)
    print(f"Local admin editor: http://{HOST}:{PORT}/admin.html")
    print(f"Site preview:       http://{HOST}:{PORT}/")
    server.serve_forever()
