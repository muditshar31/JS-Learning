const num1 = 400
console.log(num1) // 400

/* Creating a Number object */
/* This creates an instance of the Number constructor and initializes it with the value 400 */
const num2 = new Number(400)
console.log(num2) // [Number: 400]

/*Number methods*/
console.log(num2.toString()); // "400" // returns a string representing the number
console.log(num2.toFixed(2)); // "400.00" // returns a string representing the number with a specified number of decimal places

const num3 = 400.923456789
console.log(num3.toPrecision(5)); // "400.92" // returns a string representing the number to a specified precision
console.log(num3.toPrecision(3)); // "401" // returns a string representing the number to a specified precision

const num4 = 1000000
console.log(num4.toLocaleString('en-IN')); // "10,00,000" // returns a string representing the number in a locale-sensitive format
console.log(num4.toLocaleString('en-US')); // "1,000,000" // returns a string representing the number in a locale-sensitive format

/********************************Maths*******************************/

console.log(Math); // [Math] // returns the Math object which has properties and methods for mathematical constants and functions

// Math methods
console.log(Math.PI);   // 3.141592653589793 // returns the value of PI
console.log(Math.E);    // 2.718281828459045 // returns the value of E
console.log(Math.sqrt(16)); // 4 // returns the square root of a number
console.log(Math.pow(2, 3)); // 8 // returns the value of a number raised to a power
console.log(Math.abs(-5)); // 5 // returns the absolute value of a number
console.log(Math.floor(4.7)); // 4 // returns the largest integer less than or equal to a given number
console.log(Math.ceil(4.2)); // 5 // returns the smallest integer greater than or equal to a given number
console.log(Math.round(4.5)); // 5 // returns the value of a number rounded to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // 5 // returns the largest of zero or more numbers
console.log(Math.min(1, 2, 3, 4, 5)); // 1 // returns the smallest of zero or more numbers
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1); // returns a random number between 1 (inclusive) and 10 (exclusive)

console.log(Math.floor(Math.random() * 10)); // returns a random integer between 0 and 9

console.log((Math.floor(Math.random() * 10)) + 1); // returns a random integer between 1 and 10 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random integer between 10 and 20 (inclusive)