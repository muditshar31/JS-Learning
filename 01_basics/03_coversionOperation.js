let score = "33abc";

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Mudit";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

/*
1 => true
0 => false
"" => false
"value" => true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber); // "33"

/* ***************************Operations******************************** */

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(3 + 2); // 5
// console.log(3 - 2); // 1
// console.log(3 * 2); // 6
// console.log(3 ** 2); // 3^2 = 9
// console.log(3 / 2); // 1.5
// console.log(3 % 2); // 1 => remainder of 3/2

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + " " + str2;
console.log(str3); // Hello World

console.log("1" + 2); // 12 => string concatenation
console.log(1 + "2"); // 12 => string concatenation
console.log("1" + 2 + 2); // 122 => string concatenation
console.log(1 + 2 + "2"); // 32 => number addition first then string concatenation

console.log(true) // true
console.log(true + true) // 2 => true is converted to 1 and then added
console.log(true + false) // 1 => true is converted to 1 and false is converted to 0 and then added
console.log(+true) // 1 => true is converted to 1
console.log(true+"") // "true" => true is converted to string
console.log(+"") // 0 => empty string is converted to 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4
console.log([num1], [num2], [num3]); // [ 4 ] [ 4 ] [ 4 ]

let gameCounter = 100;
// gameCounter++;   // 101
++gameCounter;    // 101 
console.log(gameCounter); // 101

/*
let x = 3;
const y = x++;
console.log(x, y); // 4 3 => x is incremented after assignment to y
*/

let x = 3;
const y = ++x;
console.log(x, y); // 4 4 => x is incremented before assignment to y
