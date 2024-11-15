// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([score,typeof score,scoreValue ,typeof scoreValue ,isLoggedIn ,typeof isLoggedIn,outsideTemp ,typeof outsideTemp ,id ,typeof id])
console.log(id == anotherId)

const bigNumber =34347687435468768413574n

// Referance (Non primitives)

// Arry, Objects, Functions

const heros = ["shaktiman", "naagraj" ,"doga"]
let myObj ={
    name: "kailas" ,
    age: 25

}
console.log(heros)
console.log(myObj)


