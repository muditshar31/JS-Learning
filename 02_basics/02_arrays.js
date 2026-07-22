const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

/* Push Method */ 
/* Push method of array adds the specified elements to the end of an array and returns the new length of the array. */
// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][1]); // Flash

/* Concat Method */
/* Concat method is used to merge two or more arrays */
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

/* Spread Operator */
const allNewHeros = [...marvel_heros, ...dc_heros];

// console.log(allNewHeros);

const Arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const flatArray = Arr1.flat(Infinity);
const flatArray = Arr1.flat(2);

console.log(flatArray);

console.log(Array.isArray("Spiderman"));
console.log(Array.from("Spiderman"));
console.log(Array.from({name : "Spiderman"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

