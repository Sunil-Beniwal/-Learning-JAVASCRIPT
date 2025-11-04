//singleton object
// Object.create 


/******************object literal******************* */
//defining a sybol to use in object
const mySym = Symbol("key1") 
//**********************defining object using object literal
const myObj1 = {
    name: "Sunil",
    age: 22,
    email: "sunil@gmail.com",
    isAdult: true,
    hobbies: ["coding", "reading", "watching movies"],
    1: "value1", //key as number 
    [mySym]: "myKey1", //symbol as key is written in square brackets 
    // [mySym]: mySym, //symbol as key and also reffering to symbol as value which is defined above. this will show type as symbol.
    "key 5": "value5" //"key 5" is a valid key but to access it we have to use bracket notation.
}

// console.log(myObj1);

//***********************accessing object properties
// console.log(myObj1.name); //type1: dot notation
// console.log(myObj1["age"]); //type2: bracket notation
// console.log(myObj1[1]); //accessing key as number
// console.log(myObj1.1);  //invalid syntax

// console.log(myObj1[mySym]); //accessing symbol key
// console.log(typeof myObj1[mySym]);  // string because here you are using symbol as a key but storing string value in it.

// console.log(myObj1["key 5"]); //accessing key with space in it
// console.log(myObj1.key 5); //invalid syntax


myObj1.greeting = function(){
    console.log("Hello JS user");
}
myObj1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //using this keyword to access object property inside method
}

// console.log(myObj1.greeting);
// console.log(myObj1.greeting());
// console.log(myObj1.greetingTwo());

/*Note: why we are getting undefined as output also when we are calling greeting method?
because When you call console.log(myObj1.greeting());, the function myObj1.greeting() runs first and prints "Hello JS user" to the console.
however,The function has no return statement, so it returns undefined by default.
That undefined is then passed to the outer console.log(), which prints: undefined.
So, you see "Hello JS user" from inside the function and then "undefined" from the outer console.log().
To avoid this, you can call the function without wrapping it in console.log(), like this: myObj1.greeting();
*/

myObj1.greeting(); //calling method without console.log to avoid undefined output
myObj1.greetingTwo();

