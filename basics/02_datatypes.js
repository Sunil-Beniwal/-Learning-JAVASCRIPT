"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser. alert() is a browser-only function (part of the Web APIs). in node.js environment you will get ReferenceError: alert is not defined

let name = "Sunil"
let age = 24
let isLoggedIn = false
let state;

/*******************************different datatypes listed below********************/
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => If a variable is declared, but not assigned, then its value is undefined
// symbol => unique. The symbol type is used to create unique identifiers for objects.
// object => Above all were primitive datatypes but object is non primitive datatype.

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof 18n);
console.log(typeof undefined); // undefined
console.log(typeof null); // object


/***************Note Point 1****************************/
// x=10 //without use strict it will be a global variable but with use strict it will throw error. this is example of accidental globals.
// console.log(x);


/*************Note Point 2 example************************/
// console.table([name, age])
// age = "sunil"
// name = 5
// console.table([name, age])


/***********example of note point 3**********************/
// let firstName = "Rahul"
// console.log("Hello " + firstName)
// console.log(`Hellow ${firstName}`);
// console.log( `the result is ${1 + 2}` );


/*
********************************NOtes***********************
Point 1 :
"Use strcit"
"use strict" enables strict mode (introduced in ES5).
Prevents sloppy coding practices: no accidental globals, no duplicate params, no var redclaration in same scope,  catches silent errors,
Protects reserved keywords (for future use like class, enum, package, etc.)

Point 2: 
javascript is a dynamically typed language means there exist data types, but variables are not bound to any of them.We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
example: 
let message = "hello";
message = 123456;
let n = 123;
n = 12.345;

Point 3: Use of Backticks(` `)
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example: in code above

Point 4:
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.

Point 5:
The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
*/