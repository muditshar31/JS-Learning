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