import React from "react";

export default function outputBasedQuestions() {
  return (
    <div>
      <h2>Welcome to Output Based questions.</h2>
    </div>
  );
}

// ***********************************************************************************************************************************************************
//Q.1

// const Furniture= {
//   name: 'Table',
//   type: 'Wood',
//   category: 'Routine',
//   price: 20000,
//   getPrice: function() {
//     return this.price;
//   }
// }

// console.log(Furniture.getPrice);
// console.log(Furniture.getPrice());

//o/p-
// ƒ getPrice() {
//   return this.price;
// }
// 20000

// ***********************************************************************************************************************************************************
// Q.2

// function callMe(arg) {
//   return arg && 'I like pizza' || 'I like burger';  //Unexpected mix of '&&' and '||'
// }

// console.log(callMe(true));
// console.log(callMe(false));

// ***********************************************************************************************************************************************************
// Q.3

// var a = 5;
// function first() {
//   a = 6;
// }
// function second() {
//   console.log(a);
// }
// first();
// second(); // 6

// ***********************************************************************************************************************************************************
// Q.4

// function callMe() {
//   if (true) {
//     var a = 5;
//   }
//   console.log(a);
// }
// callMe();

// In JavaScript, variables declared with var are hoisted to the top of their scope, which means the variable is accessible
// throughout the entire function regardless of where it's declared. Even though a is declared inside the if block, it gets
// hoisted to the top of the call function, and the console.log(a) statement outside the if block can access it.

// ***********************************************************************************************************************************************************
// Q.5

// var var1 = 20;
// var var2 = 30;
// var var3 = "40";

// const result1 = var1+var2+var3;
// const result2 = var3+var2+var1;

// console.log(result1);
// console.log(result2);

// In JavaScript, the + operator is used for both addition and string concatenation. The behavior depends on the types of the operands.
// If at least one operand is a string, concatenation is performed; otherwise, addition is performed.
// Explanation:

// 1. In result1, var1 and var2 are added as numbers, resulting in 50, and then var3 is concatenated as a string,
//    resulting in the final string "5030".

// 2. In result2, var3 is concatenated as a string with var2, resulting in the string "4030", and then var1 is added
// as a number, resulting in the final string "403020".

// Q. what if I want to perform addition operation even if the number is string?

// const result3 = Number(var1)+Number(var2)+Number(var3);
// console.log(result3);

// ***********************************************************************************************************************************************************
// Q.6

// function callMe(arr) {
//   return arr.map(function(x) {
//     return x*2;
//   })
// }

// const value = callMe([1,2,3]);
// console.log(value);

// ***********************************************************************************************************************************************************
// Q.7

// const arr = [2,4,6,8];
// let counter = 0;
// let sum = 0;

// while (counter < arr.length) {
//   sum += arr[counter];
//   counter++;
// }
// console.log(sum);

// ***********************************************************************************************************************************************************
// Q.8

// var a = 6;

// function func1() {
//   var a = 7;

//   function func2() {
//     var a = 8;
//     console.log(a);
//   }

//   func2();
//   console.log(a);
// }

// func1();
// console.log(a);

// ***********************************************************************************************************************************************************
// Q.9

// const x = {name: 'abc'};
// const arr = ['name'];
// x[arr] = 'xyz';

// console.log(x.name);

// Explanation:
// 1. Object Property Assignment:

// When you do x[arr] = 'xyz';, the arr variable is an array containing the string 'name'.
// JavaScript converts the array arr to a string when used as an object property key. Converting an array to a string results in the comma-separated string of its elements, which in this case is simply 'name'.

// This means that: x[arr] = 'xyz';
// is equivalent to: x['name'] = 'xyz';

// 2. Resulting Object:

// After x[arr] = 'xyz';, the object x now has a property 'name' with a value 'xyz'.
// However, this overwrites the existing name property, so the object now looks like:
// { name: 'xyz' }

// ***********************************************************************************************************************************************************
// Q.10

// ***********************************************************************************************************************************************************
// Q.11

// if ("candy" === 8) {
//   console.log('line 1');
// } else if ("blah" === "blah") {
//   console.log('line 2');
// } else {
//   console.log('line 3');
// }
// // o/p- line 2

// ***********************************************************************************************************************************************************
// Q.12

// function call() {
//   var a = 10;
//   if(a > 5) {
//     a = 7;
//   }
//   alert(a);
// }
// call(); // 7

// ***********************************************************************************************************************************************************
// Q.13

// var result = 0;
// for (var i=0; i<5; i++) {
//   result += i;
// }
// console.log('result', result); // 10

// ***********************************************************************************************************************************************************
// Q.14

// function first() {
//   window.a = 3;
// }

// function second() {
//   alert(a);  // 'a' is not defined
// }

// first();
// second();

// ***********************************************************************************************************************************************************
// Q.15

// const x = [];
// x[4] = 1;

// x.map((i) => console.log('inside map'));
// x.forEach((i) => console.log('inside forEach'));

// for (let i = 0; i < x.length; i++) {
//   console.log('inside for');
// }

// Explaination:
// 'map' & 'forEach':
// Behavior: The 'map' & 'forEach' method skips empty slots in the array.
// Since indices 0, 1, 2, and 3 are empty, the callback is only executed for index 4.

// 'for':
// Behavior: A 'for' loop iterates over all indices, including empty slots.
// For indices 0 through 3, the loop still executes, even though those slots are undefined.

// ***********************************************************************************************************************************************************
// Q.16

// console.log(null == 0);
// console.log(null === 0);

// console.log(null > 0);
// console.log(null < 0);

// console.log(null >= 0);
// console.log(null <= 0);

// Explaination:

// 1. null == 0

// Result: false
// Reason: null is loosely equal only to undefined but not to any other value, including 0. The equality comparison (==) does not perform numeric conversion in this case.

// 2. null === 0

// Result: false
// Reason: Strict equality (===) checks both type and value. Since null is an object type and 0 is a number type, they are not strictly equal.

// 3. null > 0

// Result: false
// Reason: When comparing null to a number, null is first converted to a number (+null results in 0). The comparison becomes 0 > 0, which is false.

// 4. null < 0

// console.log(null < 0);
// Result: false
// Reason: Similar to the previous case, null is converted to 0. The comparison becomes 0 < 0, which is false.

// 5. null >= 0

// Result: true
// Reason: null is converted to 0, and the comparison becomes 0 >= 0, which is true.

// 6. null <= 0

// Result: true
// Reason: Again, null is converted to 0, and the comparison becomes 0 <= 0, which is true.

// Key Observations:
// In loose equality (==), null is only equal to undefined, but not to 0.
// Numeric comparisons (>, <, >=, <=) convert null to 0 before performing the comparison.

// Q. If (null == 0) is false then Why (null >= 0) is true?
// The difference between null == 0 and null >= 0 arises because equality and relational operators follow different rules for type coercion in JavaScript.

// Equality (==): Does not coerce null to a number when comparing to 0. Instead, it has a specific rule that null is only equal to undefined.
// Relational (>=, <=, etc.): Converts null to a number (0) and performs a numeric comparison.

// 1. Behavior of null == 0
// The loose equality operator (==) checks for equality with specific rules:

// When null is compared using ==, it does not coerce types to numbers, except in specific cases.
// Instead, there is a special rule in JavaScript:
// null is only equal to undefined when using ==
// Otherwise, it evaluates to false.
// null == 0; // false (no type conversion is performed)
// null == undefined; // true (special rule for `null` and `undefined`)

// 2. Behavior of null >= 0
// Relational operators (<, <=, >, >=) follow a different process:

// -Type Coercion Happens:
// null is first converted to a number for the purpose of comparison.
// Number(null) evaluates to 0.

// -Numeric Comparison:
// After coercion, the comparison becomes:
// 0 >= 0; // true
// So, null >= 0 evaluates to true.

// ***********************************************************************************************************************************************************
// Q.17

// console.log(undefined == 0);
// console.log(undefined === 0);

// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log(undefined >= 0);
// console.log(undefined <= 0);

// Key Takeaways:
// undefined == 0 and undefined === 0 are false because undefined is not loosely or strictly equal to numbers.
// Comparisons (>, <, >=, <=) with undefined result in false because undefined is coerced to NaN, and comparisons involving NaN are always false.

// Why Does undefined <= 0 Still Return false?
// This behavior happens because JavaScript does not treat <= as purely the logical negation of >. It has its own set of evaluation rules:

// For undefined <= 0, the comparison is treated as a direct numeric comparison.
// undefined is coerced to NaN.
// Any comparison involving NaN directly returns false, so undefined <= 0 evaluates to false.

// ***********************************************************************************************************************************************************
// Q.18 Understanding typeof operator

// console.log(typeof null);  // object
// console.log(typeof undefined); // undefined
// console.log(typeof NaN); // number

// Even though NaN means "Not-a-Number," it is still classified as a number type because it is part of the numeric system used in JavaScript.
// NaN is the only value in JavaScript that is not equal to itself:

// console.log(NaN === NaN);  // false
// console.log(null === null);  // true
// console.log(undefined === undefined);  // true

// console.log(0 / 0);
// console.log(Math.sqrt(-1));
// console.log(Number("abc"));

// console.log(isNaN("hello"));        // true (coerced to NaN)
// console.log(Number.isNaN("hello")); // false (no coercion)

// Explanation:
// isNaN("hello"): Performs type coercion. It tries to convert "hello" to a number, which results in NaN, so it returns true.
// Number.isNaN("hello"): Does not perform type coercion. It checks whether "hello" is strictly NaN, which it isn't
// (because "hello" is a string & NaN type is Number), so it returns false.

// ***********************************************************************************************************************************************************
// Q.19

// const name = 'Sidd';
// age = 21;
// console.log(delete name);
// console.log(delete age);

// ***********************************************************************************************************************************************************
// Q.20

// const a = {};
// const b = { key: 'b'};
// const c = { key: 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// Explaination:
// In JavaScript, when you use an object as a property key, it is automatically converted to a string (using the toString() method),
// and all objects that have the same string representation ("[object Object]" in this case) will collide as keys, overwriting each other.
// (By default, calling toString() on an object returns "[object Object]" (which is the default string representation of an object))

// So, the assignment a[b] = 123 is effectively equivalent to a["[object Object]"] = 123
// This means we're setting a property on 'a' with the key "[object Object]" and the value 123.

// Similarly, c is also converted to the string "[object Object]" (the default string representation of an object).

// This means we're overwriting the property "[object Object]" on 'a' with the value 456, since the key is the same ("[object Object]").

// Since a[b] is equivalent to a["[object Object]"], the value of a[b] is 456 (the value that was last assigned to the "[object Object]" property).

// ***********************************************************************************************************************************************************
// Q.21

// console.log(a);
// console.log(b);
// var a = b = 5;

// ***********************************************************************************************************************************************************
// Q.22

// var a = 5;
// console.log(a++);
// console.log(a);

// ***********************************************************************************************************************************************************
// Q.23

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// ***********************************************************************************************************************************************************
// Q.24

// const func1 = () => {
//   console.log(this.name);
// }

// func1.call({ name: 'John'});

// const func2 = function() {
//   console.log(this.name);
// }

// func2.call({ name: 'John' });

// call() method: This is a built-in JavaScript function that allows you to invoke a function with a specific value for this. The call() method takes the context (value of this) as the first argument, followed by any arguments that the function may take.
// function.call(thisArg, arg1, arg2, ..., argN);
// thisArg: The value that this should refer to inside the function.
// arg1, arg2, ..., argN: Optional arguments that we want to pass to the function being called.

// Arrow functions: Lexically bind this from the surrounding context (the scope in which the function is defined), so call() won't change this.
// Regular functions: Use the this provided by call(), allowing you to bind this to a specific object.

// ***********************************************************************************************************************************************************
// Q.25

// function sum(a=5, b=7) {
//   console.log(a+b);
// }
// sum(null, 20);
// sum(undefined, 20);
// sum(10);

// ***********************************************************************************************************************************************************
// Q.26

// (A)

// var objA = {prop: 42};
// var objB = objA;
// objB.prop = 90;
// console.log(objA);

// (B)

// var objA = {prop: 42};
// var objB = objA;
// objB = {};
// console.log(objA);

// (C)

// var arrA = [0];
// var arrB = arrA;
// arrB[0] = 42;
// console.log(arrA);

// (D)

// var arrA = [1,2];
// var arrB = arrA.slice();
// arrB[0] = 42;
// console.log(arrA);

// arrA.slice():
// The slice() method, when used without arguments, creates a new array containing all the elements of the original array (arrA).
// It creates a shallow copy, meaning:
// The top-level elements of the array are copied.
// If the array contains objects or other nested data structures, the references to those objects are copied, not the actual objects themselves.

// In Q.26 (D), the slice() method creates a shallow copy of arrA.
// arrB is now a new array with the same values as arrA, but it is independent of arrA.


// ------------------------------------------------------------

// const array = Array(10)
// const array = [...Array(10)]
// const array = [...Array(10).keys()]
// console.log(array); 
// console.log(typeof array); 

// ***********************************************************************************************************************************************************
// Q.27

// function foo1(a, ...rest, c) {
//   console.log(a, ...rest, c);
// }
// foo1(1,2,3,4,5);

// function foo2(a, c, ...rest) {
//   console.log(a, ...rest, c);
// }
// foo2(1,2,3,4,5);

// ***********************************************************************************************************************************************************
// Q.28

// var x = 20;

// console.log(func1);

// function  func1() {
//   console.log(x);
//   var x = 10;
// }
// func1();

// ***********************************************************************************************************************************************************
// Q.29

// console.log('start');

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// Promise.resolve().then(() => console.log('promise'));
// console.log('end');

// ***********************************************************************************************************************************************************
// Q.30

// async function foo() {
//   return "Hello World";
// }

// const result = foo();
// console.log(result);

// ***********************************************************************************************************************************************************
// Q.31

// var show = 1;
// console.log(show);

// function show() {
//   console.log('inside fn');
// }
// console.log(show);

// ***********************************************************************************************************************************************************
// Q.32

// const str = 'abc' + + 'def';
// console.log(str);

// eg-
// console.log(+ '123'); // 123, because '123' can be converted into the number 123
// console.log(+ 'abc'); // NaN, because 'abc' cannot be converted into a number
// console.log(+ ''); // 0, because an empty string is converted to 0
// console.log(+ true); // 1, because true is converted to 1
// console.log(+ false); // 0, because false is converted to 0

// ***********************************************************************************************************************************************************
// Q.33 setTimeout o/p

// // (A)
// function func1() {
//   for(var i=0; i<3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// func1();

// // (B)
// function func2() {
//   for(let i=0; i<3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// func2();

// (C) In question (A), make the output 0,1,2 without removing 'var'

// function func3() {
//   for(var i=0; i<3; i++) {
//     function logValue (i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     logValue(i);
//   }
// }
// func3();
// using an Immediately Invoked Function Expression (IIFE) to capture the value of 'i' in each iteration.

// ***********************************************************************************************************************************************************
// Q.34 Understanding shadowing

// let a = 10;

// (function() {
//   console.log(a);
//   let a = 20;
//   console.log(a);
// })();

// ***********************************************************************************************************************************************************
// Q.35 Understanding type coercion in javascript

// console.log(5 + [8] - 10);
// console.log(5 + [8, 2] - 10);
// console.log(4 + ["25"] - 5);
// console.log(4 + ["5" + "10"] - 2);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Understanding type coercion with Unary Operators

// console.log('1'+ +'2');  //12
// console.log(1+ +2);  //3

// console.log(1+ +'2');  //3
// console.log('1'+ +2);  12

// console.log(1+ '2' + '2');  //122
// console.log(1+ + '2' + '2');  //32

// console.log(1+ + [2]);  //3
// console.log(1+ + [2,3]);  //NaN


// console.log(+'123');  //123
// console.log(+true);   //1
// console.log(+false);  //0
// console.log(+null);   //0
// console.log(+undefined); //NaN


// The unary plus (+) converts an operand into a number, if possible. It is commonly used to ensure numerical operations on variables that may contain numeric strings. If the operand is a string that represents a valid number, it will be converted to a number. Otherwise, it will evaluate to NaN (Not-a-Number).

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log([2]=='2');  //true

// When a non-primitive (like an array) is compared using ==, JavaScript tries to convert it to a primitive value.
// For an array, this involves calling its toString() method, which returns a string representation of the array's elements.
// For [2], toString() returns '2'.

// console.log([2]==[2]);  //false

// Unlike the case where [2] == '2', type coercion isn't applied to both [2] and [2] because both operands are objects.
// Instead, their references are compared.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log([1,2]=='1,2');

// The loose equality operator (==) allows type coercion, so JavaScript tries to convert the array to a string to perform the comparison.
// When an array is converted to a string, its elements are joined by commas (,) using the toString() method.

// For the array [1, 2], the toString() method returns the string '1,2'.
// After conversion, the comparison becomes:
// '1,2' == '1,2'; // true

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log({a:1,b:2}=='a:1,b:2');

// The loose equality operator (==) tries to convert the object into a primitive value (usually a string) to compare it with the string.
// When an object is converted to a string, JavaScript calls the toString() method of the object.

// The default toString() method for plain objects (created with {}) returns "[object Object]", which is not related to the keys or values of the object.
// After conversion, the comparison becomes:
// "[object Object]" == "a:1,b:2"; //false

// console.log({a:1,b:2}=='[object Object]'); // this will be true

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(typeof []); // object
// console.log(typeof {}); // object

// console.log([] + {});   // [object Object]
// console.log({} + []);   // [object Object]

// [] (empty array) is converted to an empty string "".
// {} (empty object) is converted to its string representation "[object Object]".
// The + operator concatenates these two strings: "" + "[object Object]" results in "[object Object]".


// In JavaScript, an empty object {} is converted to its string representation "[object Object]" because of the following reasons:

// 1. Default Conversion Using toString
// All objects in JavaScript inherit the toString() method from Object.prototype.
// The default implementation of toString() for objects returns the string "[object Object]".
// Here, "object" indicates the type, and "Object" is the internal class of the object.

// 2. Type Coercion Rules
// When an object is used in a string context (e.g., concatenation with + or logging), JavaScript automatically calls the toString() method to convert the object into a string.
// For an empty object {}, toString() returns the default string representation: "[object Object]".

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(!!{}); //true
// console.log(!![]); //true

// {} is an empty object. In JavaScript, all objects (including empty ones) are truthy.
// [] is an empty array. Like objects, arrays are also truthy, even if they are empty.

// The !! operator is a double negation. It converts a value into its corresponding boolean value:
// The first ! negates the truthiness of the value.
// The second ! negates it again, effectively returning the boolean equivalent of the original value.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(true + 1); // 2
// console.log(true + '1'); // true1

// In JavaScript, true is treated as 1 when used in arithmetic operations.
// (true is converted to number 1 when used with number) => so the 1st expression becomes => 1 + 1 = 2

// The + operator, when used with a string and a non-string, converts the non-string to a string.
// (true is converted to string 'true' when used with string) => so the 2nd expression becomes => 'true' + '1' = 'true1'

// ..................................

// console.log(true - 1); // 0
// console.log(true - '1'); // 0

// In JavaScript, when using - (subtraction), JavaScript tries to convert both operands to numbers.

// => so the 1st expression becomes 1 - 1 = 0
// => so the 2nd expression becomes 1 - 1 = 0

// true is converted to 1.
// '1' (a string) is converted to 1 (a number).


// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// const a = [5];
// const b = [3];

// console.log(a+b); // 53
// console.log(typeof (a+b)); // string

// console.log(a-b); // 2
// console.log(typeof (a-b)); // number

// // The + operator converts arrays to strings ("5" and "3") and concatenates them.

// // If we intended to add the numerical values in the arrays, we would need to extract the elements explicitly and add them, like this:
// console.log(a[0] + b[0]); // 8


// -----------------------------------------------------------------------------------------------------------------------------------------------------------


// console.log('5' + 1); // 51
// console.log('5' - 1); // 4

// console.log([4] + [2]);  // 42
// console.log([4] - [2]);  // 2

// console.log([10] + [20] + "30");  // 102030

// console.log([1, 2] + 3); // 1,23


// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// let x = 123;
// let y = new Number(123);  // An object created using the Number constructor with the numeric value 123
// let z = new Number('123'); // An object created using the Number constructor with the string '123', which is converted to the numeric value 123.

// console.log(typeof y);
// console.log(typeof z);

// console.log(y==z);  // false
// console.log(y===z); // false

// console.log(x === y); // false
// Here, no type coercion occurs, and the comparison recognizes the difference between a primitive (123) and an object (Number {123}).


// console.log(x == y); // true

// The reason x == y evaluates to true is due to type coercion in JavaScript when using the == operator (loose equality).

// What Happens Internally in x == y:
// 1.
// x is a primitive number:
// x = 123 is a primitive value of type number.

// 2.
// y is a Number object:
// y = new Number(123) is an object, not a primitive value.
// Internally, the Number object wraps the primitive value 123.

// 3.
// == triggers type coercion:
// The == operator compares values after attempting to convert them to a common type.
// When comparing a primitive (x) with an object (y), JavaScript attempts to convert the object (y) into its primitive value by calling the object's valueOf method.

// 4.
// y.valueOf() is called:
// The Number object has a valueOf method that returns its underlying primitive value (123).
// So, y.valueOf() produces 123.

// 5.
// Comparison after coercion:
// 123 == 123 // true
// console.log(y.valueOf()); // 123


// ***********************************************************************************************************************************************************
// Q.36 Understanding hoisting and scope behavior.

// {
//   let a = 1;
//   let b = 2;

//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------


// var x = 1;

// function outer() {
//     console.log(x); // undefined
    
//     function inner() {
//         console.log(x); // undefined
//     }    
//     inner();
    
//     var x = 2;
// };
// outer();

// Explaination:
// 1. Hoisting:
// In JavaScript, variable declarations (with var) are hoisted to the top of their scope. This means that the declaration (var x;) 
// is moved to the top, but the assignment (x = 2;) happens at its original position in the code.

// 2. Scope:
// The x inside the outer function is hoisted and set to undefined at the start of the function. Even though there’s a global x = 1,
// the outer function has its own scope for x, and it starts as undefined inside outer.

// 3. Execution:
// The first console.log(x) inside outer() prints undefined because x is hoisted but not yet assigned a value (it's still undefined).
// The inner() function also logs undefined because it inherits the same hoisted x from outer.
// The assignment x = 2 happens after the logging, so it does not affect the output.

// ***********************************************************************************************************************************************************
// Q.37

// function func() {
//   x = 10;
//   console.log(x);
// }
// console.log(x);
// func();

// ***********************************************************************************************************************************************************
// Q.38 Understanding hoisting

// (A)

// console.log(a); // ReferenceError (a is in the TDZ)
// let a;          // TDZ ends here
// console.log(a); // undefined (a is declared but not initialized)
// a = 10;
// console.log(a); // 10 (a is now initialized with the value 10)

// The Temporal Dead Zone (TDZ) ends exactly when the variable's declaration is encountered in the code during execution.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B)

// foo();
// var foo = 20;

// function foo() {
//   console.log('calling foo');
// }
// foo();

// ................................................
// Key Concepts =>
// Hoisting:

// 1. Function declarations are hoisted entirely (both name and body) to the top of their scope.
// var declarations are hoisted, but only the declaration, not the initialization. The variable is initialized to undefined during
// the creation phase of the execution context.
// When both a function declaration and a var declaration share the same name:

// 2. The function declaration takes precedence during hoisting.
// However, once the var assignment is encountered during execution, it overwrites the function with the new value.

// ................................................
// Hoisted Version of the Code =>
// When the code is hoisted, it effectively looks like this:

// function foo() {                // The function declaration is hoisted first.
//   console.log('calling foo');
// }

// var foo;                        // The `var foo` declaration is hoisted but initialized to `undefined`.

// // During execution:
// // Step 1: `foo` initially refers to the function declaration.
// // Step 2: `foo` gets reassigned to `20` when `var foo = 20` executes.

// ................................................
// Final Output =>

// First foo(): calling foo
// Second foo(): TypeError: foo is not a function

// ................................................
// Note =>
// In older versions of JavaScript (or in non-strict mode), function declarations and var declarations could coexist,
// with function declarations taking precedence during hoisting.

// However, modern JavaScript environments (e.g., ES6 or newer, which many tools like Babel or TypeScript enforce by default) treat this
// as a conflict because both var and function declarations attempt to declare the same identifier in the same scope.
// So in modern JavaScript environments, declaring a function and a variable with the same name in the same scope is not allowed.

// This results in a SyntaxError when running in modern environments like:

// Node.js (ES6+ version).
// Browsers with strict mode enabled.

// ***********************************************************************************************************************************************************
// Q.39 Understanding Closures

// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 5;
//   return inner;
// }

// const innerFn = outer();
// // console.dir(inner); //outputs the object's properties in a tree-like structure.

// innerFn();

// ***********************************************************************************************************************************************************
// Q.40

// let a = {
//   myName: 99,
//   getX() {
//     return this.myName;
//   }
// };

// let x = a.myName;

// let y = { myName: 42 };

// console.log(a.getX());
// console.log(a.getX.apply(y));

// ***********************************************************************************************************************************************************
// Q.41 Comparing non-primitive values

// (A)
// const obj1 = {name: 'xyz'};
// const obj2 = {name: 'xyz'};
// console.log(obj1 == obj2);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// (B)
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// console.log(arr1 == arr2);

// // Key Point:
// // Primitive values (like numbers, strings, and booleans) are compared by their values.
// // Objects and arrays are compared by their references

// // How to Compare the content of Two non-primitive values (Arrays & objects)?

// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

// ***********************************************************************************************************************************************************
// Q.42 Understanding inbuilt methods

// let {length} = 'hello';
// console.log(length);

// ***********************************************************************************************************************************************************
// Q.43 Understanding operator precedence and short-circuit evaluation

// let x = 2 || 3 && 4;
// console.log(x);

// Operator Precedence:
// The && (logical AND) operator has higher precedence than || (logical OR).

// This means the 3 && 4 part is evaluated first, and then its result is used with 2 ||.

// Step-by-Step Evaluation:
// step1-

// 3 && 4:
// Logical AND (&&) evaluates to the second operand if the first operand is truthy.
// Since 3 is truthy, 3 && 4 evaluates to 4.

//  step2-

//  2 || 4:
// Logical OR (||) evaluates to the first operand if it is truthy; otherwise, it evaluates to the second operand.
// Since 2 is truthy, 2 || 4 evaluates to 2.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// let y = 2 && 3 || 4;
// console.log(y);

// Operator Precedence:
// Again, && has higher precedence than ||, so 2 && 3 is evaluated first, and its result is used with || 4.

// Step-by-Step Evaluation:
// step1-

// 2 && 3:
// Logical AND (&&) evaluates to the second operand if the first operand is truthy.
// Since 2 is truthy, 2 && 3 evaluates to 3.

//  step2-

// 3 || 4:
// Logical OR (||) evaluates to the first operand if it is truthy; otherwise, it evaluates to the second operand.
// Since 3 is truthy, 3 || 4 evaluates to 3.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// let z = 3 && 2 || 4;
// console.log(z);  // 2

// A General Rule for logical AND (&&) operator:

// It evaluates from left to right.
// The first falsy value stops the evaluation and is returned.
// If all operands are truthy, the last value is returned.

// A General Rule for the Logical OR (||) Operator:

// It evaluates from left to right.
// The first truthy value stops the evaluation and is returned.
// If all operands are falsy, the last value is returned.

// ***********************************************************************************************************************************************************
// Q.44 Understanding fn based o/p

// function func1() {
//   return {
//     language: 'JavaScript'
//   }
// }
// console.log(func1());

// function func2() {
//   return
//   {
//     language: 'JavaScript'
//   }
// }
// console.log(func2());

// function func3() {
//   return (
//     'JavaScript'
//   )
// }

// ***********************************************************************************************************************************************************
// Q.45 Understanding Data Types and data Manipulation

// let str = "Hello";
// console.log(str[0]); // "H"

// Accessing Characters in a String:

// In JavaScript, strings behave like arrays of characters. We can access individual characters in a string using bracket notation,
// e.g., str[0], where 0 is the index of the character.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// let name = "Hello";
// name[0] = "T";
// console.log(name); //"Hello"

// Key Points:

// Strings are immutable in JavaScript, so we can read characters using str[index], but we cannot modify them directly
// (e.g., str[0] = 'J' will have no effect).
// To manipulate strings, we need to create a new string.


// ***********************************************************************************************************************************************************
// Q.46 Understanding Primitive Wrapping and Immutability in JavaScript

// const str = 'hello';
// str.data = 'val';
// console.log(str.data); // undefined (Note- in strict mode it will give TypeError)

// What Happens Here?
// Primitive Type (string) is Immutable

// The variable str holds a primitive string ('hello').
// In JavaScript, primitives (strings, numbers, booleans, null, undefined, symbols, and bigints) are immutable and do not support adding properties.
// Attempt to Add a Property (str.data = 'val')

// JavaScript temporarily wraps primitive values in an object wrapper (i.e., String object) when accessing properties.
// However, this temporary object is discarded immediately after execution.
// So, str.data = 'val' has no lasting effect.
// Accessing str.data

// Since str.data was never actually stored, console.log(str.data); returns undefined.


// Key Takeaways:
// Primitives are immutable and cannot have properties added to them.
// JavaScript wraps primitives in temporary objects, but they do not retain new properties.

// If you need an object with properties, use an explicit object:
// const strObj = new String('hello');
// strObj.data = 'val';
// console.log(strObj.data); // 'val'
// However, note that new String() creates an object, not a primitive string, which can have unexpected behaviors in comparisons.

