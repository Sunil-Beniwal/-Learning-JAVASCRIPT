const name = "Sunil"
const age = 24
// console.log(typeof name)
// console.log(name);

// console.log("Name: "+name + ",age: "+age); //String concatenation using +
// console.log(`Hellow my name is ${name}. My age is ${age}`); //template literal. Better way and preferred.

const myName = new String('Sunil-kumar-beniwal')
// console.log(typeof myName) //object
// console.log(myName);

/***************string property .length for finding length of string**********/

// console.log(name.length);
// console.log(myName.length);


/**************Accessing prototype of object*****************/
// console.log(name.__proto__);
// console.log(myName.__proto__); //returns the prototype object of myName, which is String.prototype.
// shows the object where myName’s string methods (like .toUpperCase(), .slice(), etc.) are stored.
// console.log(Object.getOwnPropertyNames(myName.__proto__)); //// returns all own property names (methods + properties) of String.prototype

// Note: using direct .__proto__ is deprecated and not recommended to use in modern js. Instead,we use Object.getPrototypeOf() to safely access an object's prototype.
// console.log(Object.getPrototypeOf(myName))
// console.log(Object.getPrototypeOf(myName)===String.prototype) //verifying its a String.prototype
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(myName)))


/********************************String Methods *************************************/

/*******finding the character at a given position And indexof any character in the string************/

// console.log(name[0]);

// console.log(myName[1]);
// console.log(typeof myName[1]);

// console.log(myName.charAt(6)); //return the character at index 5.
// console.log(myName.charAt(2));

// console.log(myName.indexOf("i")); //return the index of first occurence of i in myName
// console.log(myName.indexOf("-")); //return the index of first occurence of - in myName

/********************Case Conversion*********************/
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


/************************searching************************/
// console.log(myName.indexOf("kumar"));
// console.log(myName.lastIndexOf("i"));

// console.log(myName.includes("ar")); //checks for case sensitive substring. returns true/false.
// console.log(myName.includes("Ar"));
// console.log(myName.includes("")); //return true for empty string search
// console.log(myName.includes("il", 6)); // 2nd parameter is position from where search should begin.deafult is 0

// console.log(myName.startsWith("Sun")); //check if the myName string starts with given string
// console.log(myName.startsWith("sun")); //false, case sensitive
// console.log(myName.startsWith("il", 3)); //postion from which strat would be checked
// console.log(myName.endsWith("al")); //check for end part
// console.log(myName.endsWith("beniw", 17)); //position of end point of string


/*********************Extracting parts of string**************/
let str = new String("I am learning Javascript")

// console.log(str.substring(4)); //for one parameter start extraxting from this position till end. include space as it is at index 4.
// console.log(str.substring(0, 8)); //two parameters means start from index 0 and ends at index 8(8 is not included)
// console.log(str.substring(6,0)); // swaps index in such case where startindex > endIndex
// console.log(str.substring(-2,4)); // don't take neg values so treats negative values as index 0.


console.log(str.slice(1));
console.log(str.slice(2,6)); //indexend is not included in extrated string
console.log(str.slice(6,2)); //if startindex > endIndex, returns empty string
console.log(str.slice(-10,-2)); //for negative values checks from end of string



const newString3 = "   Sunil    "
// console.log(newString3);
// console.log(newString3.trim());

// console.log(myName.split('-'));

const url = "https://sunil.com/sunil%20beniwal"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('sundar'))

