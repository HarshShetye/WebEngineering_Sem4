const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const htmlFile = fs.readFileSync("form.html", "utf-8");
  res.end(htmlFile);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
