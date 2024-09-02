// const math = require("./math");
const { add, subtract } = require("./math");

// const addResult = math.add(7, 3);
// const subtractResult = math.subtract(7, 3);
const addResult = add(7, 3);
const subtractResult = subtract(7, 3);
// console.log(addResult);
// console.log(subtractResult);

const fs = require("fs");

fs.readFile("greet.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
  } else {
    // console.log(data);
  }
});

const data = fs.readFileSync("greet.txt", "utf8");
// console.log(data);

// make a new file and write to it and then retetrieve the data from it
// and then update the data in the file after reading it
// and then delete the file

const http = require("http");

const server = http.createServer( (req,res)=>{
    res.write("Hello World");
    res.end();
});

server.listen(3000, (err) => {
  if (err) {
    console.log("Error starting server");
  } else {
    console.log("Server started on port 3000");
  }
});
