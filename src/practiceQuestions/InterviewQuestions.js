import React from "react";

export default function InterviewQuestions() {
  return (
    <div>
      <h2>Welcome to interview practice session.</h2>
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
// Q.10 Convert given string in all uppercase witout using inbuilt fn:
// let str = 'abcABCHeLlO WoRld'

// let newStr = "";

// for (let char of str) {
//   char.charCodeAt() >= 97 && char.charCodeAt() <= 122
//     ? (newStr += String.fromCharCode(char.charCodeAt() - 32))
//     : (newStr += char);
// }