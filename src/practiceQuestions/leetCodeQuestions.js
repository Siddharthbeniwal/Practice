import React from "react";

export default function LeetCodeQuestions() {
  return (
    <div>
      <h2>Welcome to LeetCodeQuestions practice.</h2>
    </div>
  );
}

// Q.1
// https://leetcode.com/problems/container-with-most-water/description/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
// of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// eg-
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation:
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.


// var maxArea = function(height) {
//     let start = 0;
//     let end = height.length - 1;
//     let maxArea = Number.MIN_SAFE_INTEGER

//     while(start<end) {
//         let currArea = Math.min(height[start], height[end]) * (end-start)
//         maxArea = Math.max(currArea, maxArea)

//         height[start]<height[end] ? start++ : end--;
//     }

//     return maxArea
// }

// const height = [1,8,6,2,5,4,8,3,7]
// console.log(maxArea(height));

// ***********************************************************************************************************************************************************

// Q.2
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest 
// substring without repeating characters.

// eg-
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.



// let str = "xyzabczabxyzabcdefx";

// let start = 0;
// let charIndexMap = {};
// let maxLength = 0;

// for (let i = 0; i < str.length; i++) {
//   let currentChar = str[i];
//   if (charIndexMap[currentChar] >= start) {
//     start = charIndexMap[currentChar] + 1;
//   }
//   charIndexMap[currentChar] = i;
//   maxLength = Math.max(maxLength, i - start + 1);
// }
// console.log("maxLength", maxLength);





