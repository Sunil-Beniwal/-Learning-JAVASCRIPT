let score = "10";

// console.log(typeof score)
// console.log(typeof(score))

/********Conversion to number******************/
//Numeric conversion in mathematical functions and expressions happens automatically.
let isNumber = Number(score);
// console.log(typeof isNumber);
// console.log(isNumber); 
/* Note
 output is 10 for "10"; 123 for " 123  "; NaN for "10a"; 0 for null; NaN for undefined; 0 for ""; 1/0 for true/false 
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
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
/* Note
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
"0" => true; 
"" => false; but " "(non empty string) => true;
*/


/******************************************OPERATIONS***********************************************/
let value = 10
let negValue = -value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //2raise to the power 3
// console.log(2/3)
// console.log(2%3) 

let str1 = "sunil"
let str2 =" Beniwal"
let str3 = str1 + str2
// console.log(str3);

// Note that if any of the operands is a string, then the other one is converted to a string too.
// console.log("1"+2); //12
// console.log(1+"2"); //12

// console.log(2+2+"1"); //41 not 221. 
// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
// console.log("1"+2+2); //122 not 14.
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

/* Note
The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
Here’s the demo for subtraction and division 
*/
// console.log( 6 - '2' ); // 4, converts '2' to a number
// console.log( '6' / '2' ); // 3, converts both operands to numbers


// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number. example bewlow
// console.log(+true);
// console.log(+"");


let x = 3;
const y = x++; //postfix increamenet
// console.log(`x:${x}, y:${y}`);

let a = 3; 
const b = ++a; //prefix increament
// console.log(`a:${a}, b:${b}`);

/*
Note: Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
*/





