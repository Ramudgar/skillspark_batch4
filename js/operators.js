// // camelCase, PascalCase, snake_case
// // camelCase
// const fullName = "Ram Udgar Yadav";
// // PascalCase
// const FullName = "Ram Udgar Yadav";
// // snake_case
// const full_name = "Ram Udgar Yadav";

// // Data types in js
// // 1. String
// const caste = "899583462#@Yadav;:";

// // 2. Number
// const age = 25;
// console.log(age);

// // 3. Boolean
// const isMarried = false;
// console.log(isMarried);

// // 4. Null
// const isNull = null;
// console.log(isNull);

// // 5. Undefined
// let surname;
// surname = "Yadav";
// console.log(surname); // undefined// Yadav

// // 6. Object
// const person = {
//   name: "Ram",
//   age: 25,
//   isMarried: false,
// };

// console.log(person); // {name: "Ram", age: 25, isMarried: false}
// console.log(person.name); // Ram

// // 7. Array
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(numbers[0]); // 1
// console.log(numbers[4]); // 5

// console.log(numbers.length); // 5

// const students = [
//   {
//     name: "Ram",
//     age: 25,
//     isMarried: false,
//   },
//   {
//     name: "Shyam",
//     age: 26,
//     isMarried: true,
//   },
// ];


// console.log(students); // [{name: "Ram", age: 25, isMarried: false}, {name: "Shyam", age: 26, isMarried: true}]
// console.log(students[0].name); // Ram


// // NaN

// let x=10.0;
// let y="tes";
// let z=x-y;
// console.log(z); // NaN// 10tes// NaN


// // Typeof operator
// console.log(typeof x); // number


// // type casting in js
// let x_string=String(x);
// console.log(x_string);

// let p="10";
// let y_number=Number(y);
// console.log(y_number); // NaN

// let p_number=Number(p);
// let p_parseInt=parseInt(p);

// // number to string using toString() method
// let num=10;
// let num_string=num.toString();
// console.log(num_string); // "10"


// Operators in js
// 1. Arithmetic operators
let a=22;
let b=10;
let c=a+b;
console.log(c); // 1020

let d=a-b;
console.log(d); // -10

let e=a*b;
console.log(e); // 200

let f=a/b;
console.log(f); // 0.5

let g=a%b;

console.log(g); // 2

let h=a**4;

console.log(h); // 234256

// 2. Assignment operators
let x=10;
let y=20;

x++;  //x+=1 //  x=x+1
x++
x--
console.log(x); //11


// 3. Comparison operators
let m=10;
let n=20;

console.log(m==n);
console.log(m!=n);
console.log(m>n);
console.log(m<n);
console.log(m>=n);
console.log(m<=n);
console.log(m===n);
console.log(m!==n);

let j="10";
let k=10;
console.log(j==k);// true 
console.log(j===k);// false
console.log(j!=k);//
console.log(j!==k);//true


// 4. Logical operators
let p=true;
let q=false;


console.log(p&&q); // false

console.log(p||q); // true

console.log(!p); // false

console.log(!q); // true




