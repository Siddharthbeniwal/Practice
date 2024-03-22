import React from "react";

export default function practiceQuestions() {
  return (
    <div>
      <h2>Welcome to practice session.</h2>
    </div>
  );
}

// Q.1
// function sum (a, b) {
//   return a+b;
// }

// console.log("sum is", sum(2,7));

// ________________________________________________________________________________________________
// Q.2

// function printNum() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
// }
// printNum();
// Here, if we use 'var' instead of 'let' then '11' will be printed 10 times as 'var' uses updated value of 'i'

// ________________________________________________________________________________________________
// Q.3 Swap two-two elements in an array

// let arr = [5, 2, 1, 4, 9, 3, 8, 6]
// // expected output = [2, 5, 4, 1, 3, 9, 6, 8]

// for (let i = 0; i < arr.length -1 ; i+=2) {
//     let temp = arr[i]
//     arr[i] = arr[i+1]
//     arr[i+1] = temp
// }

// console.log("Output array", arr);

// ________________________________________________________________________________________________
// Q.4 Find no. of vowels in a given string.

// let str = "hello world this Is a tEst strIng"
// console.log("No. of vowels is ", (str.match(/[aeiou]/gi) || []).length)

// /: The forward slashes mark the beginning and end of the regular expression literal in JavaScript.
// [aeiou]: This is a character set that matches any character within the square brackets. In this case, it matches any lowercase vowel (a, e, i, o, or u).
// /: Marks the end of the regular expression literal.
// g: This flag stands for "global" and indicates that the search should find all matches rather than stopping after the first match.
// i: This flag stands for "case insensitive," allowing the regular expression to match both uppercase and lowercase versions of the vowels.

// When match(/[aeiou]/gi) is used on a string, it searches the entire string for any occurrences of characters that match the pattern
//  defined in the regular expression.

// For example, if you have a string like "Hello, how are you?", applying match(/[aeiou]/gi) to this string would return 
// an array ["e", "o", "o", "a", "e", "o", "u"], as it finds all the lowercase vowels in the string, regardless of case.


// ________________________________________________________________________________________________
// Q.5 Find if a word is present in a given string.

// const searchString = "apple";
// let str = "I like apples."
// const regex = new RegExp(`\\b${searchString}\\b`, "i");
// const isPresent = regex.test(str);
// console.log(isPresent);


// The 'test' method will return true if the word exists in the sentence as a standalone word, and false otherwise.
// \\b: The double backslash \\ represents an escape sequence in JavaScript regular expressions, and \b is a word boundary anchor. 
// This ensures that the pattern matches at a position that is a word boundary, where a word character (\w, typically letters, digits, or underscores)
//  is not followed or preceded by another word character.
// ${searchString}: This is a placeholder for the word you want to search for. The variable searchString contains the word you are interested in
//  finding within the string.
// \\b: Similar to the first \b, this is another word boundary anchor that ensures the end of the word.
// When these components are combined:

// \b at the start ensures that the search for the word starts at a word boundary.
// ${searchString} is where your specified word is placed.
// \b at the end ensures that the search for the word ends at a word boundary.


// ________________________________________________________________________________________________
// Q.6 Filter multiple of 3's in an array.

// let arr = [2, 3, 5, 7, 12, 16, 18]

// let output = arr.filter(element => element%3===0)
// console.log(output);


// ________________________________________________________________________________________________
// Q.7. Reverse a string.

// let string = "JavaScript"
// console.log('reversed sting using builtin fn', string.split('').reverse().join(''));


// //without using built in functions:
// let reverseString = '';

// for (let i = 0; i < string.length; i++) {
//   reverseString = string[i] + reverseString;
// }

// console.log('reversed String without using builtin fn', reverseString);


// ________________________________________________________________________________________________
// Q.8. Reverse words of a string.
// eg- i/p = Hello World
//     o/p = World Hello


// let string = 'Hello World';
// console.log(string.split(' ').reverse().join(' '));


// //without using built in functions:

// function reverseWordsWithoutInbuilt(str) {
//   function reverseSubstring(start, end) { // common function to reverse a string
//     while (start < end) {
//       var temp = strArray[start];
//       strArray[start] = strArray[end];
//       strArray[end] = temp;
//       start++;
//       end--;
//     }
//   }

//   var strArray = str.split(''); // split the whole string into an array ['H','e','l','l','o',' ','W','o','r','l','d']

//   reverseSubstring(0, strArray.length - 1);   // reverse whole string arrray ['d','l','r','o','W',' ','o','l','l','e','H']
//                                               // normal reversing of a string

//   let start = 0;
//   for (let i = 0; i < strArray.length; i++) {  // reversing each word again when a space is found to make the word back to orginal 
//     if (strArray[i] === ' ') {
//       reverseSubstring(start, i - 1);
//       start = i + 1;
//     }
//   }

//   reverseSubstring(start, strArray.length - 1); //for reversing the last word to make the last word back to original since there is no space in the end 

//   var reversedString = strArray.join(''); // to make the array of letters to string

//   return reversedString;
// }

// console.log(reverseWordsWithoutInbuilt(string));


// ________________________________________________________________________________________________
// Q.9. Find palindrome.

// let str = 'Level'

// let strArray = str.split('')

// let start = 0;
// let end = strArray.length-1;

// let isPalindrome = true;

// while (start<end) {
//   if (strArray[start].toLowerCase() !== strArray[end].toLowerCase()) {
//     isPalindrome = false;
//   }
//   start++;
//   end--;
// } 

// console.log(`${str} String is a palindrome`, isPalindrome);

// //Another method:
// let reveredStr= str.split('').reverse().join('');
// if (str.toLowerCase() == reveredStr.toLowerCase()) {
//   console.log('String is palindrome');
// } else {
//   console.log('String is NOT palindrome');
// }


// ________________________________________________________________________________________________
// Q.10. To find factorial

// let n=6;

// function getFactorial(n) {
//   if (n < 0) {
//     return 'Factorial is not defined for negative numbers.';
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return (n * getFactorial(n - 1));
//   }
// }

// console.log(`Factorial of ${n} is `, getFactorial(n));


// ________________________________________________________________________________________________
// Q.11. To find 2nd largest no. (Assume no number is repeating)

// let arr = [2, 11, 78, 45, 18, 92]

// arr.sort((a,b) => a-b);
// console.log('2nd largest no is ', arr[arr.length-2]);

// // without using built in functions (Method 1):
// for (let k = 0; k < arr.length-2 ; k++) {
//   for (let i = 0; i < arr.length-1 ; i++) {
//     if (arr[i]>arr[i+1]) {
//       let temp = arr[i];
//       arr[i] = arr[i+1];
//       arr[i+1] = temp;
//     }
//   }
// }
// console.log('2nd largest no is ', arr[arr.length-2]);

// // without using built in functions (Method 2 Optimized):
// let largestNo = -Infinity;
// let secondLargestNo = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNo) {
//     secondLargestNo = largestNo;
//     largestNo = arr[i];
//   }
//   if (arr[i] < largestNo && arr[i] > secondLargestNo) {
//     secondLargestNo = arr[i];
//   }
// }
// console.log('secondLargestNo', secondLargestNo);


// Note- This logic gets complex if we need to find 10th largest no,
// So in that case we can sort the array in descending order (like quick sort, bubble sort etc)
// and then find 10th largest no by arr[9]
// _____________________________________________________________________
// Understanding sort fn.

// let colours = ['red', 'blue', 'green', 'black', 'orange']
// colours.sort();
// console.log(colours); // ['black', 'blue', 'green', 'orange', 'red']


// ________________________________________________________________________________________________
// Q.12. Find frequency of each alphabet in a given string.
// eg- str = 'hi hello'
// o/p-> h-2, i=1, e-1, l-2, o-1

// let str = 'abbccc dee fff zzzz'
// let alphabets = {
//   'a' : 0,
//   'b' : 0,
//   'c' : 0,
//   'd' : 0,
//   'e' : 0,
//   'f' : 0,
//   'g' : 0,
//   'h' : 0,
//   'i' : 0,
//   'j' : 0,
//   'k' : 0,
//   'l' : 0,
//   'm' : 0,
//   'n' : 0,
//   'o' : 0,
//   'p' : 0,
//   'q' : 0,
//   'r' : 0,
//   's' : 0,
//   't' : 0,
//   'u' : 0,
//   'v' : 0,
//   'w' : 0,
//   'x' : 0,
//   'y' : 0,
//   'z' : 0,
// }

// console.log('str: ', str);
// str = str.split('');

// for (const key in alphabets) {
//   // console.log(`${key}: ${alphabets[key]}`);
//   str.map((ch) => {
//     if (ch === key) {
//       alphabets[key] += 1
//     }
//   })
// }

// console.log('alphabets frequency: ', alphabets);



// ________________________________________________________________________________________________
// Q.13. Remove all vowels in a given string.

// let str = "Learning javaScript"

// let newStr = str.split('');
// let output = newStr.filter((item) => {
//   if(!item.match(/[aeiou]/gi)) {
//     return true;
//   }
//   return false;
// })

// console.log('string', str);
// console.log('output', output.join(''));


// OR

// let output = str.replace(/[aeiou]/gi, '')


// NOTE:
// let output = str.replace(/[aeiou]/gi, '$') --> this will replace the characters 'a', 'e', 'i', 'o', 'u' from the string with '$'. 
// let output = str.replace(/aeiou/gi, '$') --> this will replace the substring 'aeiou' from the string with '$'. 



// ________________________________________________________________________________________________
// Q.14. Find sum of all students' marks.


// let student =[
//   {name:"Smith",rollNumber:31,marks:80},
//   {name:"Jenny",rollNumber:15,marks:69},
//   {name:"John",rollNumber:16,marks:35},
//   {name:"Tiger",rollNumber:7,marks:55}
//  ];
 
//  const sum = student.marks.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);


// ________________________________________________________________________________________________
// Q.15. Get full name of all.


// let users = [
//   {firstName: 'Smith', lastName: 'Smith', rollNumber: 31, marks: 80},
//   {firstName: 'Jenny', lastName: 'Bey', rollNumber: 15, marks: 69},
//   {firstName: 'John', lastName: 'Wick', rollNumber: 16, marks: 35},
//   {firstName: 'Tiger', lastName: 'doe', rollNumber: 7, marks: 55},
// ]

// let fullName = users.reduce((acc, curr) => {
//   console.log(curr.firstName)
//   acc.push(curr.firstName + ' ' + curr.lastName)
//   return acc
// }, [])

// console.log(fullName)



