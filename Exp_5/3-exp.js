const fs = require("fs");

// Read data from file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  // Write data to file
  fs.writeFile("data.txt", data + "Data appended to file!", (err) => {
    if (err) throw err;
    console.log("Data written to file.");

    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
