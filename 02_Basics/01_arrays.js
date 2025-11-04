const myArr = [0,1,2,3,4,5]
const myArr1 = ["Sunil", "Rahul", "Ashit"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr)
// console.log(myArr1)
// console.log(myArr2)

// console.log(myArr1[1]);


/********************************Array methods***********************************/
//finding length of array
// console.log(myArr.length);

//finding last element of array
// console.log(myArr[myArr.length - 1]);

//we can use .at() method also.
// console.log(myArr.at(-1)); //gives last element of array

/* Note:  arr.at(i):
    is exactly the same as arr[i], if i >= 0.
    for negative values of i, it steps back from the end of the array.
*/

// myArr.push(6) //adds 6 at end inside array
// myArr.push(7)
// myArr.pop() //removes last element from array
// console.log(myArr)


// myArr.unshift(8) //adds 8 from front
// myArr.shift() // remove first element from array
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(2));


const newArr = myArr.join() //make string of array elements separated by comma
const newArr1 = myArr.join(" | ") //make string of array elements separated by |
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)
// console.log(newArr1)


/*****************difference between slice() and splice()***************/

const array1 = [1,2,3,4,5,6]
// console.log(array1);

const newArray1 = array1.slice(1,3)
// console.log(newArray1); 
// console.log(array1); //doesnot change original array

const newArray2 = array1.splice(1,3)
// console.log(newArray2);
// console.log(array1); // changes original array

/* Note 1: difference between slice and splice are - 
    1) slice doesnot include end index of the boundary but splice does.
    2) slice doesnot modify original array but splice modifies original array.
*/


/**********************combining arrays*****************************************/
const bollywood_heros = ["Akshay Kumar", "Salman Khan", "Sunny Deol"]
const tollywood_heros = ["Nani", "Prabhas", "Allu Arjun"]

// bollywood_heros.push(tollywood_heros) 
// console.log(bollywood_heros); // output: ["Akshay Kumar", "Salman Khan", "Sunny Deol", ["Nani", "Prabhas", "Allu Arjun"]]
//console.log(bollywood_heros[3][1]); //output: Prabhas

// const all_heros = bollywood_heros.concat(tollywood_heros)
// console.log(all_heros); //output: ["Akshay Kumar", "Salman Khan", "Sunny Deol", "Nani", "Prabhas", "Allu Arjun"]

const all_heros1 = [...bollywood_heros, ...tollywood_heros] //spread operator
// console.log(all_heros1); //output: ["Akshay Kumar", "Salman Khan", "Sunny Deol", "Nani", "Prabhas", "Allu Arjun"]

const another_array = [1,2,...[3,4,5],6]
// console.log(another_array); //output: [1, 2, 3, 4, 5, 6]

const another_array1 = [1,2,[3,4,5],6,[7,8,[1,2]],6] //array inside array upto 2 depths.
// console.log(another_array1.flat()); //default depth of flat is 1
// console.log(another_array1.flat(2)); 
// console.log(another_array1.flat(Infinity)); //output: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 6] //flat method flattens the array. Infinity means flattening to any depth.

const usable_array = another_array1.flat(Infinity);
// console.log(usable_array);



// console.log(Array.isArray(usable_array)); //output: true //to check if variable is array or not
// console.log(Array.isArray("Sunil")); //output: false

// console.log(Array.from("Sunil")); //output: ['S', 'u', 'n', 'i', 'l'] //Array.from() creates array from iterable objects like string.
// console.log(Array.from(12345)); //output: [] //Array.from() only works on iterable objects like string. Number is not iterable.
// console.log(Array.from({name: "Sunil"})); //output: [] empty array because we havenot specified to make array from keys or values of object.


let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3)); //array.of() creates array from the arguments passed.
// console.log(Array.of(1,2,3,4,5)); //output: [1, 2, 3, 4, 5]
// console.log(Array.of({name: "Sunil"}, {name: "Rahul"}, {name: "Ashit"})); 

