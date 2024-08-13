// // function greet(){
// //     // function body code
// //     console.log('Hi,Namaste everyone!');
// // }


// // greet();



// // function add(){
// //     let a=5;
// //     let b=10;
// //     console.log(a+b);
// // }

// // add();


// function add({a,b}){
//     console.log(a)
//     console.log(b)
    
//     console.log(a+b);
// }

// add({b:20,a:10});
// // add(10,20);
// // add(20,30);


// function sum(a,b){
//     return a+b;
// }

// const result=sum(10,20);
// console.log(result);



// // function expression

// let heloo=function(){
//     console.log('Hello');
// }

// heloo();


// // arrow function
// let greet=()=>{
//     return('Hello');
// };

// 2. Create a function that calculates the average of an array of numbers.

//  const arry=[10,20,30,40,50 ];
// function average(arr){
//     let sum=0;
//     for(let i=0;i<=arr.length-1;i++){
//         // sum+=arr[i];
//         sum=sum+arr[1];

//     }
//     return sum/arr.length;
// }

// const result=average(arry);
// console.log(result);


// 4. Create a function that reverses a string using for loop.

// function reverseString(str){
//      let reversed='';
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i];
//     }
//     return reversed;
     
// }
// const result=reverseString('Hello');
// console.log(result);


// 5. Write a function that finds the maximum value in an array of numbers.
 
// const arry=[10,20,30,40,50 ];
// function max(arr){
//     let max=0;
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }

// const result=max(arry);
// console.log(result);

// 8. Create a function that checks if a string is a palindrome.
function isPalindrome(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed===str;
}

const result=isPalindrome('madam');
console.log(result);


