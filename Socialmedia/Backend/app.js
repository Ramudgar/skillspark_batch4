// // const math = require("./math");
// const { add, subtract } = require("./math");

// // const addResult = math.add(7, 3);
// // const subtractResult = math.subtract(7, 3);
// const addResult = add(7, 3);
// const subtractResult = subtract(7, 3);
// // console.log(addResult);
// // console.log(subtractResult);

// const fs = require("fs");

// fs.readFile("greet.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error reading file");
//   } else {
//     // console.log(data);
//   }
// });

// const data = fs.readFileSync("greet.txt", "utf8");
// // console.log(data);

// // make a new file and write to it and then retetrieve the data from it
// // and then update the data in the file after reading it
// // and then delete the file

// const http = require("http");

// const server = http.createServer( (req,res)=>{
//     res.write("Hello World");
//     res.end();
// });

// server.listen(3000, (err) => {
//   if (err) {
//     console.log("Error starting server");
//   } else {
//     console.log("Server started on port 3000");
//   }
// });

const express = require("express");
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia')
  .then(() => console.log('Connected!'));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Contact Page ${name}`);
});

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Jack", age: 35 },
];

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((item) => item.id == id);
  if (!user) {
    res.send("User not found");
  }
  res.send(user);
});

app.post("/user", (req, res) => {
  res.send("User created");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
