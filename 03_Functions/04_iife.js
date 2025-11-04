//immediatly invoked function expression++++++++++++++++++++++++++++++++++++++++
// defination: It’s a function that runs immediately after it’s defined, without needing to be called separately.

//basic iife syntax
(function fn(){
    console.log("IIFE executed")
})();
//here we have wrapped function in parenthesis and it makes it a function expression. without parenthesis it will be treated as function declaration and will throw error becoz in that case js will treat it as function declaration and you cannot call function declaration immediatly like this.
//() at the end invokes the function immediately after its definition.

// fn(); // Uncaught ReferenceError: fn is not defined because fn is not accessible outside the iife scope. 

//iife with parameters
( (name)=> {
    console.log(`Hello, ${name}`)
})("Sunil");
// here we have passed "Sunil" as argument to the iife

//iife with return value
const result = (function(num1, num2){
    return num1 + num2
})(5, 10)
console.log(result); //15

/*Note1: we cannot excute more than one iffe without separating them with ;
like above we have executed three iifes but each one is separated by ; */

/*note2: variables and functions defined inside an iife are not accessible from the outside of that iife scope. this helps in avoiding polluting the global namespace and prevents variable name conflicts.
example we can see in first iife when we tried to call fn outside of iife we caught refrennce error that fn is not defined*/

/*IIFEs run immediately — you can’t call them again later.*/

/* so iife are useful in three main scenarios:
1. Avoiding global scope pollution by creating a private scope
2. Initializing code that only needs to run once at the start of a program.
3. iife can be used to create a module pattern, means a self contained block encapsulating related functionality and exposing only specific parts to the outside world.
*/

//lets see example of every use case one by one

//1. Avoiding global scope pollution
(function(){
    const privateVar = "I am private";
    function privateFunction(){
        console.log("I am private function");
    }
    console.log(privateVar);
    privateFunction();
})();
//console.log(privateVar); // Uncaught ReferenceError: privateVar is not defined
//privateFunction(); // Uncaught ReferenceError: privateFunction is not defined

//2. Initializing code that only needs to run once at the start of a program
(function() {
  console.log("Initializing app...");
  // some setup logic
})();

//3. Module pattern
const counterModule = (function(){
    let count = 0;
    
    return {
        increament: function(){
            count++
        },
        getcount: function(){
            console.log(count);
            
        }
    }
})()

counterModule.increament();
counterModule.getcount();

counterModule.increament();
counterModule.getcount();

