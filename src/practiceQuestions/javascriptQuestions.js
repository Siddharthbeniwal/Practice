import React, { useState } from "react";

export default function JavascriptQuestions() {
  return (
    <div>
      <h2>Welcome to JavaScript questions.</h2>
      {/* <MyComponent1/> */}
    </div>
  );
}

// ***********************************************************************************************************************************************************
// Q.1 What are the multiple ways to access a key in a given object?

// const obj = {name: 'sidd', id: 123, marks: 98}

// // The ways to access the name property in the object obj are:

// // 1. obj.name (dot notation)
// // 2. obj['name'] (bracket notation)
// // 3. Destructuring: const { name } = obj;
// // 4. Dynamic methods: Using Object.entries(), Object.keys(), or Reflect.get()

// // 1.
// console.log(obj.name);

// // 2.
// console.log(obj['name']);

// // 3.
// const {name} = obj;
// console.log(name);

// // 4.(A)
// const entries = Object.entries(obj);

// for (let [key, value] of entries) {
//   if(key === 'name') {
//     console.log(value);
//   }
// }

// // 4.(B)
// const keys = Object.keys(obj);

// if(keys.includes('name')) {
//   console.log(obj['name']);
// }

// // 4.(C)
// console.log(Reflect.get(obj, 'name'));

// ***********************************************************************************************************************************************************
// Q.2(A) Create a promise which is in pending state by default & it should get resolved on click of a button.

function MyComponent1() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const myPromise = new Promise((resolve, reject) => {
    if (isButtonClicked) resolve("promise resolved");
  });

  myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  console.log("myPromise", myPromise);

  return <button onClick={() => setIsButtonClicked(true)}>Click Me</button>;
}

// logic for this question in vanilla JS:

// const myPromise = new Promise((resolve, reject) => {
//   document.getElementById('myBtn').addEventListener('click', () => {
//     resolve('promise resolved');
//   })
// });
