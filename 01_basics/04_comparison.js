/*
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 === 1); // false
console.log(2 !== 1); // true
*/
/*
console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("2" > "12"); // true => string comparison is done based on the first character of the string
console.log(1 > "2"); // false
*/

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true => null is converted to 0 and then compared with 0

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false => undefined is converted to NaN and then compared with 0
console.log(undefined < 0); // false => undefined is converted to NaN and then compared with 0

