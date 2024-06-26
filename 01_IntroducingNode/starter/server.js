import http from "http";

const PORT = 4000;
const HOST = "localhost";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello World");
    console.log(`Server is at http://${HOST}:${PORT}`);
  })
  .listen(PORT, HOST);
