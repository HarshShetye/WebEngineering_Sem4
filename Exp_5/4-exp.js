const fs = require("fs");

// Read data from file
fs.readFile("data4.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  // Delete file
  fs.unlink("data4.txt", (err) => {
    if (err) throw err;
    console.log("File deleted.");

    fs.readFile("data4.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
