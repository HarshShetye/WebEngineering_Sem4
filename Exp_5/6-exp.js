const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const htmlResponse = `
    <table border=5>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      <tr>
        <td>Harsh</td>
        <td>21</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Sparsh</td>
        <td>12</td>
        <td>Male</td>
      </tr>
    </table>
  `;
  res.end(htmlResponse);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
