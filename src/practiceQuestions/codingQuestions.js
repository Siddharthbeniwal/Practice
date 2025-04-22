import React from "react";

export default function CodingQuestions() {
  return (
    <div>
      <h2>Welcome to Coding questions.</h2>
    </div>
  );
}
// **********************************************************************************************************************************************
// Q.1 write code for removing duplicate elements and count each element in given array

// let arr = [1,2,3,4,1,6,7,3,3,5,5,5,5,5,5,5,5,5,5,3,3,3]

// let count = {}

// let output = arr.reduce((acc, curr) => {
//     if(!acc.includes(curr)) {
//         acc.push(curr)
//     }
//     count[curr] = (count[curr] || 0) + 1

//     return acc
// }, [])

// console.log('output', output);
// console.log('count', count);

// -----------------------------------
//for only removing duplicate:
// function removeDuplicate(arr) {
//   return [...new Set(arr)]  
// }


// **********************************************************************************************************************************************
// Q.2 Find count of each character in a given string.

// const str = "hello world";
// let count = {};

// for (let char of str) {
//   count[char] = (count[char] || 0) + 1;
// }

// console.log(count);

// **********************************************************************************************************************************************
// Q.3 Find no. of characters in a given string.

// let str = 'hello world'
// console.log([...str].length);

// **********************************************************************************************************************************************
// Q.4 Find output:

// a=10;
// console.log(a); //10
// var a;

// **********************************************************************************************************************************************
// Q.5 Find the missing no.and insert it in the array.
// let arr = [1,2,3,5,6,7];

// let missingIndex = arr.findIndex((item, i) => item !== i + 1);

// arr.splice(missingIndex, 0, missingIndex + 1);
// console.log(arr);

// Difference Between splice() and slice() in JavaScript:

// 1. splice():

// Does not return a new array but instead modifies the original array.
// It returns the removed elements (if any).
// It is used to add, remove, or replace elements in the array.

// syntax for splice:
// array.splice(start, deleteCount, item1, item2, ...);

// Key Points:
// splice() modifies the original array in place.
// It returns a new array containing the removed elements.
// If no elements are removed (e.g., deleteCount is 0), it returns an empty array.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. slice():

// Returns a new array containing the selected elements.
// It does not modify the original array.
// It is used to extract a portion of an array.

// syntax for slice:
// arr.slice(startIndex, endIndex)

// startIndex: The starting position (inclusive).
// endIndex: The index at which to end extraction (exclusive). If not specified, it extracts until the end of the array.
// If negative, it counts from the end of the array.The index at which to end extraction (exclusive). If not specified,
// it extracts until the end of the array. If negative, it counts from the end of the array.

// Key Points:
// Does not modify the original array: Unlike splice(), slice() does not alter the original array but instead returns a new array.
// Creates a shallow copy: If we use slice() on an array containing objects, the copied array will still reference the same objects.
// It does not perform a deep copy.
// Negative indices: We can use negative numbers to start or end the slice counting from the end of the array.

// Example: arr.slice(-2) will return the last two elements of the array.

// **********************************************************************************************************************************************
// Q.6 Delete '5' from the array.
// let arr = [1,2,3,5,6,7]

// arr.splice(3, 1)
// console.log('arr', arr)

// **********************************************************************************************************************************************
// Q.7 Replace '5' with '4' from the array.
// let arr = [1,3,5,6,8]

// arr.splice(2,1,4)
// console.log('arr', arr)

// **********************************************************************************************************************************************
// Q.9 Remove '5,6,8' and insert '7,11' in its place the array.

// let arr = [1,3,5,6,8,10,15]

// arr.splice(2,3,7,11)
// console.log('arr', arr)

// **********************************************************************************************************************************************
// Q.10 Convert given string in all uppercase without using inbuilt fn:
// let str = 'abcABCHeLlO WoRld'

// let newStr = "";

// for (let char of str) {
//   char.charCodeAt() >= 97 && char.charCodeAt() <= 122
//     ? (newStr += String.fromCharCode(char.charCodeAt() - 32))
//     : (newStr += char);
// }

// **********************************************************************************************************************************************
// Q.11(A) In the given array, find the pattern and print the next 'n' numbers in that pattern.

// eg 1- arr = [2,4,6,8,10]
//       n = 2
// Expected output = [12,14]

// eg 2- arr = [3,6,9,12,15]
//       n = 3
// Expected output = [18,21,24]

// const arr = [2,4,6,8,10];
// let   n = 4;

// function getNextNumbers (n) {
//   const diff = arr[1] - arr[0];
//   const lastNum = arr[arr.length - 1];

//   return Array.from({length:n}, (curr, i) => lastNum + diff * (i+1))
// }

// console.log('next n numbers are-', getNextNumbers(n));

// Explaination:
// The Array.from method is used to create a new array of a specified length and populate it with values. Its signature is:
// Array.from({ length: n }, (callbackFn));
// -The first parameter is an object with a length property, which defines how many elements the new array will have.
// -The second parameter is a callback function that determines the value of each element. This function is called with two arguments for each index:

// **********************************************************************************************************************************************
// Q.11(B) In the given array, find the pattern and print the next 'n' numbers in that pattern.

// eg 1- arr = [2,4,8,16,32]
//       n = 2
// Expected output = [64,128]

// eg 2- arr = [3,9,27,81]
//       n = 2
// Expected output = [243,729]

// const arr = [2,4,8,16,32];
// let n = 3;

// const getNextNumbers = (arr, n) => {
//   const ratio = arr[1] / arr[0];
//   const lastNum = arr[arr.length -1];

//   return Array.from({length: n}, (_, i) => lastNum * ratio ** (i+1));

//   // for understanding:
//   // 32 * 2^1= 32 * 2= 64
//   // 32 * 2^2= 32 * 4= 128
//   // 32 * 2^3= 32 * 8= 256
// }

// console.log(getNextNumbers(arr, n));

// **********************************************************************************************************************************************
// Q.12
// (A) Return only the name of students in Capitals.
// (B) Return the details of those students only who scored more than 60.
// (A) Return only the name of students who scored less than 40.

// const students = [
//   { name: "Jenny", rollNo: 101, marks: 80 },
//   { name: "Alex", rollNo: 102, marks: 45 },
//   { name: "David", rollNo: 103, marks: 62 },
//   { name: "Sam", rollNo: 104, marks: 36 },
// ];

// const resultA = students.map((stu) => stu.name.toUpperCase());
// console.log("resultA", resultA);

// const resultB = students.filter((stu) => stu.marks > 60);
// console.log("resultB", resultB);

// const resultC = students.filter((stu) => stu.marks < 40).map((stu) => stu.name);
// console.log("resultC", resultC);

// **********************************************************************************************************************************************
// Q.13 Modify 'x' so that it satisfy the if condition (without modifying the condition)

// let x;

// if(x==1 && x==2 && x==3) {
//   console.log('condition satisfied');
// }

// In JavaScript whenever we use loose equal to operator between a primitive data type & non-primitive data type(array, object etc.),
// JavaScript will use .toString() method and try to convert non-primitive data type into primitive data type.

// To satisfy the if condition, 'x' value should be 1 initially, and in the 2nd & 3rd comparisons it should increment to 2 & 3 respectively.
// So Basically, value of 'x' should increment on every comparison
// To achieve this we can implement a custom toString() method which overwrites the in-built implementation of toString() which JS uses.

// let x = {
//   flag: 1,
//   toString: function() {
//     return this.flag++
//   }
// }

// if(x==1 && x==2 && x==3) {
//   console.log('condition satisfied');
// }

// **********************************************************************************************************************************************
// Q.14 Make the 'id property freezed so that it cannot be changed.

// const user = {
//   id: 123,
//   name: 'John',
//   age: 28,
//   address: {
//     city: 'Mumbai',
//     state: 'Maharashtra'
//   },
// }

// Object.defineProperties(user, {
//   id:{writable: false}
// });

// user.id = 98;
// This will fail silently in non-strict mode or throw an error in strict mode

// console.log(user);

// **********************************************************************************************************************************************
// Q.15 Find the highest odd number:

// eg1- n = 5688248, o/p= 5
// eg2- n = 61632826, o/p= 6163
// eg3- n = 61632821, o/p= 61632821

// let num = 61632826;

// function findHighestOddNo(num) {
//   let numStr = num.toString();

//   for (let i = numStr.length - 1; i >= 0; i--) {
//     let subStr = numStr.slice(0, i + 1);

//     if (parseInt(subStr) % 2 !== 0) {
//       return parseInt(subStr);
//     }

//     return -1;
//   }
// }

// console.log(findHighestOddNo(num));

// syntax for slice:
// str.slice(startIndex, endIndex)

// startIndex: The starting position (inclusive).
// endIndex: The ending position (exclusive). If omitted, it slices until the end of the string.

// **********************************************************************************************************************************************
// Q.16(A) Flatten the array:
// expected o/p: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12],
// ];

// // using inbuilt flat method:
// console.log(arr.flat());

// // without using inbuilt flat method:
// let outputArr = [].concat(...arr);
// console.log(outputArr);

// **********************************************************************************************************************************************
// Q.16(B) Write a customized fn to flatten a given array upto 'n' depth:
// expected o/p: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, [6, [7, 8]], 9],
//   [10, 11, 12],
// ];

// function customizedFlat(arr, depth = 1) {
//   let outputArr = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element) && depth > 0) {
//       outputArr.push(...customizedFlat(element, depth - 1));
//     } else {
//       outputArr.push(element);
//     }
//   });

//   return outputArr;
// }

// console.log(customizedFlat(arr, 3));

// **********************************************************************************************************************************************
// Q.17 Implement a  'Method Chaining' function which will return the sum as per the below eg-

// i/p- computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())
// expected o/p- 143545000

// function computeAmount() {
//   let totalValue = 0;

//   return {
//     lacs: function (n) {
//       totalValue += n * 100000;
//       return this; // Returns the current object (enabling method chaining)
//     },
//     crore: function (n) {
//       totalValue += n * 10000000;
//       return this;
//     },
//     thousand: function (n) {
//       totalValue += n * 1000;
//       return this;
//     },
//     value: function () {
//       return totalValue;
//     },
//   };
// }

// console.log(
//   computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

// **********************************************************************************************************************************************
// Q.18

// const obj = {
//   s: 5,
//   z:7,
//   a:1,
//   i: 2,
// };

// (A) Sort the given object in alphabetical order of keys:

// const sortedByKeys = Object.keys(obj).sort().reduce((acc, key) => {
//   acc[key] = obj[key];
//   return acc;
// }, {});

// console.log(sortedByKeys);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B) Sort the given object in ascending order of values:

// const sortedByValues = Object.entries(obj).sort().reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});

// console.log(sortedByValues);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (C) Sort by their marks in ascending order:

// const students = [
//   { name: "Jenny", rollNo: 101, marks: 80 },
//   { name: "Alex", rollNo: 102, marks: 45 },
//   { name: "David", rollNo: 103, marks: 62 },
//   { name: "Sam", rollNo: 104, marks: 36 }
// ];

// const sortedStudents = students.sort((a, b) => a.marks - b.marks);

// **********************************************************************************************************************************************
// Q.19 Concatenat two strings without using + operator;

// const str1 = 'Java';
// const str2 = 'Script';
// console.log(`${str1}${str2}`);
// console.log(str1.concat(str2));

// **********************************************************************************************************************************************
// Q.20 WAP to find if a file is present in a given folder.

// const root = ["file1", "file2", ["file44", ["file20", "file21", "file22"]]];
// let fileName = "file22";

// (A) Using inbuilt fn

// function findFile(root, fileName) {
//   let isPresent = false;
//   let flatRoot = root.flat(Infinity);

//   if (flatRoot.includes(fileName)) isPresent = true;

//   return isPresent;
// }

// console.log(findFile(root, fileName));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B) Without using inbuilt fn

// const root = ["file1", "file2", ["file44", ["file20", "file21", "file22"]]];
// let fileName = "file22";

// function flattenArr(arr) {
//   let stack = [...arr]; // Create a copy of the input array to act as the stack
//   let flattendArr = [];

//   while (stack.length > 0) {
//     let lastItem = stack.pop(); // Take the last element from the stack

//     if (Array.isArray(lastItem)) {
//       stack.push(...lastItem); // If the item is an array, push its elements back onto the stack
//     } else {
//       flattendArr.push(lastItem);
//     }
//   }

//   return flattendArr;
// }

// function findFile(root, fileName) {

//   let flatRoot = flattenArr(root);
//   const flatRootSet = new Set(flatRoot);

//   return flatRootSet.has(fileName);
// };

// console.log(findFile(root, fileName));


// **********************************************************************************************************************************************
// Q.21 Find the pair whose sum is equal to the target.

// const arr = [5, 3, 7, 11];
// const target = 14;
// // expected o/p- [3, 11]

// function findPair(arr, target) {

//   const seenValues = new Set();

//   for (let value of arr) {
//     let complement = target - value;

//     if (seenValues.has(complement)) {
//       return [complement, value];
//     }
//     seenValues.add(value);
//   }
//   return 'No such pair found';
// };

// console.log(findPair(arr, target));


// **********************************************************************************************************************************************
// Q.22 Given two arrays. Find distint elemments.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3];
// // expected Output: [4, 5]

// function findDistinctElements(arr1, arr2) {
//   const uniqueInArr1 = arr1.filter(item => !arr2.includes(item));
//   const uniqueInArr2 = arr2.filter(item => !arr1.includes(item));

//   return [...uniqueInArr1, ...uniqueInArr2];
// }

// console.log(findDistinctElements(arr1, arr2));


// **********************************************************************************************************************************************
// Q.23 WAP to generate the Fibonacci series.

// function getFibonacci(n) {
//   let fibonacciArr = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
//   }

//   return fibonacciArr.slice(0, n);
// }

// console.log(getFibonacci(10).toString());

// **********************************************************************************************************************************************
// Q.24 Get array of those elements whose frequency is only one in the given array.

// const arr = [1,1,2,3,2,3,5,6,6,6,7];
// // Expected output = [5,7]

// const count = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;    
//     return acc;
// }, {});

// const outputArr = arr.filter((num) => count[num] === 1);

// console.log(outputArr);


// **********************************************************************************************************************************************
// Q.25 Remove duplicate characters in the given string.

function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

// let inputString = "hello world";
// console.log(removeDuplicates(inputString));


// **********************************************************************************************************************************************
// Q.26 count the number of pairs in the array where the sum of the pair exists as an element in the array.

// let arr = [1, 5, 3, 2];

// function getPairCount(arr) {
//     let count = 0;
//     let seen = new Set(arr);

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let sumOfPair = arr[i] + arr[j];
//             if (seen.has(sumOfPair)) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// console.log(getPairCount(arr));


// **********************************************************************************************************************************************
// Q.27

// const arr = [
//   {
//     name: 'xyz',
//     id: 1
//   },
//   {
//     name: 'abc',
//     id: 2
//   },
//   {
//     name: 'xyz',
//     id: 1
//   },
//   {
//     name: 'xyz',
//     id: 2
//   },
// ];

//  (A) Remove duplicate objects in the given array of objects.

// transform each object in the original array into a key-value pair

// const objArr = arr.map(obj => [JSON.stringify(obj), obj]);

// const uniqueObj = [...new Map(objArr).values()];
// console.log(uniqueObj);

// **********************************************************************************************************************************************

//  (B) Add one more object in the given array of objects.

// arr.push({name: 'abc', id: 5});
// console.log(arr);

// **********************************************************************************************************************************************
// Q.28 Given an integer array nums, find the subarray with the largest sum, and return its sum.

// const nums = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubarray(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];
    
    for(let i=1; i<arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    
    return maxSum;
}

// console.log(maxSubarray(nums));