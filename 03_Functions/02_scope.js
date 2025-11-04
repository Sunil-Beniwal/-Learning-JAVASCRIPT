/********************Local And Global Scope in js******************************/
// concept definition: local scope means variable defined inside a block or function and global scope means variable defined outside any block or function. local scope variable can only be accessed inside that block or function. but global scope variable can be accessed anywhere in the code.
// var, let and const are used to declare variables in js. but var is function scoped and let and const are block scoped.
// example: lets take case of a block first.


let a = 300 //global scope
var c = 300
if (true) {
    let a = 10 //local scope
    const b = 20
    var c = 30
    // console.log("INNER: ", a); //local scope a=10
    
}

// console.log("outer: ", a); //global scope a=300
// console.log(b); //b is not defined here because it is in local scope
// console.log(c); //ouput: 30 because var is not block scoped. so in above block it overrides the global c variable.


//var would behave different in case of functions as var is a function scoped variable so any var defined inside function won't be acceccible outside function
var x = 100
function f1(){
    var x = 10
    var y = 20
    console.log("x: ",x)
}
// console.log(y); // we cannot access y outside function as var is function scope variable.
// console.log("x: ",x); // here we will get 100.
// f1() 


function one(){
    const username = "Sunil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error: website is not defined here as it is in local scope of function

     two()
}

// one()


if (true) {
    const username = "Sunil"
    if (username === "Sunil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error: website is not defined here as it is in local scope of if block
}

// console.log(username); //error: username is not defined here as it is in local scope of if block


// ++++++++++++++++++ hoisting ++++++++++++++++++


console.log(addone(5)) // we can call function before its declaration because of hoisting in js. function declaration is hoisted to the top of the scope. 
function addone(num){
    return num + 1
}


console.log(addTwo(5)) // we cannot call function before its declaration in this case because function expression is not hoisted. only variable declaration is hoisted but not its assignment. so here addTwo is undefined at the time of function call.
const addTwo = function(num){
    return num + 2
}