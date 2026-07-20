const name = "Mudit";
const contNumber = 9718004224;

//console.log(`My name is ${name} and my contact number is ${contNumber}.`); 
// My name is Mudit and my contact number is 9718004224.

console.log(`My name is ${name} and my contact number is ${contNumber}.`); 
// My name is Mudit and my contact number is 9718004224.

const gameName = new String("Counter Strike");

console.log(gameName[0]); // C
console.log(gameName.__proto__); // String {0: 'C', 1: 'o', 2: 'u', 3: 'n', 4: 't', 5: 'e', 6: 'r', 7: ' ', 8: 'S', 9: 't', 10: 'r', 11: 'i', 12: 'k', 13: 'e', length: 14, …}

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); // COUNTER STRIKE
console.log(gameName.charAt(8)); // S
console.log(gameName.indexOf("i")); // 11 => index of first occurrence of "i"

/*SUBSTRING method*/
/*This method extracts a part of the string between two specified indices.*/
const newString = gameName.substring(0, 4); // Counter Strike => 0 to 4 => Coun
console.log(newString); // Coun

/*SLICE method*/
/*This method extracts a part of the string between two specified indices, including the starting index and excluding the ending index.*/
const newString2 = gameName.slice(0, 7); // Counter Strike => 0 to 7 => Counter
console.log(newString2); // Counter

/*TRIM method*/
/*This method removes whitespace from both ends of the string.*/
const newString3 = "    Game Of Thrones    ";
console.log(newString3); //     Game Of Thrones
console.log(newString3.trim()); // Game Of Thrones => removes whitespace from both ends of the string

/*REPLACE method*/
/*This method replaces a specified substring with another substring.*/
const URL = "https://www.overwatch.com/home%20page/features";
console.log(URL.replace("%20", "-")); // https://www.overwatch.com/home-page/features

/*INCLUDES method*/
/*This method checks if a string contains a specified substring and returns a boolean value.*/
console.log(URL.includes("home")); // true

/*SPLIT method*/
/*This method splits a string into an array of substrings based on a specified separator.*/
const fruits = "apple-banana-orange-grapes-mango";
const fruitArray = fruits.split("-");
console.log(fruitArray); // ['apple', 'banana', 'orange', 'grapes', 'mango']