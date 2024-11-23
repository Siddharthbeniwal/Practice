import React from "react";

export default function PollyFill() {
  return (
    <div>
      <h2>Welcome to PllyFillQuestions practice.</h2>
      <p>
        Polyfill JS provides functionality to the browser to support the methods
        and events which are not natively supported by them.In simple words,
        Polyfill JS is some script code that provides the ability to support
        modern functionality on older versions of the web browser.
      </p>
    </div>
  );
}

// Tips:
// conventional order for callback-> (value, index, array)
// if(callback(arr[i], i, arr))

// ***********************************************************************************************************************************************************
// Q.1(A) Implement a customized method for the 'filter'.

// Points to remember for 'filter':
// 1- Always returns a new Array
// 2- Logic of for loop
// 3- Always check for conditon

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// function customizedFilter(arr, callback) {
//     let outputArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             outputArr.push(arr[i]);
//         }
//     }

//     return outputArr;
// }

// const isEven = (num) => num % 2 === 0;
// const isMulitpleOf5 = (num) => num % 5 === 0;

// console.log('customizedFilter to filter even nos', customizedFilter(arr, isEven));
// console.log('customizedFilter to filter mupltiple of 5', customizedFilter(arr, isMulitpleOf5));

// ***********************************************************************************************************************************************************
// Q.1(B) Implement a polyfill for the 'filter' method.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// Array.prototype.myFilter = function(callback) {
//   let outputArr=[];

//   //'this' keyword will refer to the array on which 'myFilter' is applied to
//   for (let i = 0; i < this.length; i++) {
//     if(callback(this[i], i, this)) {
//       outputArr.push(this[i]);
//     }
//   }
//   return outputArr;
// }

// const result = arr.myFilter((num) => num%2===0);
// console.log('result', result);

// ***********************************************************************************************************************************************************
// Q.2(A) Implement a customized method for 'map'.

// Points to remember for 'map':
// 1- Always returns a new Array
// 2- Logic of for loop

// const arr = [1, 2, 3, 4, 5];

// function customizedMap(arr, callback) {
//   if(arr === null || arr.length === 0) {
//     throw new TypeError('cannot use customizedMap for undefined');
//   }

//   if(typeof callback !== 'function') {
//     throw new TypeError(`${callback} is not a function`);
//   }

//   let outputArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     // callback fn to perform some action on each element
//     outputArr.push(callback(arr[i], i, arr));
//   }

//   return outputArr;
// }

// const double = (num) => num * 2;
// const increment = (num) => num + 1;

// console.log("customizedMap to double all elements", customizedMap(arr, double));
// console.log("customizedMap to increment all elements", customizedMap(arr, increment));

// ***********************************************************************************************************************************************************
// Q.2(B) Implement a polyfill for the 'map' method.

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function(callback) {
//   let outputArr = [];

//   for(let i=0; i<this.length; i++) {
//       outputArr.push(callback(this[i], i, this));
//   }
//   return outputArr;
// }

// const result = arr.myMap((num) => num*2);
// console.log('result', result);

// ***********************************************************************************************************************************************************
// Q.3 Implement a polyfill for the 'reduce' method.

// Points to remember for 'reduce':
// 1- Initial value to be provided.
// 2- Reduce the value to a particular element at each step with result from previous steps.
// 3- Logic of for loop.
// 4- Always get a previous value on which next computation to be performed (accumulator).

const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback, initialValue = null) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
    // acc,  curr, index, array
  }

  return acc;
};

const result = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log("result", result);
