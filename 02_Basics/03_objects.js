const tinderUser = new Object(); //object constructor syntax/ singleton object
// console.log(tinderUser); //prints empty object

//or
const tinderUser1 = {}; //object literal syntax / non-singleton object
tinderUser1.id = "123abc";
tinderUser1.name = "sunil";
tinderUser1.isLoggedIn = false;

// console.log(tinderUser1);

/****************important methods to access keys and values of object separately**************************/
// console.log(Object.keys(tinderUser1)); //prints all keys of object in array
// console.log(Object.values(tinderUser1)); //prints all values of object in array
// console.log(Object.entries(tinderUser1)); //prints all key value pairs in nested array

// console.log(tinderUser1.hasOwnProperty("isLoggedIn")) // to check if the object has specific property or not
// console.log(tinderUser1.hasOwnProperty("email"))



/******************Object.create() method******************* */
const obj1 = {
    key1: "value1",
    key2: "value2"
}
// console.log(obj1);   
const obj2 = Object.create(obj1); //obj2 is inheriting properties from obj1
obj2.key3 = "value3";
obj2.key4 = "value4";   
// console.log(obj2); //prints obj2 with its own properties only
// console.log(obj2.key1); //prints value1 because obj2 is inheriting properties from obj1



/************************nested objects******************************/
const regularUser = {
    email: "sunil@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Sunil",
            lastName: "Beniwal"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.firstName); //accessing nested object property 


/*************combining objects************************ */
const user1 = {1: "a", 2: "b"}
const user2 = {3: "a", 4: "b"}
const user3 = {5: "a", 6: "b"}

// const user4 = {user1, user2, user3} //nested objects. not a good practice
// console.log(user4);

// const user4 = Object.assign(user1, user2, user3) // Object.assign(target, source) . merge source obj properties into target object. so here user1 will get all the properties from user 2 and user 3.
// const user4 = Object.assign( {}, user1, user2, user3) // here we have set target object empty so that we can get separate user 4 without affecting user 1.
// console.log(user4);
// console.log(user1);

const user4 = {...user1, ...user2, ...user3} //using spread operatpor.(best practice)
// console.log(user4);


/**********array of objects************ */
const users = [
    {
        id: 1,
        email: "hi@gmail.com"
    },
    {
        id: 2,
        email: "hi@gmail.com"
    },
    {
        id: 3,
        email: "hi@gmail.com"
    }
]

// console.log(users[1]);


/****************************object destructuring***********************************/

//Destructuring means unpacking values from arrays or properties from objects into distinct variables.

const course = {
    courseName : "Javascript course",
    price: "1000",
    courseInstructor: "Sunil Beniwal"
}
const intructor = course.courseInstructor //basic method of object destructuring

/*best method of extracting object properties into single line of code instead of extracting them separatly is
syntax:
const { property1, property2 } = objectName;
we can assign properties to variables with different names using this syntax:
const { property1:variable1, property2:variable2 } = objectName; //>> this means “Take property1 from objectName and store its value into a new variable called variable1, and do the same for property2 → variable2.”
*/
const {courseName, price, courseInstructor: instructor} = course

// console.log(courseName);
// console.log(instructor); // we have assigned variable instructor to property courseInstructor so we will use variable name here.
/* Imp Note: After destructuring with renamed variables: You can’t use the original property name as a variable.
//console.log(courseInstructor); //error or not valid
*/


//nested object destructing *****************
const user = {
  id: 1,
  profile: {
    firstName: "Sunil",
    lastName: "Beniwal",
    address: { city: "Delhi", pin: 110001 }
  }
};

const {id, profile:{firstName, address: {city}}} = user

console.log(firstName); // Sunil
console.log(city);   // Delhi



/*******************JSON API format ************/

//we get data from api in below object like structure format
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret"
// }

//sometimes we get api data in below array like format also
[
    {},
    {},
    {}
]