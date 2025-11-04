//Function is a block of reusable code intended to perform a particular task. 

//Basic function syntax
function greet(){
    console.log("Hellow Sunil"); 
}
// greet(); //function call or invoking a function


//function with parameters
function greetUser(name, lastName){ //name and lastName are parameters
    console.log(`Hellow ${name} ${lastName}`); 
}
// greetUser("Sunil", "Beniwal"); //"Sunil" and "Beniwal" are arguments
// let output = greetUser("Rahul", "Joshi")
// console.log(output); //undefined because function has no return statement


/*Note 1: Functions without a return statement return undefined. so if you console.log() ouput of such function you will also get undefined in output. You can avoid this by not assigning function call to any variable or directly calling the function.

Note 2: You can pass any data type inside function: number, string, array, object, etc. 
*/


//function with return statement
function sum(a=10, b=5){ //we can set default values to parameters like this. 
    // let result = a + b;
    // return result; 
    // or we can directly
    return a + b; 
}
let result = sum(10, 20) 
// console.log(result); //30
// console.log(sum()); //15 because default values will be used here


// function loginUserMessage(username){
//     return `User ${username} just logged in`;
// }
// console.log(loginUserMessage()); //output: User undefined just logged in. // because we have not passed any argument so username parameter is undefined here.

//to avoid above undefined issue we can use below method
function loginUserMessage(username){
    if(!username){ // here we can also use if(username === undefined) or if(username === null)
        console.log(`please enter your username`); 
        return; 
    }
    return `User ${username} just logged in`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Rahul"));
 


// ********************************use of rest operator in function parameters.
//  we use rest operator when we are not sure how many arguments will be passed in function call.

function printNums(...numbers){ //... used for rest operator
    console.log(numbers); // 
}
// printNums(10, 20, 30, 40, 50); // we can pass any number of arguments here. rest operator will combine all arguments into an array.
// printNums(10, 20);

function calculateCartPrice(val1, val2, ...rest){
    // return val1, val2, rest; //invalid syntax, only last value will be returned. 
    //return {val1, val2, rest}; //valid syntax, we can return object like this. or also we can return array like [val1, val2, rest]

    //now lets write main login of our function
    let totalPrice=val1 + val2;
    for(let price of rest){
        totalPrice += price
    }
    return totalPrice;
    
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) //output: [ 500, 2000 ] // first two values will be assigned to val1 and val2 parameters rest values will be combined into an array and assigned to rest parameter.



/*********************functions with objects and array**************************/
const user ={
    name: "Sunil",
    age: 24
}

function handelObject(object){
    console.log(`User name is ${object.name} and age is ${object.age}`)
}

// handelObject(user);
// handelObject({name:"Rahul", age:25}); //passing object directly as an argument



const arr1 = [100,200,300,400]

function handelArray(arr){
    // console.log(`first value of array is:`)
    // return arr[0]
    return `first value of array is: ${arr[0]}`
}

console.log(handelArray(arr1))
console.log(handelArray([20,30,40,60]))