// console.log("M")
// console.log("U")
// console.log("D")
// console.log("I")
// console.log("T")

/* Instead of calling this 5 times. We can give that work to a Function */

function sayMyName (){
    console.log("M")
    console.log("U")
    console.log("D")
    console.log("I")
    console.log("T")
} 

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7
// addTwoNumbers("3", 4) // 34
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 34

// const result = addTwoNumbers(3, 5) // 8
// console.log("Result is :", result) // undefined

function addTwoNumbers (number1, number2){
    /* option 1 */
    // let result = number1 + number2
    // console.log("Output")
    // return result
    // console.log("Output") // Unrerachable code 
    // This line will never execute as function will end after return

    /* Option 2 */
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result is :", result) // Result is : 8

function loginUserMessage(username = "Sam"){
    // if(username ===undefined)
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Mudit")) // Mudit just logged in
console.log(loginUserMessage("")) //  just logged in
console.log(loginUserMessage()) // Please enter a username

/* REST operator inside Functions */

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600)) // [ 400, 500, 600 ]

/* Handle Objects within Function */

const user = {
    username : "Hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
    // Username is Hitesh and Price is 199
}

handleObject(user) 
handleObject({
    username : "Sam",
    price : 399
})

const myNewArray = [200, 300, 400]

function returnSecondValue (getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray)) // 400
console.log(returnSecondValue([4000, 6000, 7000, 9000])) // 7000