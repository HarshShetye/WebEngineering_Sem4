const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/book", (req, res) => {
  res.send("<h2>BOOK PAGE IS HERE</h2>");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
