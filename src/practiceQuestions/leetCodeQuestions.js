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


// ***********************************************************************************************************************************************************

// Q.3
// https://leetcode.com/problems/3sum/description/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and 
// nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// const nums = [-1, 0, 1, 2, -1, -4];

// function threeSum(nums) {
//   nums.sort((a, b) => a - b);
//   let resultArr = [];

//   for (let i = 0; i < nums.length - 2; i++) {

//     let start = i + 1;
//     let end = nums.length - 1;

//     function checkDuplicate(currArr) {
//       for (const triplet of resultArr) {
//         if (triplet.every((value, i) => value === currArr[i])) return true;
//       }
//       return false;
//     }

//     while (start < end) {
//       let currSum = nums[i] + nums[start] + nums[end];
//       let currArr = [nums[i], nums[start], nums[end]];

//       if (currSum === 0) {
//         let isDuplicate = checkDuplicate(currArr);
//         if (!isDuplicate) {
//           resultArr.push(currArr);
//         }
//         start++;
//       } else if (currSum < 0) {
//         start++;
//       } else {
//         end--;
//       }
//     }
//   }
//   return resultArr;
// }

// console.log(threeSum(nums));

