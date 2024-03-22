import React from "react";

export default function assessmentQuestions() {
  return (
    <div>
      <h2>Welcome to assessment questions.</h2>
      
    </div>
  );
}

//Q.1

// var Furniture= {
//   name: 'Table',
//   type: 'Wood',
//   category: 'Routine',
//   price: 20000,
//   getPrice: function() {
//     return this.price;
//   }
// }

// function checkPrice() {
//   alert('Price is: '+ Furniture.getPrice);
// }
// checkPrice();

//o/p-
// Price is: getPrice: function() {
//   return this.price;
// }


// ________________________________________________________________________________________________
// Q.2

// function callMe(arg) {
//   return arg && 'I like pizza' || 'I like burger';  //Unexpected mix of '&&' and '||'
// }
// callMe(true);


// ________________________________________________________________________________________________
// Q.3

// var a = 5;
// function first() {
//   a = 6;
// }
// function second() {
//   console.log(a);
// }
// first();
// second(); // 6



// ________________________________________________________________________________________________
// Q.4
// *********************


// function call() {
//   if (true) {
//     var a = 5;
//   }
//   alert(a);
// }
// call(); // 5

// In JavaScript, variables declared with var are hoisted to the top of their scope, which means the variable is accessible
// throughout the entire function regardless of where it's declared. Even though a is declared inside the if block, it gets
// hoisted to the top of the call function, and the alert(a) statement outside the if block can access it. 

// ________________________________________________________________________________________________
// Q.5
// **********

// var var1 = 20; 
// var var2 = 30; 
// var var3 = "40";

// var result1 = var1+var2+var3;
// var result2 = var3+var2+var1;

// console.log('result1', result1); //5040
// console.log('result2', result2); //403020

// In JavaScript, the + operator is used for both addition and string concatenation. The behavior depends on the types of the operands.
// If at least one operand is a string, concatenation is performed; otherwise, addition is performed.
// Explanation:

// 1. In result1, var1 and var2 are added as numbers, resulting in 50, and then var3 is concatenated as a string,
//    resulting in the final string "5030".

// 2. In result2, var3 is concatenated as a string with var2, resulting in the string "4030", and then var1 is added
// as a number, resulting in the final string "403020".



// ________________________________________________________________________________________________
// Q.6

// function call(arr) {
//   return arr.map(function(x) {
//     return x*2;
//   })
// }

// var value = call([1,2,3]);
// console.log(value); // 2,4,6


// ________________________________________________________________________________________________
// Q.7

// var numbers = [2,4,6,8];
// var counter = 0;
// var sum = 0;

// while (counter < numbers.length) {
//   sum += numbers[counter];
//   counter++;
// }
// console.log('sum', sum); // 20

// ________________________________________________________________________________________________
// Q.8

// var a = 6;
// function test() {
//   var a = 7;
//   function again() {
//     var a = 8;
//     alert(a);
//   }
//   again();
//   alert(a);
// }
// test();
// alert(a); // 8 7 6


// ________________________________________________________________________________________________
// Q.9

// var a = 5;
// function call() {
//   var a = 7;
//   console.log(a);
// }
// call(); // 7

// ________________________________________________________________________________________________
// Q.10-skip

// ________________________________________________________________________________________________
// Q.11

// if ("candy" === 8) {
//   console.log('line 1');
// } else if ("blah" === "blah") {
//   console.log('line 2');
// } else {
//   console.log('line 3');
// }
// // o/p- line 2

// ________________________________________________________________________________________________
// Q.12

// function call() {
//   var a = 10;
//   if(a > 5) {
//     a = 7;
//   }
//   alert(a);
// }
// call(); // 7

// ________________________________________________________________________________________________
// Q.13

// var result = 0;
// for (var i=0; i<5; i++) {
//   result += i;
// }
// console.log('result', result); // 10

// ________________________________________________________________________________________________
// Q.14

// function first() {
//   window.a = 3;  
// }

// function second() {
//   alert(a);  // 'a' is not defined
// }

// first();
// second();