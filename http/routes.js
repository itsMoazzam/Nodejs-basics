const http = require("http");
const url = require("url");
const server = http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to Home Page</h1>");
    } else if (parsedUrl.pathname === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to About Us Page</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
    }
  })
  .listen(3000, () => {
    console.log(`server is running`);
  });
