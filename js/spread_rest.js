

// const arr=[1,2,3,4,5,6,7,8,9,10];

// console.log(arr[0])
// console.log(arr[4])

// const[a,b,c,...rest]=arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);


function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num,0);
  }
  
  console.log(add(1, 2, 3,5,8)); // 19