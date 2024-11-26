import React from "react";

export default function CodingQuestions() {
  return (
    <div>
      <h2>Welcome to Coding questions.</h2>
    </div>
  );
}
// ***********************************************************************************************************************************************************
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

// ***********************************************************************************************************************************************************
// Q.2 Find count of each character in a given string.

// let str = 'hello world'
// let arr = str.split('')

// let count = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc
// }, {})

// console.log('count', count)

// ***********************************************************************************************************************************************************
// Q.3 Find no. of characters in a given string.

// let str = 'hello world'
// console.log('[...str].length', [...str].length)

// ***********************************************************************************************************************************************************
// Q.4 Find output:

// a=10;
// console.log(a); //10
// var a;

// ***********************************************************************************************************************************************************
// Q.5 Find the missing no.and insert it in the array.
// let arr = [1,2,3,5,6,7]

// let missingIndex = arr.findIndex((item, i) => item !== i + 1);

// arr.splice(missingIndex, 0, missingIndex + 1);
// console.log(arr);

// ***********************************************************************************************************************************************************
// Q.6 Delete '5' from the array.
// let arr = [1,2,3,5,6,7]

// arr.splice(3, 1)
// console.log('arr', arr)

// ***********************************************************************************************************************************************************
// Q.7 Replace '5' with '4' from the array.
// let arr = [1,3,5,6,8]

// arr.splice(2,1,4)
// console.log('arr', arr)

// ***********************************************************************************************************************************************************
// Q.9 Remove '5,6,8' and insert '7,11' in its place the array.

// let arr = [1,3,5,6,8,10,15]

// arr.splice(2,3,7,11)
// console.log('arr', arr)

// ***********************************************************************************************************************************************************
// Q.10 Convert given string in all uppercase without using inbuilt fn:
// let str = 'abcABCHeLlO WoRld'

// let newStr = "";

// for (let char of str) {
//   char.charCodeAt() >= 97 && char.charCodeAt() <= 122
//     ? (newStr += String.fromCharCode(char.charCodeAt() - 32))
//     : (newStr += char);
// }

// ***********************************************************************************************************************************************************
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

// ***********************************************************************************************************************************************************
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

// ***********************************************************************************************************************************************************
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
