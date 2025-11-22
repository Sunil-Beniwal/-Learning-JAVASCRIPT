/******************************Object literal********************************/
const user = {
    username: "Sunil",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


/**********************************Constructor Function*****************************/
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //returns object. 
}

const userOne = new User("Sunil", 10, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
console.log(typeof userTwo);

/* in above code there are some optimisation points.
--> return this should never be written inside a constructor function. With new, JavaScript implicitly  returns this for you.
--> defining greeting inside the constructor. This means every instance gets its own copy of the function. Not ideal. Should go on the prototype instead.
so above example can be written like this in an optimised way
 */

// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
// }

// User.prototype.greeting = function() {
//     console.log(`Welcome ${this.username}`);
// };

// const userOne = new User("Sunil", 10, true);
// const userTwo = new User("Javascript", 11, false);
// console.log(userOne.constructor); // returns the constructor function of userOne obj which is User.
// console.log(userOne);
// console.log(userTwo);
// console.log(User.prototype);

/********************four step process of new keyword******************************
 What the `new` keyword does (4-step process):
   Step 1 → Creates a new empty object: {}
   Step 2 → Sets the object's prototype. Links the new object to the constructor's prototype:
            obj.__proto__ = User.prototype
   Step 3 → Binds `this` inside the constructor to this new object.
   Step 4 → Returns the object implicitly (no need to write `return this`)

******/

/**********************what is User.prototype*******************************

-->User.prototype is an empty object called prototype object which is created automatically by js when constructor function User(){...} was defined. 
-->User.prototype is where we put methods and properties that should be shared by all User objects. for example above we created User.prototype.greeting() method. now every object created by new User() will be able to call .greeting() without having its own copy of that function. 
-->Now if we have defined some shared methods or prperties inside user.prototype then this will print object containing those shared properties and methods. like in above example it will print { greeting: [Function (anonymous)] } because we defined a shared method .greeting() inside it.
-->Basically It is a blueprint object shared across all instances created by new User().
--> now let's understad the step 2 of new keyword in detail. so when we create a new object using new keyword, js interanlly links the prototype of newly crteated object to object.prototype (means userOne.__proto__ = User.prototype). This means:

The new object userOne is linked to User.prototype
If JavaScript cannot find a property/method on userOne, it will look inside User.prototype
This is called prototype chaining.

**********/


/********************************* LEARNING NOTES *********************************

1) Constructor Function:
   - When called with `new`, it creates a new object.
   - Inside the constructor, `this` refers to the new empty object.
   - Properties assigned using `this.property = value` become
     instance-specific (each object gets its OWN copy).

2) What the `new` keyword does (4-step process):
   Step 1 → Creates a new empty object: {}
   Step 2 → Sets the object's prototype. Links the new object to the constructor's prototype:
            obj.__proto__ = User.prototype
   Step 3 → Binds `this` inside the constructor to this new object.
   Step 4 → Returns the object implicitly (no need to write `return this`)

3) Prototype:
   - `User.prototype` is a shared object.
   - Any property or method added to prototype is shared across all instances.
   - Useful for memory efficiency because there is ONE shared copy.

4) Shared vs Instance-specific:
   - Instance-specific → all the properties defined inside constructor (this.name = value)
     Each object has its own copy version.
   - Shared → all the properties and methods defined on User.prototype (User.prototype.role = "...")
     All objects read from the same shared property.

5) Shadowing:
   - If an instance defines a property with the same name as prototype,
     the instance property overrides (shadows) prototype property.

6) Prototype Chain:
   - If JavaScript doesn’t find a property in the object itself,
     it goes to obj.__proto__ → which is User.prototype.

***********/


/************one full example to understand constructor function, prototype, Shared property*********************************/
// Constructor Function
// function User(username, loginCount, isLoggedIn) {
//     // Instance-specific properties (each object gets its OWN copy)
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
// }

// // SHARED PROPERTIES (One copy, shared by all instances)
// User.prototype.role = "member";   // shared property
// User.prototype.appName = "ChatApp"; // another shared property

// // SHARED METHODS (One copy, stored on prototype)
// User.prototype.greet = function () {
//     console.log(`Welcome ${this.username}!`);
// };

// User.prototype.showDetails = function () {
//     console.log(
//         `${this.username} | Logins: ${this.loginCount} | Logged In: ${this.isLoggedIn}`
//     );
// };

// // OBJECT CREATION
// const userOne = new User("Sunil", 10, true);
// const userTwo = new User("Chichi", 5, false);

// console.log(userOne);
// console.log(userTwo);

// console.log(userOne.greet());
// console.log(userTwo.greet());

// console.log(userOne.role); // shared property
// console.log(userTwo.role); // shared property

// // overriding shared property at instance level
// userOne.role = "admin"; // this will add role property at instance level.
// console.log(userOne.role); // admin (instance-specific)
// console.log(userTwo.role); // member (still prototype value)

// console.log(userOne); // this will have 4 properties now because .role property  exists at instance level now
// console.log(userTwo); // this will have same three property.


// // TYPE CHECKS + PROTOTYPE CHECKS
// console.log(userOne.constructor);       // points to User function
// console.log(User.prototype);            // shows prototype object
// console.log(userOne.__proto__ === User.prototype); // true


