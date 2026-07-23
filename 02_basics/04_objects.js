// const tinderUser = new Object() // Object declaration (Singleton)
const tinderUser = {} // Object declaration (Non-Singleton)

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Mudit",
            lastname : "Sharma"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: {5 : "e", 6 : "f"} }

/* Object.Assign method */
/* Assign is a static method that copies all properties from one or more source objects 
to a target object */
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4)

const users = [
    {
        id : 1,
        email : "user1@gmail.com"
    },
    {
        id : 2,
        email : "user2@gmail.com"
    },
    {
        id : 3,
        email : "user3@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))