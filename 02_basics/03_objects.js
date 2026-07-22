// Singleton 
// Object.create

// Object literals

const mySym = Symbol("Key1")

const jsUser = {
    name : "Mudit",
    "full name" : "Mudit Sharma",
    [mySym] : "myKey1",
    age : 32,
    location : "Jaipur",
    email : "user@abc.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "user@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "user@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greeting1 = function(){
    console.log(`Hello JS User, ${this["full name"]}`)
}

// console.log(jsUser.greeting) // [Function (anonymous)]

console.log(jsUser.greeting())
console.log(jsUser.greeting1())