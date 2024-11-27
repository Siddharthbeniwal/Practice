import React from "react";

export default function outputBasedQuestions() {
  return (
    <div>
      <h2>Welcome to Output Based questions.</h2>
    </div>
  );
}

// ***********************************************************************************************************************************************************
//Q.1

// const Furniture= {
//   name: 'Table',
//   type: 'Wood',
//   category: 'Routine',
//   price: 20000,
//   getPrice: function() {
//     return this.price;
//   }
// }

// console.log(Furniture.getPrice);
// console.log(Furniture.getPrice());

//o/p-
// ƒ getPrice() {
//   return this.price;
// }
// 20000

// ***********************************************************************************************************************************************************
// Q.2

// function callMe(arg) {
//   return arg && 'I like pizza' || 'I like burger';  //Unexpected mix of '&&' and '||'
// }

// console.log(callMe(true));
// console.log(callMe(false));

// ***********************************************************************************************************************************************************
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

// ***********************************************************************************************************************************************************
// Q.4

// function callMe() {
//   if (true) {
//     var a = 5;
//   }
//   console.log(a);
// }
// callMe();

// In JavaScript, variables declared with var are hoisted to the top of their scope, which means the variable is accessible
// throughout the entire function regardless of where it's declared. Even though a is declared inside the if block, it gets
// hoisted to the top of the call function, and the console.log(a) statement outside the if block can access it.

// ***********************************************************************************************************************************************************
// Q.5

// var var1 = 20;
// var var2 = 30;
// var var3 = "40";

// const result1 = var1+var2+var3;
// const result2 = var3+var2+var1;

// console.log(result1);
// console.log(result2);

// In JavaScript, the + operator is used for both addition and string concatenation. The behavior depends on the types of the operands.
// If at least one operand is a string, concatenation is performed; otherwise, addition is performed.
// Explanation:

// 1. In result1, var1 and var2 are added as numbers, resulting in 50, and then var3 is concatenated as a string,
//    resulting in the final string "5030".

// 2. In result2, var3 is concatenated as a string with var2, resulting in the string "4030", and then var1 is added
// as a number, resulting in the final string "403020".

// Q. what if I want to perform addition operation even if the number is string?

// const result3 = Number(var1)+Number(var2)+Number(var3);
// console.log(result3);

// ***********************************************************************************************************************************************************
// Q.6

// function callMe(arr) {
//   return arr.map(function(x) {
//     return x*2;
//   })
// }

// const value = callMe([1,2,3]);
// console.log(value);

// ***********************************************************************************************************************************************************
// Q.7

// const arr = [2,4,6,8];
// let counter = 0;
// let sum = 0;

// while (counter < arr.length) {
//   sum += arr[counter];
//   counter++;
// }
// console.log(sum);

// ***********************************************************************************************************************************************************
// Q.8

// var a = 6;

// function func1() {
//   var a = 7;
  
//   function func2() {
//     var a = 8;
//     console.log(a);
//   }

//   func2();
//   console.log(a);
// }

// func1();
// console.log(a);

// ***********************************************************************************************************************************************************
// Q.9

// const x = {name: 'abc'};
// const arr = ['name'];
// x[arr] = 'xyz';

// console.log(x.name);

// Explanation:
// 1. Object Property Assignment:

// When you do x[arr] = 'xyz';, the arr variable is an array containing the string 'name'.
// JavaScript converts the array arr to a string when used as an object property key. Converting an array to a string results in the comma-separated string of its elements, which in this case is simply 'name'.

// This means that: x[arr] = 'xyz';
// is equivalent to: x['name'] = 'xyz';


// 2. Resulting Object:

// After x[arr] = 'xyz';, the object x now has a property 'name' with a value 'xyz'.
// However, this overwrites the existing name property, so the object now looks like:
// { name: 'xyz' }

// ***********************************************************************************************************************************************************
// Q.10 


// ***********************************************************************************************************************************************************
// Q.11

// if ("candy" === 8) {
//   console.log('line 1');
// } else if ("blah" === "blah") {
//   console.log('line 2');
// } else {
//   console.log('line 3');
// }
// // o/p- line 2

// ***********************************************************************************************************************************************************
// Q.12

// function call() {
//   var a = 10;
//   if(a > 5) {
//     a = 7;
//   }
//   alert(a);
// }
// call(); // 7

// ***********************************************************************************************************************************************************
// Q.13

// var result = 0;
// for (var i=0; i<5; i++) {
//   result += i;
// }
// console.log('result', result); // 10

// ***********************************************************************************************************************************************************
// Q.14

// function first() {
//   window.a = 3;
// }

// function second() {
//   alert(a);  // 'a' is not defined
// }

// first();
// second();

// ***********************************************************************************************************************************************************
// Q.15

// const x = [];
// x[4] = 1;

// x.map((i) => console.log('inside map'));
// x.forEach((i) => console.log('inside forEach'));

// for (let i = 0; i < x.length; i++) {
//   console.log('inside for');
// }

// Explaination:
// 'map' & 'forEach':
// Behavior: The 'map' & 'forEach' method skips empty slots in the array.
// Since indices 0, 1, 2, and 3 are empty, the callback is only executed for index 4.

// 'for':
// Behavior: A 'for' loop iterates over all indices, including empty slots.
// For indices 0 through 3, the loop still executes, even though those slots are undefined.

