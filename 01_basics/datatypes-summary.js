/*
Primitive Data Types 
Primitive Data Types are those whose values are stored directly in the variable.
7 Types : String, Number, BigInt, Boolean, Undefined, Null, Symbol
*/

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null; // object => null is a special type of object that represents the absence of any value or object
let userEmail;

const id = Symbol("123"); // Symbol => used to create unique identifiers for objects
const anotherId = Symbol("123");

console.log(id === anotherId); // false => Symbol is unique and cannot be compared with another Symbol

const bigNumber = 1234567890123456789012345678901234567890n; 
// BigInt => used to store large numbers

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);

/* 
Non-Primitive Data Types (Reference Data Types)
Reference Data Types are those whose values are not stored directly in the variable, 
but rather a reference to the memory location where the value is stored.
3 Types : Object, Array, Function

To be a Master in JavaScript, one must understand : 
OBJECTS & BROWSER - EVENTS or WEB EVENTS 
*/

const heros = ["Iron Man", "Spiderman", "Thor"];

let myObj = {
    name: "Tony Stark",
    age: 45,
    isAvenger: true,
}

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunc);