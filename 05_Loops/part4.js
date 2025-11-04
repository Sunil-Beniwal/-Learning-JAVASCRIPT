//for-each loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-each loop is a method available on arrays, maps, and sets that allows you to iterate over their elements.
// It provides a more functional approach to iteration by accepting a callback function that is executed for each element in the collection.

//syntax:
// collection.forEach(callbackFunction);
// or
// collection.forEach(function(currentValue, index, array){  
//     // code to be executed for each element
// });

//example for arrays
const myarr = ["sunil", "sachin", "rahul"]  

//normal function used as callback
myarr.forEach(function (item){  
    // console.log(item);   
});


//arrow function used as callback
myarr.forEach((element, index, arr) => {  
    // console.log(`Element at index ${index} is ${element}`); 
    // console.log(arr); 
});


//using named function as callback
function printElements(item){
    console.log(item);
    
}
// myarr.forEach(printElements); //here we are passing the function reference without invoking it


const coding =[
    {
        language: "javascript",
        fileName: "js"
    },
    {
        language: "c++",
        fileName: "cpp"
    },
    {
        language: "python",
        fileName: "py"
    }
]

coding.forEach((item)=>{
    // console.log(item.language);
    // console.log(item);
})



//example for maps***********************************
const user = new Map([
  ["name", "Sunil"],
  ["age", 22],
  ["country", "India"]
]);
user.forEach((value, key) => {
    // console.log(`${key} : ${value}`);
});

//example for sets******************************************
const myset = new Set(["apple", "banana", "cherry"]);
myset.forEach((value) => {
    // console.log(value);
}); 

// Note 1: for-each loop is not available for objects. It is primarily designed for arrays, maps, and sets.
//note 2: for-each loop does not support break or continue statements. To achieve similar functionality, you may need to use other loop constructs like for-of or traditional for loops.
//note 3: for-each loop does not return anything. It always returns undefined. So, you cannot chain methods like .map() or .filter() after it.

// example for note 3
const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach((num) => {
    return  num * 2; // trying to return doubled values
}); 
// console.log(result); // undefined    


