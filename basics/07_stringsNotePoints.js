// Point 1: Strings in js can be enclosed in double quotes(" ")/single quotes('')/ or backticks(``)
const firstName = "Sunil"
const lastName = 'Beniwal'
const fullName = `Sunil Kumar Beniwal` // Backticks (Template literals - ES6 feature)

// console.log(fullName);


// Point 2: In JavaScript, the textual data is stored as strings. There is no separate type for a single character.


// Point 3: Strings in Single and double quotes are essentially the same. Backticks, however, allow us to embed Variables or any expression into the string, by wrapping it in ${…}. Like in above example we can write full name also like below by embedding firstName and lastName variables.
const fullName1 = `Mr. ${firstName} Kumar ${lastName}` // Template literals (ES6 feature).
// console.log(fullName1);
// console.log(`The sum of 2 and 3 is ${2 + 3}`); // Output: We can embedd directly expressions also in backticks. 


// Point 4: Strings are immutable (cannot be changed). Any operation on a string creates a new string.
/*let str = "Hello"
str[0] = "h" // This will not change the string
console.log(str); // Output: Hello
str = "Hi" //This will create a new  "Hi" and reassign the variable str to it. The old string "Hello" still exists in memory, but since no variable points to it anymore, it will eventually be garbage collected.
console.log(str);
*/


/* Point 5: Template Literals: template literals in JavaScript are strings written inside backticks (`). They give us extra superpowers compared to regular strings (single or double quoted). They allow us to:
> Embed variables and expressions directly inside the string using ${...}. We have seen in point 3.
> Write multi-line strings easily.
> Use string interpolation (mixing text + values).
So template literals are also like other string literals but with extra features. here they act like a template with placeholders (${...}) that can be filled dynamically.
*/
// Example of multi-line string using template literals
/*let str1 = "Line1\nLine2" // Using \n for new line in single/double quotes
let str2 = `Line1
Line2
Line3` // Using backticks for multi-line string
console.log(str1);
console.log(str2);
*/

// String interpolation: it means inserting values (variables, expressions, or function results) into a string.Instead of manually concatenating strings with +, interpolation lets you embed them directly inside the string.
let name = "Sunil";
let age = 25;
let str = "My name is " + name + " and I am " + age + " years old."; //without interpolation using cancatenation
// console.log(str);
let str1 = `My name is ${name} and I am ${age} years old.`; //with interpolation using template literals
// console.log(str1);


// Point 6: Tagged template: A tagged template is a special form of template literal where you attach a function (called a tag function) to a template literal.Instead of producing a string directly, the template literal is passed to the function, and the function decides what to do with it. advanvce topic seen rarely so no need to learn example. just know what is it.


// Point 7: Escape character (\): The backslash (\) is used as an escape character in strings. It allows you to include special characters( like ", ', \ itself) in a string that would otherwise be difficult or impossible to type directly.
let exampleStr = "He said, \"It's a beautiful day!\""; // Using \" to include double quotes inside double-quoted string
let exampleStr1 = "I\'m Sunil."; // Using \' to include single quote inside single-quoted string
let exampleStr3 = `This is a backslash: \\`;//  To include a backslash itself in a string, you need to escape it with another backslash (\\).

// console.log(exampleStr);
// console.log(exampleStr1);
// console.log(exampleStr3); 


// Point 8: We can create string as primitive type or as string object using String constructor. in both cases typeof will be different. 
let s1 = "hello";            // primitive
let s2 = new String("hello"); // object

console.log(s1 === s2); // false (different types)
console.log(typeof s1); // "string"
console.log(typeof s2); // "object"

