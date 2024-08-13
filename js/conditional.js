// // if (condition) {
// //   // code to be executed if condition is true
// // } else {
// //   // code to be executed if condition is false
// // }

// let age=20;
// if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }
// // write a program to check whether a number is even or odd

// let num=10;
// if(num%2==0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
// }

// // write a program to check whether a number is positive or negative
// let number=-10;
// if(number>0){
//     console.log("Number is positive");
// }
// else{
//     console.log("Number is negative");
// }

// // write a program to check whether a number is positive or negative or zero

// if(number>0){
//     console.log("Number is positive");
// }
// else if(number<0){
//     console.log("Number is negative");
// }
// else{
//     console.log("Number is zero");
// }

// // write a program to check whether a number is divisible by 5 or not
// let num1=10;
// if(num1%5==0){
//     console.log("Number is divisible by 5");
// }
// else{
//     console.log("Number is not divisible by 5");
// }

// // write a program to check the grades of the student based on the marks

// let marks=80;
// if(marks>=90){
//     console.log("Grade A");
// }
// else if(marks>=80 && marks<90){
//     console.log("Grade B");
// }
// else if(marks>=70 && marks<80){
//     console.log("Grade C");
// }
// else if(marks>=60 && marks<70){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }



// switch-case statement

// switch(expression){
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//         // code block
// }

let day=3;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}