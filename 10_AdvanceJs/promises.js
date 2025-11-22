const promiseOne = new Promise(function(resolve, reject){
    // Async code
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task completed")
        resolve() // to connect with .then()
    },1000)
})

promiseOne.then(function(){
    console.log("promise resolved");   
})

//we can create promise directly and call .then() on promise directly 
new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async Task 2 completed")
        resolve() // to connect with .then()
    },1000)
}).then(function(){
    console.log("promise 2 resolved");   
})


//lets see how to use parameters and retuurn data+++++++++++++++++
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Sunil", pass: "@123"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){  //chaining 
    console.log(username);   
})

//.then(), .catch() and .finally()+++++++++++++++++
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Sunil Beniwal", pass: "@123"})
        }else{
            reject("Some Error detected")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);   
}).finally(() => console.log("The promise is either resolved or rejected")
)


// promise consume using Async await+++++++++++++++++++++++
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Rahul", pass: "@890"})
        }else{
            reject("Some Error detected")
        }
    },1000)
})

async function consumePromiseFive() {

    try {
        const response = await promiseFive; //await here is used to wait for the setTimeOut() to complete its execution.
        console.log(response);  
    } catch (error) {
        console.log(error);
        
    }    
}
consumePromiseFive()

// using async await on getting data through api request+++++++++++++++++++++
// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()  
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }   
// }

// getAllUsers()
 
// simpler solution for the above problem+++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Note: fetch() data will be printed before setTimeout() data because of mircotask queue(or high priority queue).

/* Note: .json() converts the raw response(JSON text) into javascript value. the value can be an object, array, string or even number. it depends on what server is sending.

Note: difference between .json() and JSON.parse() 
    Note: response.json() is used with fetch().
    It reads the response body (a stream), converts it into text, 
    and then parses that JSON text into a JavaScript value.

    JSON.parse() only parses a JSON string that you already have.
    It does NOT read streams or responses — it requires a plain string.

*/