// const http = require("http");

// const port = 5500;
// const hostname = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("HELLO WORLD");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server is running at http://${hostname}:${port}/`);
// });

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const htmlResponse = "<h1>Hello World!</h1>";
  const textResponse = "Hello World!";
  const contentType = req.headers["content-type"];
  if (contentType === "text/html") {
    res.end(htmlResponse);
  } else {
    res.end(textResponse);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
