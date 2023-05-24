// Write a function that returns true or false for a given number. We will reuse this function, so make it reusable.

// const number = (num) => {
//   if (num % 2 === 0) {
//     console.log("even number");
//   } else {
//     console.log("odd number");
//   }
// };
// number(93);


// const funA = ()=>{
//     console.log(`welcom function "A"`);
// }
// const funB = ()=>{
//     console.log(`welcom function "B"`);
// }
// funA();
// funB();

// const personOne = (friend, callfriend)=>{
//     console.log(`I am busy right now, I am talking to ${friend}. I will call you later.`);
//     callfriend();
// }
// const personTwo = ()=>{
//     console.log("hey whatsup ");
// }
// personOne ("Ashu", personTwo);


// function myDesplay(some){
//     console.log(some);
// }
// function myFirst(){
//     myDesplay("Hello ");
// }
// function mySecond() {
//     myDesplay("good bye")
// }
// myFirst();
// mySecond();



// function myCalculator(opration){
//     console.log(opration);
// }

// //  sum +

// function mySum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let sumResult= mySum(12,25);
// myCalculator(sumResult);

// // sub -

// function mySub(num1, num2){
//     let sub = num1 - num2;
//     return sub;
// }
// let subResult = mySub(20,16);
// myCalculator (subResult);

// // multiply *

// function myMul(num1, num2){
//     let mul = num1 * num2;
//     return mul;
// }
// let mulResult = myMul( 6, 5);
// myCalculator(mulResult);

// //  Division /

// function myDiv(num1, num2){
//     let divide = num1 / num2;
//     return divide;
// }
// let divResult = myDiv(456, 10);
// myCalculator(divResult);


// // remainder

// function myRemain(num1, num2){
//     let remainder = num1 % num2;
//     return remainder; 
// }
// let remainResult = myRemain(24657,9);
// myCalculator(remainResult);


// function myDesplay(something){
//     console.log(something);
// }

// function myCalculator(num1, num2, callback){
//     let sum = num1 + num2; 
//     callback (sum);
// }
// myCalculator(134, 756, myDesplay);



// create an array

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a Callback
// const positiveNum = removeNeg(myNumbers, (num) =>{
//    return num > 0 ;
// }); 

// // Display Result
// console.log(positiveNum);

// // Remove negative numbers

// function removeNeg(numbers, callback){
//     const myArray = [];
//         for(const num of numbers){
//             if( callback(num)){
//                 myArray.push(num);
//             }
//         }
//         return myArray;
//     }


//  Seprate Function 


function myCalculator(operation){
    console.log(operation);
}


// addition function 

function addition(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}
addition(123,456,myCalculator);

// substraction function

function substraction(num1, num2, callback){
    let sub = num1 - num2;
    callback(sub)
}
substraction(500,200,myCalculator);

// multiplication function

function multiply(num1, num2, callback){
    let mul = num1 * num2;
    callback(mul);
}
multiply(25,30,myCalculator);

// divide 

function divide(num1, num2, callback){
    let div = num1 / num2;
    callback(div); 
}
divide(123,11,myCalculator);

// remainder 

function remainder(num1, num2, callback){
    let remain = num1 % num2;
    callback(remain);
}
remainder(125,3,myCalculator);

