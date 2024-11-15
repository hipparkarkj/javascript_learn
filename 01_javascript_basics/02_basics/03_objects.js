// singleton
// Object.creat

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kailas",
    "full name": "Kailas Hipparkar",
    [mySym]: "mykey1",
    age: 18,
    location: "Ratnagiri",
    email: "kailas@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kailas@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kailas@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
