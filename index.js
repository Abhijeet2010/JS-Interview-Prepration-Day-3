// // Q.1 How many operators do we have in JS ?
// Ans:- Arithmetic operators: These operators perform arithmetic calculations on numerical values (e.g., +, -, *, /).
// Comparison operators: These operators compare two values and return a Boolean value based on the comparison (e.g., ==, ===, !=, !==, >, <, >=, <=).
// Logical operators: These operators perform logical operations on Boolean values (e.g., &&, ||, !).
// Assignment operators: These operators assign a value to a variable (e.g., =, +=, -=, *=, /=).
// Conditional (ternary) operator: This operator is used to perform a conditional operation that returns one value if the condition is true and another value if the condition is false (e.g., ?:).

// Q.2 What are arrow functions?
// Ans:- Arrow functions are a way to define functions in JavaScript with a shorter syntax. They are often used as an alternative to traditional function expressions, and they are particularly useful when you need to pass a function as an argument to another function, or when you want to define a function as a method in an object or class.
// E.g:- 
// const add = (a, b) => a + b;
// console.log(add(1, 2));  // Output: 3

// Q.3 Difference between undefined vs not defined vs NaN
// Ans:- undefined: This value indicates that a variable has been declared, but it has not been assigned a value. 
// For example:
// let x;
// console.log(x); // Output: undefined

// null: This value is explicitly used to represent the absence of a value. It can be assigned to a variable to indicate that the variable has no value. Example:- 
// let y = null;
// console.log(y); // Output: null

// NaN: This stands for "Not a Number," and it represents the result of an invalid mathematical operation. For example:
// console.log(Math.sqrt(-1)); // Output: NaN


// Q.4 What is callback hell?
// Ans:-    In JavaScript, a callback is a function that is passed as an argument to another function and is executed after the outer function has completed. Callback hell is a term used to describe the situation where a programmer has written a series of nested callback functions, resulting in code that is difficult to read and debug.
// function doSomething(callback) {
  // do something asynchronously
//   setTimeout(function() {
//     callback();
//   }, 1000);
// }

// doSomething(function() {
//   doSomething(function() {
//     doSomething(function() {
//       // and so on...
//     });
//   });
// });


// Q.5 Please explain Self Invoking Function and its code
// Ans.:- A self-invoking function is a function that is defined and immediately called, without the need for an explicit function call. In JavaScript, self-invoking functions are defined using the following syntax:

// (function() {
//     // define a private variable
//     let secret = "I'm a secret!";
  
//     // define a public function
//     function revealSecret() {
//       console.log(secret);
//     }
  
//     // reveal the secret
//     revealSecret();
//   })();
  
//   // this will throw an error, because secret is not defined outside the self-invoking function
//   console.log(secret);
  

// Q.6 What is the use of setTimeout
// setTimeout is a JavaScript function that allows you to schedule a task to be executed after a specified time interval. It takes two arguments: a callback function and a delay in milliseconds.
// setTimeout is often used to delay the execution of a piece of code or to create a periodic execution of a block of code. It can be useful for creating animations, delays, and other time-based effects in your code.
// setTimeout(function() {
//     console.log("Hello, World!");
//   }, 1000);
  

