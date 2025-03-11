import React from "react";

export default function SortingQuestions() {
    return (
        <div>
            <h2>Welcome to sorting questions.</h2>
        </div>
    );
}

const arr = [64, 25, 12, 22, 11];
//index   0   1   2   3   4


// **********************************************************************************************************************************************
// Q.1 Bubble Sort
// => Sorting algorithm where the largest values bubbles up at the top.

// Steps:
// 1: Compare the first element with the second element. If the first is greater, swap them.
// 2: Move to the next pair of adjacent elements (second and third). If the second is greater, swap them.
// 3: Continue comparing and swapping adjacent elements across the entire array until the end.
// 4: After each pass, the largest unsorted element is moved to the correct position at the end of the array.
// 5: Repeat the process for the remaining unsorted elements, each time ignoring the already sorted elements at the end.
// 6: Continue until no more swaps are needed, which means the array is sorted.

function bubbleSort(arr) {
    let swapped;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped in the inner loop, the array is sorted
        if (!swapped) {
            break;  // Break early if the array is already sorted
        }
    }
    return arr;
}

// console.log(bubbleSort(arr));

// Case	Time      Complexity	Space Complexity
// Best Case   	   O(n)	          O(1)
// Worst Case	   O(n²)	      O(1)
// Average Case    O(n²)	      O(1)


// **********************************************************************************************************************************************
// Q.2 Selection Sort
// => Sorting algorithm that repeatedly selects the smallest(or largest) element from the unsorted part of the list
// and swaps it with the first unsorted element, effectively sorting the entire array step by step.

// Steps:
// 1: Find the smallest element in the entire array and swap it with the first element.
// 2: Find the smallest element in the remaining unsorted portion and swap it with the second element.
// 3: Repeat this process until the array is sorted.

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;                   // Assume the current element is the minimum

        for (let j = i + 1; j < arr.length; j++) {    // Find the index of the smallest element in the remaining array
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// console.log(selectionSort(arr));

// Case	Time      Complexity	Space Complexity
// Best Case   	   O(n²)	      O(1)
// Worst Case	   O(n²)	      O(1)
// Average Case    O(n²)	      O(1)

// **********************************************************************************************************************************************
// Q.3 Insertion Sort

// Steps:
// 1: Start with the second element (index 1) because the first element is already considered sorted.
// 2: Compare the current element with the element before it. If the current element is smaller, move the larger element one position to the right.
// 3: Continue shifting elements to the right until the correct position for the current element is found.
// 4: Insert the current element into its correct position in the sorted portion of the array.
// 5: Move to the next element and repeat the process until the entire array is sorted.

