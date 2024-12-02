let myName = "hitesh    "
let mychannel = "chai    "
 
console.log(myName.length);
console.log(mychannel.length);

let myHeros = ["thar", "spiderman"]

let heroPower = {
    thar: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kailas = function(){
    console.log(`kailas is present in all object`);
}

Array.prototype.heyKailas = function(){
    console.log(`kailas says hello`)
}

// heroPower.kailas()
// myHeros.kailas()
// myHeros.heyKailas()
// heroPower.heyKailas()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`);

}
anotherUsername.trueLength()
"hitesh          ".trueLength()
"icetea      ".trueLength()
