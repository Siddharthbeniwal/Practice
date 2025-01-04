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
// Q.2 Create a promise which is in pending state by default & it should get resolved on click of a button.

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

// ***********************************************************************************************************************************************************
// Q.3 Explain call, apply and bind.

// (A) call:
// The call method is a built-in function available for all JavaScript functions. It allows us to invoke a function
// with an explicit this value and pass arguments individually.

// Syntax:
// functionName.call(thisArg, arg1, arg2, ...)

// const obj1 = {
//   name: "John",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// const obj2 = { name: "Jane" };

// obj1.sayHello.call(obj2); // Output: "Hello, Jane"

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B) apply:
// The apply method is very similar to the call method in JavaScript, but it allows us to pass arguments as an array (or array-like object)
// instead of listing them individually. It is used to invoke a function with a specified this context.

// Syntax:
// functionName.apply(thisArg, [arg1, arg2, ...])

// const obj1 = {
//   name: "John",
//   sayHello: function (greeting, punctuation) {
//     console.log(`${greeting}, ${this.name} ${punctuation}`);
//   },
// };

// const obj2 = { name: "Jane" };

// obj1.sayHello.apply(obj2, ["Hi", "Whats up?"]); // Output: "Hi, Jane Whats up?"


// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (C) bind:
// The bind method does not execute the function immediately. Instead, it returns a new function where the this context is permanently bound to the
// object we pass as the first argument to bind.
// We can then invoke the new function whenever we want, and it will always use the context we initially set.


// Syntax:
// const newFunction = originalFunction.bind(thisArg[, arg1[, arg2[, ...]]]);

// const person = { name: 'John'};

// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}`);
// }

// const greetJohn = greet.bind(person);  // bind 'this' to 'person', returns new fn but doesn't invoke immediately

// greetJohn('Hello'); // we can this whenever we want an it will always have 'this' context as 'person' bcoz we initially set that.


// ***********************************************************************************************************************************************************
// Q.4 Infinite currying

// (A)
// sum(1)(2)...(n)()

// function infiniteCurrySum(a) {
// return function(b) {
//   if(b !== undefined) {
//     return infiniteCurrySum(a+b);
//   }
//   return a;
// }
// }

// console.log(infiniteCurrySum(1)(5)(8)(10)());

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B)
// multiply(1)(2)...(n)()

// function infiniteCurryMultiply(a) {
//   return function(b) {
//     if(b !== undefined) {
//       return infiniteCurryMultiply(a*b);
//     }
//     return a;
//   }
// }

// console.log(infiniteCurryMultiply(2)(5)(3)(4)());