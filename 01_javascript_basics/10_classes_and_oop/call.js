function setUSername(username){
    //complex DB calls

    this.username = username
    console.log("called");
}   

function createUser(username, email, password){
    setUSername.call(this, username)

    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@123", "345")
console.log(chai);