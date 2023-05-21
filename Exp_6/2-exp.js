const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// send HTML form when user navigates to root path ('/')
app.get("/", (req, res) => {
  const formHtml = `
    <form method="POST" action="/submit">
      <label for="data">Enter some data:</label>
      <input type="text" name="data" id="data">
      <button type="submit">Submit</button>
    </form>
  `;
  res.send(formHtml);
});

// handle form submission using POST method
app.post("/submit", (req, res) => {
  const data = req.body.data;
  res.send(`You submitted: ${data}`);
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
