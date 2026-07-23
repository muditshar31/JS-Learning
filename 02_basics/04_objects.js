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

// console.log(regularUser.fullname) // { userfullname: { firstname: 'Mudit', lastname: 'Sharma' } }
// console.log(regularUser.fullname.userfullname) // { firstname: 'Mudit', lastname: 'Sharma' }
// console.log(regularUser.fullname.userfullname.firstname) // Mudit
// console.log(regularUser.fullname.userfullname.lastname) // Sharma

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: {5 : "e", 6 : "f"} }

/* Object.Assign method */
/* Assign is a static method that copies all properties from one or more source objects 
to a target object */
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

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

// console.log(users[1].email) // user2@gmail.com

// console.log(tinderUser) // { id: '123abc', name: 'sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // [ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true

/* De-Structuring of Object */

const course = {
    coursename : "JS Basics",
    price : 999,
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor : Instructor, coursename, price} = course

console.log(coursename)
console.log(price)
console.log(Instructor)

/* APIs in JSON format in form of Objects */

// {
//     "name" : "Hitesh",
//     "courseName" : "JS in Hindi",
//     "price" : "Free"
// }

// Sample API : https://api.github.com/users/hiteshchoudhary

/* APIs in form of Arrays */

[
    {},
    {},
    {}
]

// Sample API : https://randomuser.me/api/