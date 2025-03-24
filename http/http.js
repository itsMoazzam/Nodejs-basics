const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(`hello Node!`);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on the port http://localhost:${port}`);
});
