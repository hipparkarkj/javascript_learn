function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("i");
    console.log("l");
    console.log("a");
    console.log("s");

}

// sayMyName()

function addTwoNumbers( number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result:", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("kailas"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}