import time
import webbrowser
import subprocess
from http.server import SimpleHTTPRequestHandler, HTTPServer
from threading import Thread

PORT = 8000

class MyServer(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def start_server():
    with HTTPServer(("", PORT), MyServer) as httpd:
        print(f"Serving on port {PORT}...")
        # Thread(target=webbrowser.open, args=(f"http://localhost:{PORT}",)).start()
        chrome_path = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        chrome_path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        command = f"cmd /C \"{chrome_path}\" http://localhost:{PORT} --new-window"
        subprocess.Popen(command)
        httpd.serve_forever()

if __name__ == "__main__":
    start_server()