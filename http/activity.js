const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Welcome to my website</h1>");
  } else if (parsedUrl.pathname === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<h1>Contact us at info@example.com</h1>`);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`<h1>page not found</h1>`);
  }
});
port = 8000;

server.listen(port, () => {
  console.log(`Server is running on the port http://localhost:${port}`);
});
