// Arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(6, 12, 18, 24, 30, 36); // creates an array of length 6
// console.log(myArr2[1]); // 12

// Array methods

// myArr.push(6); // adds 6 to the end of the array
// myArr.push(7); // adds 7 to the end of the array
// myArr.pop();
// myArr.unshift(9); // Adds the value at start of Array
// myArr.shift(); // Removes the start value from the Array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr); // Returns an array i.e. [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // Returns a string i.e. 0,1,2,3,4,5

// Slice & Splice Methods //
/* slice() creates a new array without changing the original, while splice() modifies 
the original array by adding, removing, or replacing elements. */

console.log("A ", myArr);

const myNewArr = myArr.slice(1, 3)

console.log(myNewArr);
console.log("B ", myArr)

const myNewArr2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myNewArr2);