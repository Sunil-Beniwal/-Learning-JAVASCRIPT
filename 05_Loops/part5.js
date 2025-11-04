//filter, map and reduce methods :- these are higher-order functions that operate on arrays. They take a callback function as an argument and apply it to each element of the array to produce a new array or a single value.

//filter method+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The filter() method creates a new array with all elements that pass the test(return true in the callback). implemented by the provided function.

//syntax:
// const newArray = array.filter((element, index, array) => {
//   return condition;
// });

// example 1
const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter((num)=> num>5);

const newNums = nums.filter((num)=> {
    return num>5
});

// console.log(newNums);

// example 2
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 2001, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 1999, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//we want the array of books whose genre is history
let newBooks = books.filter( (book) => book.genre ==="History")

//now we want books which were published after 2000 and were fiction genre
newBooks = books.filter( (book) => {
    return book.publish>=2000 && book.genre ==="Fiction"
})

// console.log(newBooks);

// note 1: filter method does not change the original array. It returns a new array.
// note 2: filter() keeps only elements that return true in the callback.
//note 3: filter() method can be used with arrays only. It is not available for objects, maps, and sets.





// map method+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Creates a new array by transforming each element of the original array.

// syntax:
// const newArray = array.map((element, index, array) => {
//     return transformedElement;
// });
//Note: The callback must return something — that’s what gets placed in the new array. If it doesn’t return anything, undefined will be placed in the new array.

// example 1
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNumbers = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNumbers);

// example 2
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);
// console.log(squares); // [1, 4, 9, 16]

//note 1: map method does not change the original array. It returns a new array of same length as the original array.
//note 2: map() method can be used with arrays only. It is not available for objects, maps, and sets.
//note 3: map() method is used when we want to transform each element of the array and create a new array with the transformed elements.



// reduce method++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// syntax:
// const result = array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
// }, initialValue of accumulator);

// example 1 : finding the sum of array elements
const arr = [1,2,3,4,5];

// const total = arr.reduce(function (acc, curr){
//     console.log(`accumulates: ${acc} and current value: ${curr}`);
//     return acc + curr;
// },0)

const total = arr.reduce( (acc, curr) => acc+curr, 0)

console.log(total);


//example 2: calculating shopping cart total price
const course = [
    {
        course: "js",
        price: 1999
    },

    {
        course: "React.js",
        price: 2300
    },
    {
        course: "Node",
        price: 2999
    }
]

const cartPrice = course.reduce( (acc, curr) => acc + curr.price, 0)

console.log(cartPrice);

// note 1: reduce method does not change the original array. It returns a single value(single value can be of any type number, string, object, array, boolean etc).
// note 2: reduce() method can be used with arrays only. It is not available for objects, maps, and sets.
// note 3: reduce() method is used when we want to derive a single value from an array, such as sum, product, maximum, minimum, etc.
// note 4: The initial value of the accumulator is optional. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.
// note 5: If the array is empty and no initial value is provided, a TypeError will be thrown. But if an initial value is provided, that value will be returned as the result.
// note 6: The currentValue is the current element being processed in the array.

//example of note5: 
// const emptyArray = [];

// const result = emptyArray.reduce( (acc, curr) => acc + curr); 
// console.log(result);

//practical example: counting instances of values in an object
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce( (acc, curr) => {
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {})

// console.log(fruitCount);  //output: { apple: 3, banana: 2, orange: 2 }

//another practical example: grouping objects by a property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 30 }
];

//objective: group people by age. output should be an object where keys are ages and values are arrays of people with that age.
// output should be like this:
// {
//     21: [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
//     25: [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ],
//     30: [ { name: 'Eve', age: 30 } ]
// }

const peopleByAge = people.reduce( (acc, curr) => {
    if(acc[curr.age]){
        // acc[curr.age] = acc[curr.age].push(curr) //returns the new length of the array after push because push method returns the length of the array after adding the new element.
        acc[curr.age].push(curr) // correct way this simply pushes the curr object into the array at acc[curr.age]
    } else{
        acc[curr.age] = [curr]
    }
    return acc;
},{})

// console.log(peopleByAge);



//combining map, filter and reduce methods++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// prcatical example: here we have an array of products with their prices and we want to calculate the total price of products that are above a certain price after applying a discount.
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 },
    { name: 'Product 4', price: 400 },
];
const discount = 0.1; // 10% discount
const priceThreshold = 250;
const totalPrice = products
    .map( (product) => {
        return {
            name: product.name,
            price: product.price - (product.price * discount)
        }
    })
    .filter( (product) => product.price > priceThreshold)
    .reduce( (acc, curr) => acc + curr.price, 0)

console.log(totalPrice);