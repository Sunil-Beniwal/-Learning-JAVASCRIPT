let score = "10";

// console.log(typeof score)
// console.log(typeof(score))

/********Conversion to number******************/
let isNumber = Number(score);
// console.log(typeof isNumber);
// console.log(isNumber); 
/* Note
 output is 10 for "10"; NaN for "10a"; 0 for null; NaN for undefined; 0 for " "; 1/0 for true/false 
*/


/**********Conversion to string*************/
let number = 10;
let isString = String(number);
// console.log(typeof isString);
// console.log(isString);
/* Note
 output is 10 for 10; null for null; undefined for undefined; true/false for true/false 
*/


/**********Conversion to boolean*************/
let isLoggedIn = "sunil";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
/* Note
 output is true for "Sunil"; false for ""; false for null; false for undefined; 
*/




