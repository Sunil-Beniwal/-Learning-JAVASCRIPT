function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);

/* whats is happening here? So new keyword  will create a new object { }. and now inside createUser, this will refer to that newly created object and at the end returns that object. this much we know. 

Why Use .call() Here? Because SetUsername is a separate utility function, but we want to reuse it inside createUser,and we want the this value of setUsername to be the object created in createUser. If you simply wrote:
 SetUsername(username)
 this inside SetUsername would NOT refer to the new object → it would be undefined (in strict mode). and in non strict mode it will refer to global object (window in case of browser so you will accidentally create a global variable window.username = "chai").

Without call, SetUsername() would have its own this. But .call(this, username) means: "Run SetUsername and attach its properties to THIS object". So inside SetUsername, this refers to the same object created inside createUser.

Also we cannot write SetUsername.call( username) because in this case this inside setUsername will refer to a string Username i.e. "chai". so username will not be stored anywhere. */



/*************************.Call()******************************** */
// .call() is a method available on every function in JavaScript. It allows to manually set the value of 'this' for a function call. and passaruguments one by one.
// Syntax:
// functionName.call(thisValue, arg1, arg2, arg3, ...)
// Key Idea: call() = “Hey function, use THIS object as your this.”

// example+++++++++++
function sayHi() {
  console.log("Hi " + this.name);
}

// const person = { name: "Sunil" };

// sayHi.call(person); // 👉 this becomes 'person'



//example with multiple arguments++++++++++++++
function introduce(city, hobby) {
    this.city = city;
    this.hobby = hobby
    console.log(this.name, city, hobby);
}

const person = { name: "Chichi" };

// introduce.call(person, "Delhi", "Coding");
// console.log(person);


//example 3 construtor borrowing 
// function SetUsername(username) {
//   this.username = username;
// }

// function CreateUser(username, email) {
//   SetUsername.call(this, username);  // borrow SetUsername
//   this.email = email;
// }
//SetUsername writes username into the CreateUser object
