// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = "kailas"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:  "kailas@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kailas",
            lastname: "hipparkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj5 = {obj1, obj2, obj3}
const obj5 = Object.assign({},obj1, obj2, obj3)
// console.log(obj5)

const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
]
// users[1].email

//  console.log(users);
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser))
//  console.log(Object.values(tinderUser))
//  console.log(Object.entries(tinderUser))


// console.log(Object.keys(users))
// console.log(Object.values(users))
// console.log(Object.entries(users))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kailas"

}

// course.courseInstructor

const{courseInstructor: instructor} = course

console.log(course.courseInstructor);
console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]