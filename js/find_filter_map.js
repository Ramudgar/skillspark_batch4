const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.find((num) => num > 5); // 6

const mapData = numbers.map((num) => num / 2); // [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

//
let books = [
  {
    title: "book1",
    author: "author1",
  },
  {
    title: "book2",
    author: "author2",
  },
  {
    title: "book3",
    author: "author3",
  },
];

let bookTitle = books.map((book) => `${book.title} By ${book.author}`);

console.log(bookTitle); // ["book1 By author1", "book2 By author2", "book3 By author3"]

// Given an array of strings, filter out all strings that do not contain the letter "e".
const strArray = ["Hello", "World", "JavaScript", "Programming"];
const filteredArray = strArray.filter((str) => {
    return !str.includes("e");
});
console.log(filteredArray);
