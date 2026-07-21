"use strict"; // Treat all JS code as newer version, helps avoid errors

// alert (3 + 3); // We are using Node.js, so alert will not work here. 
// It is used in browsers to show popups.

let name = "Mudit";
let age = 21;
let IsLoggedIn = false;
let state; // undefined

/*
Data types in JS are divided into two categories:
1. Primitive data types: These are immutable and include:
- String => "Hello World"
- Number => 123, 120.50 (2 to power 53 - 1)
- Boolean => true or false
- Null => intentional absence of value // null is an object in JS, but it is a primitive data type
- Undefined => variable declared but not assigned a value
- BigInt => 1234567890123456789012345678901234567890n (2 to power 53 - 1)
- Symbol => unique and immutable data type that can be used as an identifier for object properties

2. Non-primitive data types: These are mutable and include:
- Object
- Array
- Function
*/

console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a bug in JS, but it is kept for legacy reasons)

// console.log(typeof Object); // object
// console.log(typeof Array); // object
// console.log(typeof Function); // function