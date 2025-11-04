// for-in loop++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-in loop is used to iterate over the enumerable properties of an object. 
// It provides access to the keys (property names) of the object, which can then be used to access the corresponding values.
// enumerable properties are those properties that can be iterated over using a for-in loop.

//example for objects
const myobj ={
    js : "javascript",
    cpp: "C++",
    py: "python"
}

for (const key in myobj) {
    // console.log(key);        // access to keys
}
for (const key in myobj) {
    // console.log(myobj[key]);    // access to values using bracket notation
}
for (const key in myobj) {
    // console.log(`${key} is shortcut for ${myobj[key]}`);    // access to values using bracket notation
}


//example for arrays
const myarr = ["sunil", "sachin", "rahul"]

for(const key in myarr){
    // console.log(key);    // prints keys that is array indexes
}
for(const key in myarr){
    // console.log(myarr[key]);    //access to array elements
}


//example for maps
const user = new Map([
  ["name", "Sunil"],
  ["age", 22],
  ["country", "India"]
]);

for(const key in user){
    console.log(key); // Maps are not directly iterable using for-in loop   
}

//example for sets
const myset = new Set(["apple", "banana", "cherry"]);
for(const key in myset){
    console.log(key); // Sets are not directly iterable using for-in loop   
}

// Note: for-in loop is not recommended for arrays, maps, and sets as it may lead to unexpected results.
// It is primarily designed for iterating over object properties.
//note: for-in loop is not available for maps and sets. It is primarily designed for objects.
//note: for-in loop can be used with arrays but it is not recommended. for-of or forEach loop is preferred for arrays.