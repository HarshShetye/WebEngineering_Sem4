const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const studentSchema = new mongoose.Schema({
  name: String,
  sapid: Number,
  marks: Number,
});

const student = new mongoose.model("student", studentSchema);
//CREATION

// student
//   .create({ name: "Harsh", sapid: 99, marks: 75 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "Nutan", sapid: 50, marks: 40 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "Neil", sapid: 70, marks: 73 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "Vatsal", sapid: 39, marks: 72 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "Jeet", sapid: 42, marks: 68 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));

//UPDATION    //if multiple name then updateOne=updateMany

// student
//   .updateOne({ name: "Harsh" }, { sapid: 68 })
//   .then(() => console.log("updated"))
//   .catch((err) => console.log(err));

//FIND     //andheri find
// more than one find= find()

// student
//   .findOne({ name: "Harsh" })
//   .then((found_item) => console.log(found_item))
//   .catch((err) => console.log(err));

//DELETION          //deleteMany
// student
//   .deleteOne({ name: "Jeet" })
//   .then(() => console.log("deleted"))
//   .catch((err) => console.log(err));

//Q) FINDING
// student
//   .find({ marks: { $gte: 70 } })
//   .then((found_item) => console.log(found_item))
//   .catch((err) => console.log(err));

// student
//   .find() //finding all items
//   .then((found_items) => console.log(found_items))
//   .catch((err) => console.log(err));

// student
//   .findOne() //finding all items
//   .then((found_items) => console.log(found_items))
//   .catch((err) => console.log(err));

app.get("/student", async function (req, res) {
  // const data = await student.find({ marks: { $gte: 73, $lte: 80 } });
  const data = await student.find();
  console.log(data);
  res.send("<h1></h1>" + data);
});

app.listen(3000, function (err) {
  if (err) console.log(err);
  else console.log("listening");
});
