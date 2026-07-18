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

/*********************Memory Types in JavaScript************************************/

/*
1. Stack Memory => used to store primitive data types and function references. 
When we use primitive data types, we get the copy of the value stored in the declared variable.
*/

let myName = "Mudit";

let anotherName = myName; // copy of the value stored in myName is assigned to anotherName
anotherName = "Advik"; // changing the value of anotherName does not affect myName

console.log(myName); // Mudit
console.log(anotherName); // Advik

/*
2. Heap Memory => used to store non-primitive data types (objects, arrays, functions). 
When we use non-primitive data types, we get the reference to the memory location where 
the original value is stored.
*/

let userOne = {
    email: "userone@example.com",
    upi: "userone@upi"
}

let userTwo = userOne; // reference to the memory location of userOne is assigned to userTwo
userTwo.email = "usertwo@example.com"; // changing the email of userTwo also changes the email of userOne since they reference the same object in memory

console.log(userOne.email); // usertwo@example.com
console.log(userTwo.email); // usertwo@example.com