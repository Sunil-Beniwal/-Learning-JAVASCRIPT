//this keyword in js********************************************
//this refers to the current context object. The value of this depends on where it is used.

// console.log(this); //in global context, this refers to the global object (Window in browsers, empty object in node)

const obj = {
    name: "Sunil",
    email: `123@gmail.com`,
    greet: function(){
        console.log(`Welcome! ${this.name}`); //in a method, this refers to the object that owns the method
        console.log(this); //here this will refer to obj
    }
    
}
// obj.greet()
// obj.name = "John"
// obj.greet()

function f1(){
    let username = "Sunil"
    console.log(this.username) // undefined
    console.log(this); //in a regular function, this refers to the global object (Window in browsers, global in node)
}
// f1()

const f2 = function(){
    let username = "Sunil"
    console.log(this.username) //undefined as this refers to global object and username is not defined in global scope
    console.log(this) // global object will be printed
    
}
// f2()

const f3 = () =>{
    let username = "Sunil"
    console.log(this.username) //undefined
    console.log(this) //empty object in node as arrow functions do not have their own this. they inherit this from the surrounding lexical context.
}
// f3()


// +++++++++++++++++++++++++++++++++++++ arrow functions ++++++++++++++++++++++++++++
// Arrow functions provide a concise syntax to write functions in JavaScript. They also lexically bind the this value, meaning they inherit this from the surrounding context.

//arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(5, 10)); //15

//implicit return in arrow function
const subtract = (num1, num2) => num1-num2 // no need to use return statement and {} 
// console.log(subtract(10,5));

// or we can write like this
const multiply = (num1, num2) => (num1*num2)
// console.log(multiply(10,5));

// in case of returning object we need to use () for implicit return
const myfn = () => ({name:"Sunil"})
// console.log(myfn());


//arrow function with single parameter
const square = num => num * num
// console.log(square(5)); //25

//arrow function with no parameter
const greet = () => console.log("Hello, welcome to arrow functions!")
// greet()
