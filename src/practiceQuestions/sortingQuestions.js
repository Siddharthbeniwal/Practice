import React from "react";

export default function SortingQuestions() {
  return (
    <div>
      <h2>Welcome to sorting questions.</h2>
    </div>
  );
}

const arr = [64, 34, 25, 12, 78, 90];
    //index   0   1   2   3   4   5


// **********************************************************************************************************************************************
// Q.1 Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;

    for(let i = 0; i<n-1; i++) {
        for(let j = i+1; j<n-1; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(arr));