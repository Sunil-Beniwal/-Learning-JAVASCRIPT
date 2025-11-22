/**************** what is .bind()****************************************************************

=============dEFINATION==================
.bind() is a method available on every function in JavaScript. It creates a new function whose this is permanently fixed to the value we provide.
Syntax:
const newFn = originalFn.bind(thisValue, arg1, arg2, ...);
- Does NOT execute originalFn immediately
- Returns a NEW function

===============key Points==================
-> .bind() is used when a function will be called later (e.g., event listener, callbacks, settimeout)
-> It ensures the function gets the correct this, no matter who calls it.
--> *important*
    every time tou call a .bind() on any function, it returns a new function
    means: func1.bind(this) !== func1
    also func1.bind(this) !==func1.bind(this)
    Each .bind() call creates a brand-new function with a fixed 'this'.

*********/


// ===========Examples===================
const user = {
name: "Sunil",
greet() {
console.log("Hello, " + this.name);
}
};

const greetFunction = user.greet; // 'this' is lost
// greetFunction(); // Would output: Hello, undefined

const boundGreet = user.greet.bind(user);
boundGreet(); // Outputs: Hello, Sunil

//==========callback example=============
const person = {
name: "Chichi",
sayName() {
console.log(this.name);
}
};


function callLater(callback) {
setTimeout(callback, 1000); // callback loses 'this'
}


callLater(person.sayName.bind(person)); // Correct
// Without bind, output would be undefined

// ==============.call() vs .bind()====================================
// .call(): Sets 'this' and executes the function immediately.
//          Use when you want to run the function right now with a specific 'this'.

// .bind(): Sets 'this' but does NOT execute the function.
//          Returns a new function with permanently fixed 'this'.
//          Use for event listeners, callbacks, or when the function will run later.
