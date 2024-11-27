
const promiseOne = new Promise(function(resolve, reject){
    // Do an asynk task
    // DB call, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)

})
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()

    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username: " chai", email: "chai@example.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "kailas", password: "123"})

        } else {
            reject('error: something went wrong')
        }
    },1000)
});
promiseFour.then((user) => {
    console.log(user);
    //console.log(user.username);
    return user.username
    
 }).then((username) => {
     console.log(username);
 }).catch(function(error){
    console.log(error);
 }).finally( ()=> console.log("the promise is either reolved or rejected"))

 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript", password: "123"})
        
        } else {
            reject('ERROR: JS went wrong')
        }

    },1000)
 });

 async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }
 consumePromiseFive()

//  async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
//  }

//  getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//promise.all

//yes this is also avilable, kuch reading aap b karo. ok i will do