const score = 10;
// console.log(score);

const Number1 = new Number(100) //explicitly defines the datatype of 100 is number. this creates a number object

// console.log(Number1);
// console.log(Number1.toString().length); //Converts number to string ("100") and then gives length (3).
// console.log(Number1.toFixed(2)); //Gives number with 2 decimal places (e.g., "100.00").

const Number2 = 22.754

// console.log(Number2.toPrecision(2)); //toPrecision(n) sets total number of significant digits, not decimal places.
// console.log(Number2.toPrecision(3));

const Number3 = 1000000

// console.log(Number3.toLocaleString('en-US'));
// console.log(Number3.toLocaleString('en-IN'));



/************************************Maths*********************************************** */
// console.log(Math); //Math is a js library object which contains various properties and methods which we can use directly.

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1)); //round off to upper number
// console.log(Math.ceil(-4.1));
// console.log(Math.floor(4.9));//round off to lower number
// console.log(Math.floor(-4.9));

// Math.pow(2, 3); // 8
// Math.sqrt(25);  // 5

// console.log(Math.min(12,50,30,5)); //gives minimum value of given list of arguments
// console.log(Math.max(12,50,30,5)); //gives max of given values
// console.log(Math.min(...[12,50,30,5])); //we can also give array as argument using spread operator
// console.log(Math.max(...[12,50,30,5]));


// console.log(Math.random()); //gives any random float number between 0 and 1
// console.log((Math.random()*10) + 1); //this gives us float number between 1 and 11(not 11)
// console.log(Math.floor(Math.random()*10) + 1); //this gives us integer number between 1 and 10 (inclusive of both)

min = 10
max = 20

// lets say we want any random number between 10 and 20 inclusive both then we can have like this
console.log(Math.floor(Math.random()*(max-min + 1)) + min); //learn thius formula. important


