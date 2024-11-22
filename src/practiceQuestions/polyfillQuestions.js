import React from "react";

export default function PollyFill() {
    return (
        <div>
            <h2>Welcome to PllyFillQuestions practice.</h2>
            <p>Polyfill JS provides functionality to the browser to support the methods and events which are not natively supported by them.In simple words, Polyfill JS is some script code that provides the ability to support modern functionality on older versions of the web browser.</p>
        </div>
    )
}

// Tips:
// conventional order for callback-> (value, index, array)
// if(callback(arr[i], i, arr))

// ***********************************************************************************************************************************************************
// Q.1 Implement a polyfill for the 'filter' method.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

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
