const greet = (callback) => {
  return callback;
};

const callbackFunction = (name) => {
  return `Hello ${name} ,how are you?`;
};

let result = greet(callbackFunction("John"));
console.log(result);

// make add function and subtract function and call add and then return both add and sub
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
const addSub = (a, b) => {
  let sum = add(a, b);
  let substract = sub(a, b);
  return `Addition is ${sum} and substraction is ${substract}`;
};
let result1 = addSub(10, 5);

console.log(result1);

function processedData(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(()=>{
        callback(arr[i]);
    },1000 );
  }
}

function callbackFunction(data) {
  console.log(data);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
processedData(arr, callbackFunction); //1 2 3 4 5 6 7 8 9 10
