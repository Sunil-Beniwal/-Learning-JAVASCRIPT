/****
In JavaScript, many values such as arrays, functions, and objects are actual objects.
Primitive values like strings or numbers are not objects, but JavaScript gives them 
temporary wrapper objects so they can use methods.

Whenever we access a property or method on an object, JavaScript looks for it on that 
object first. If it is not found there, JavaScript searches its prototype, then the 
prototype of that prototype, and so on, until it reaches Object.prototype. At the end 
of the chain is null.

For example, when we use an array method, JavaScript checks the array itself, then 
Array.prototype, and then Object.prototype.

All objects eventually inherit from Object.prototype. This prototype chain mechanism 
is called prototypal inheritance. 
****/

// so if we place a method inside Object.prototype which is top of almost every prototype chain in JavaScript.then: every object, every array, every function, every instance of any constructor will inherit that method. Even every Strings will inherit that method due to wrapper object by js on strings(while accessing properties or methods). here.s one example

let myString = "Sunil"  

let myHeros = ["Krishh", "Minnal Murali"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
}

//setting a sunil() method at top level i.e inside object.prototype
Object.prototype.sunil = function(){
    console.log(`Sunil is present in all objects`);
}

// heroPower.sunil() // chain goes from heroPower → Object.prototype → null

// myHeros.sunil() // prototype chain: myHeros → Array.prototype → Object.prototype → null

// myString.sunil() // prototype chain: String.prototype → Object.prototype → null


// now let's say we define another method on array.prototype++++++++++++++++++++++++++++
Array.prototype.heySunil = function(){
    console.log(`Sunil says hello`);
}

// myHeros.heySunil() //Sunil says hello
// heroPower.heySunil() //error: heySunil function is not defined.

//note: this time we defined method inside array.prototype so only arrays will have access to these. trying to access this on object or string will thorugh error because js will not find that in their prototype chain.




/**************Inheritance*************************************** */
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// Object.setPrototypeOf(TeachingSupport, Teacher) // we have set teacher as prototype of Teaching staff


/*************example********************************/
// we want a method trueLength() on all strngs where we get actual length of all string after trimming.

let username = "   Sunil   "
console.log(username.length); //8 

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Actual length of string is: ${this.trim().length}`);
       
}
username.trueLength()
"Rahul Joshi".trueLength()
