// for of loop++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// defination: for-of loop is used to iterate over iterable objects like arrays, strings, maps, sets etc. 
// It provides a simpler and cleaner syntax to access each element directly without using an index.
//basically The for...of loop is used to iterate directly over the values of an iterable object.

// syntax:
// for (const element of iterable) {
//     // code block to be executed
// }

// example: for arrays*************
const fruits = ['apple', 'banana', 'mango', 'grapes', 'orange']; 

for (const fruit of fruits){
    // console.log(fruit); // direct access to elements.no need for fruits[i]
}


// example: for strings******************
const message = "Hello World";

for (const char of message){
    // console.log(char); // direct access to characters
}


// example: for sets (a set stores unique values)************************
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 6]); // duplicate 5 will be ignored
for (const number of uniqueNumbers){
    // console.log(number); // direct access to unique numbers
}


// example: for maps (a map stores key value pair)*********************
const numberMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
for (const [key, value] of numberMap){
    // console.log(`Key: ${key}, Value: ${value}`); // direct access to key-value pairs
}

// example 2 for map 
const user = new Map([
  ["name", "Sunil"],
  ["age", 22],
  ["country", "India"]
]);

for (const [key, value] of user) {
//   console.log(`${key} → ${value}`);
};

//for accesing only keys of map
// for (const key of user.keys()) console.log(key);

//for accesing only values of map
// for (const value of user.values()) console.log(value);



//example: for objects************************
// Note: for-of loop cannot be used directly on objects as they are not iterable.
// We can use Object.keys(), Object.values() or Object.entries() to iterate over object properties.
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
// console.log(person["age"]); //bracket notation of accesing object peroperties
 
// for(const per of person){
//     console.log(per); // This will throw an error as objects are not iterable
// }

for (const key of Object.keys(person)){ //iterating over array of keys
    // console.log(key); // access to keys    
}

for (const value of Object.values(person)){ //iterating over array of values
    // console.log(value); // access to values
}
for (const [key, value] of Object.entries(person)){ // access to key-value pairs
    // console.log(`Key: ${key}, Value: ${value}`); 
}

for (const key of Object.keys(person)){ 
    const value = person[key]; //bracket notation of accesing object peroperties
    // console.log(value);

}

/*Note: Better to use for-in loop for objects*/ 




//Maps and Sets (introduces in ES6)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//what is map? A map is a collection of key-value pairs similar to objects but with more power where keys can be of any data type. (unlike objects where keys are strings or symbols only)
//syntax to create a map: 
// const mapName = new Map([[key1, value1], [key2, value2], ...]);       

//different examples of maps:
// example 1: map of numbers :- new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
// example 2: map of strings :- new Map([['a', 'apple'], ['b', 'banana'], ['c', 'cherry']]);
// example 3: map of objects :- new Map([[{id: 1}, 'object1'], [{id: 2}, 'object2']]);
// example 4: map of mixed keys and values :- new Map([[1, 'one'], ['two', 2], [{id: 3}, true]]);
// example 5: empty map :- new Map();

// different methods of maps:
// set(key, value): Adds a new key-value pair to the Map.
// get(key): Returns the value associated with the specified key.   
// delete(key): Removes the specified key-value pair from the Map.
// has(key): Returns a boolean indicating whether a key exists in the Map.
// clear(): Removes all key-value pairs from the Map.
// size: A property that returns the number of key-value pairs in the Map.


// example of a map with all the map methods
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
// console.log(myMap);
// console.log(myMap.get('a')); // 1
// console.log(myMap.has('b')); // true
// console.log(myMap.size); // 3
// myMap.delete('a');
// console.log(myMap.size); // 2
// myMap.clear();
// console.log(myMap.size); // 0

//conversion between map and objects
const obj = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
// Convert Object to Map
const mapFromObj = new Map(Object.entries(obj)); // Using Object.entries() to get key-value pairs
console.log(mapFromObj); // Map(3) {'name' => 'Alice', 'age' => 30, 'city' => 'New York'}

// Convert Map back to Object
const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap); // {name: 'Alice', age: 30, city: 'New York'}



//sets+++++++++++++++++++++++++++++++++++++++++++
//what is set? A set is a collection of unique values. It can store any type of values, whether primitive or object references.
//different from arrays, sets do not allow duplicate values.

//syntax to create a set: const setName = new Set([value1, value2, value3, ...]);

//different examples of sets:
// example 1: set of numbers :- new Set([1, 2, 3, 4, 5]);
// example 2: set of strings :- new Set(['apple', 'banana', 'mango']);
// example 3: set of objects :- new Set([{name: 'John'}, {name: 'Jane'}]);
//example 4: set of mixed values :- new Set([1, 'apple', {name: 'John'}, true]);
//example 5: empty set :- new Set();

// different methods of sets:
// add(value): Adds a new element with the given value to the Set.
// delete(value): Removes the specified element from the Set.
// has(value): Returns a boolean indicating whether an element with the specified value exists in the Set.
// clear(): Removes all elements from the Set.
// size: A property that returns the number of elements in the Set.

// example of a set with all the set methods
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, will not be added
// console.log(mySet);

// console.log(mySet.has(2)); // true
// console.log(mySet.size); // 2
// mySet.delete(1);
// console.log(mySet.size); // 1
// mySet.clear();
// console.log(mySet.size); // 0


//conversion between set and arrays
const arr = [1, 2, 2, 3, 4, 4];
const set = new Set(arr); // Convert Array to Set to remove duplicates
console.log(set); // Set(4) {1, 2, 3, 4}

// Convert Set back to Array
const uniqueArr = [...set]; // Using spread operator to convert Set to Array
console.log(uniqueArr); // [1, 2, 3, 4]



