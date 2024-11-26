import React from "react";

// import { render } from "@testing-library/react";
// import React, { useState } from "react";
// import { useParams } from "react-router";

export default function CertificationQuestions() {
  return (
    <div>
      <h2>Welcome to certification questions.</h2>
    </div>
  );
}


//Q1.
// async function getData() {
//   await Promise.reject("Error Occurred");
//   return "Data";
// }
// getData()
// .then(console.log) // Error Occurred
// .catch(console.log)


//Q2.
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: '26'});

// // print- {name: 'Jack', age: '26'}
// console.log(map1.get('info'));


//Q3. Find length of keys in obj1
// let obj1 = {1: "USA", 2: "London", 3: "New York", 4: "New York"}
// console.log('obj1 length is ', Object.keys(obj1).length);


//Q4. Find o/p
// const keys = ["name", "age"];
// const values = ["Lydia", 22];

// let result = Object.fromEntries(keys.map((_, i) => {
//   return [keys[i], values[i]]
// }))

// console.log('result', result); //{name: 'Lydia', age: 22}

// map((_, i) => ...) is a way of saying "I'm only interested in the index, and I don't need the actual element for this operation."
// The underscore (_) is a common convention in JavaScript to indicate that a parameter is intentionally unused. In this case, it is
// often used when the index value is needed, but the actual element is not used in the callback function.

// Object.fromEntries creates a new object from an array of key-value pairs. eg- 
// const entries = [
//   ['name', 'John'],
//   ['age', 30],
//   ['city', 'New York']
// ];

// const myObject = Object.fromEntries(entries);

// console.log(myObject);
// // Output: { name: 'John', age: 30, city: 'New York' }



//Q5. Find o/p

// function printArray(a) {
//   var len = a.length, i = 0;
//   if (len == 0) {
//     console.log("No array");
//   } else {
//     do {
//       console.log(a[i]);
//     } while (++i < len)
//   }
// }
// let arr = ['1', '5', '7', '16']
// printArray(arr); // 1  5  7  16

//Q6. Find o/p

// let arr = [];
// arr[50] = '7';
// arr[60] = undefined;
// console.log('arr', arr); // [empty × 50, '7', empty × 9, undefined]
// console.log('arr.length', arr.length); // 61


//Q7. Find o/p

// const date = new Date("2022-12-28");
// console.log(date.getDate()); // 28
// // The getDate() method returns the day of the month as an integer between 1 and 31

// console.log(date.getMonth() + 1); // 12
// // date.getMonth() returns the month, but it's zero-based (0 for January, 1 for February, and so on).
// // To make it match the usual month numbering (1-12), I added 1 to the result.

// console.log(date.getFullYear()); // 2022


//Q8. Find o/p
/* <>
  <p id="demo"></p>
  <script>
    const mobile = {
      Name: "Samsung",
      Price: 48000,
      Id:2,
      Statement: function display() {
        return "Price of" + this.Name + "is" + this.Price;
      } 
    }
    document.getElementById("demo").innerHTML=mobile.Statement;
  </script>
</> */

// o/p- 
// function display() {
//   return "Price of" + this.Name + "is" + this.Price;
// }

// If you attempt to print the function directly by using console.log(mobile.Statement),
// it will not execute the function; instead, it will print the function definition. To execute the function and print its result,
// you need to include the parentheses () to invoke the function.

// It will assign the function definition to the innerHTML property of the HTML element with the id "demo." It will not execute the
// function, and you will see the actual function definition when inspecting the HTML element.


// console.log(mobile.Statement);
// Output:
// function display() {
//   return "Price of" + this.Name + "is" + this.Price;
// }

// console.log(mobile.Statement());
// Output:
// Price of Samsung is 48000



//Q9. Find o/p
// const date = new Date("2024-01-22");
// console.log(date); // Mon Jan 22 2024 05:30:00 GMT+0530 (India Standard Time)


//Q10. Find o/p
// const date = new Date();
// // console.log(date); // prints todays date
// date.setDate(1);
// date.setFullYear(2025);
// date.setMonth(1);
// console.log(date); //Sat Feb 01 2025 13:51:24 GMT+0530 (India Standard Time)


//Q11. Find o/p
// let msg = "hello world";
// console.log(msg.slice(3,9)); // lo wor
// The slice(3, 9) method extracts the substring starting from index 3 (inclusive) and
// ending at index 9 (exclusive), so it includes characters from index 3 to 8 in the original string.

//Q11.
// var arr = [3,2,,,5,7];
// console.log(arr); // [3, 2, empty × 2, 5, 7]

// for (let i = 0; i < 5; i++) {
//   console.log(arr[i])
// }
// 3  2  undefined  undefined 5

//Q12.

// function welcome() {
//   console.log("Welcome");
// }
// function goodbye() {
//   console.log("See you later");
// }
// function greet(choice) {
//   choice();
// }
// greet(welcome); // Welcome
// greet(goodbye); // See you later

//Q13.

// (function() {
//   setTimeout(() => console.log(3),3000);
//   console.log(4)
//   setTimeout(() => console.log(1),1000);
//   console.log(2)
// })();
// o/p- 4  2  1  3

//Q14.

// let x=60
// let y=10
// function classFunc() {
//   let name = "John";
//   function studentFunc() {
//     console.log(`${name} is ${x-y} years old`);
//   }
//   return studentFunc();
// }
// classFunc(); // John is 50 years old

//Q15.
// function height() {
//   var height = 123.56;
//   var type = (height>=190) ? 'tall' : 'short';
//   return type;
// }
// console.log(height());
//o/p-
//short

// console.log(height);
//o/p-
// ƒ height() {
//   var height = 123.56;
//   var type = height >= 190 ? 'tall' : 'short';
//   return type;
// }


//Q16.

// (() => {
//   setTimeout(() => console.log('A'),1000);
//   console.log('B')
//   setTimeout(() => console.log('C'),0);
//   console.log('D')
// })();
// o/p- B  D  C  A
// Initially, 'B' and 'D' are printed to the console immediately.
// After 1 second, the callback for the first setTimeout is executed, and 'A' is printed.
// The callback for the second setTimeout is executed (with a very short delay), and 'C' is printed.
// Note: The exact timing of when 'C' and 'A' are printed may vary depending on the browser and the environment.
// The key point is that 'B' and 'D' are printed immediately, 'C' is printed before 'A', and 'A' is printed after a delay of 1 second.


//Q17.
// console.log(call());
// function call() {
//   console.log("Hello Welcome to JavaScript");
// }
//o/p-
// Hello Welcome to JavaScript   --> this is part of fn
// undefined                     --> bcoz the function did not returned anything

//Q18.

// var x = 10;
// let y = 6;
// const z = 7;

// console.log('value of var x is ', x);
// console.log('value of let y is ', y);
// console.log('value of const z is ', z);


// function x() {
//   var a = 10;
//   function y() {
//     console.log('inside fn y');
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);

// z();



// function Dialog() {
//   return(
//     <>
//     <child>//JSX content</child>
//     </>
//   );
// }





// const Reducer1 = (state={
//   currentDepts:{
//     a1:'a101', b1:'a102',c1:'a103', d1:'a104'
//   }
// }, action) => {
//   return Object.assign({}, state, {currentDepts:{
//     a1:'a201', b1:'a202',c1:'a203', d1:'a204'
//   }});
// }
// export default Reducer1;

// const Reducer2 = (state={
//   currentDepts:{
//     a2:'a101', b2:'a102',c2:'a103', d2:'a104'
//   }
// }, action) => {
//   return Object.assign({}, state, {currentDepts:{
//     a2:'a201', b2:'a202',c2:'a203', d2:'a204'
//   }});
// }
// export default Reducer2;

// <button type="Submit" style='primary' size='sm'>submit</button>
// <button type="Submit" variant='primary' size='sm'>submit</button>
// <button type="Submit" class='primary' class='sm'>submit</button>
// <button type="Submit" className='primary' className='sm'>submit</button>


// React.createElement('div', null, React.createElement('h1', (), 'Hllo wold'), React.createElement('p', null));


// let params = useParams(); {params.productId}
// {useParams().productId}


// // action file
// function onIncrement(step) {
//   return {
//     type: 'INC',
//     step
// }
// }

// export function callIncrement() {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       console.log(getState());
//     }, 3000)
//   }
// }

// function Home() {
//   const handleAdd = (productId) => {
//     //logic
//   }
//   return < product onPurchase = {handleAdd}/>
// }
// export default Home;




// function Product(props) {
//   const [productId, setProductId] = useState("p.023");
//   const handleClick = () => {
//     //code
//   }
//   return (
//   <div>
//     <div>mobile</div>
//     <div>price</div>
//     <button onClick={handleClick}>BuyNow</button>
//   </div>
//   )
// }

// _____________________________________________________________________


// function Button() {
//   const [cntr,setCntr] = useState(100);
//   return (
//     <div>
//       <button onClick={handleClick}>Update</button>
//       <Resultant new={cntr}/>
//     </div>
//   )
// }



// function Resultant(props) {
//   const handleClick = () => {
//     setCntr(cntr+1);
//   }
//   return (
//   <div>
//     <h2>{props.new}</h2>
//   </div>
//   )
// }

// export default Button;

// ReactDOM.render(<Button/>, document.getElementById('root'));

// render() {
//   return (
//     <div>
//       <button onClick={this.props.handleClick}>100</button>
//       <Resultant new={this.state.cntr}/>
//     </div>
//   )
// }

// class Resultant extends React.Component{
//   handleClick() {
//     this.setState({
//       cntr: this.state.cntr+1
//     })
//   }
//   render() {
//     <div>
//       <h2>{this.props.new}</h2>
//     </div>
//   }
// }

// ReactDOM.render(<Button/>, document.getElementById('app'));



// _____________________________________________________________________


// const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
//   switch(action.type) {
//     case 'LOGIN':
//     return Object.assign({}, state, {
//       status: 'logged in',
//       value: action.value
//     })
//   }
// }



// const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
//   switch(action.type) {
//     case 'LOGIN':
//     let newState =  Object.assign({}, state, {
//       status: 'logged in',
//       value: action.value
//     })
//     return newState;
//   }
// }


// const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
//   switch(action.type) {
//     case 'LOGIN':
//     let newState = {
//       status: 'logged in',
//       value: action.value
//     })
//     return newState;
//   }
// }


// const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
//   switch(action.type) {
//     case 'LOGIN':
//     state = {
//       status: 'logged in',
//       value: action.value
//     }
//     return state;
//   }
// }