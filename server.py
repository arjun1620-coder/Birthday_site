import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving birthday site at http://localhost:{PORT}")
    httpd.serve_forever()
