/*In JavaScript, there are two types of object properties:

1. Data properties – regular properties that we are studying from begining. They store values directly.
   Example:
   let obj = {
     name: "Alice"   // data property
   };
   Descriptors of data properties are value, writable, enumerable and configurable.

2. Accessor properties – 
   Accessor properties are essentially functions (getters and setters) that execute when the property value is accessed or assigned, yet they appear and are accessed exactly like regular properties to external code (with dot notation not like function calls).
   They don't store values directly. Instead, their getter/setter functions control how the value is read and assigned.

   Descriptors for accessor properties are get, set, enumerable, configurable.
*/

/* In JavaScript OOP, we use getters and setters:

✔ To control access to object properties
✔ To add validation
✔ To hide internal details (encapsulation)
✔ To compute values dynamically
✔ To protect data from direct modification  */


// ====================================getter(get keyword used)===============================================
// getter means reading with control.
// Syntax:
// get propertyName() {
//     // must return something***
// }

// ******IMPORTANT* When does a getter run? ➡ When we access the property(NOT a function call, NO parentheses)**************
// Example

// class User{
//     constructor(username){
//         this._name = username // "_" means interanl property. not a rule of js. this is just for refering this property as internal.
//     }

//     get name(){
//         return this._name.toUpperCase();
//     }
// }

// const user1 = new User("Sunil Beniwal")

// // calling getter method :- we know getter runs when we access the property.
// console.log(user1.name); // accessing accesor property 'name' like a regular property. (user1.name() ❌)




// ===================================setter (set keyword used)=====================================================
// setter means writing with control
// Syntax:
// set propertyName(value) {
//    // modifies internal state
// }

// ******IMPORTANT* When does a setter run? ➡ When we assign a value to property. (obj.propertyname = value)
// this.propertyname = value will also run setter because this is also assigning value to property from inside.

// example
// class User {
//     constructor(name) {
//         this._name = name;
//     }

//     set name(value) {
//         if (value.length < 3) {
//             throw new Error("Name must be at least 3 characters");
//         }
//         this._name = value;
//     }
// }

// const u1 = new User("sunil");

// // calling setter method:- we know setter runs when we assign a value to property
// u1.name = "ra";   // setter runs → ERROR



// =============================getter and setter together=========================================
class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(value){
        const arr = value.split(" ") //we know split returns an array
        this._firstName = arr[0];
        this._lastName = arr[1];
    }
}

const person1 = new Person("Sunil", "Beniwal")

// console.log(person1.fullName) //runs getter

// person1.fullName = "Rahul Joshi" //runs setter

// console.log(person1.fullName);

// ================================getter/setter another important example=======================
class User {
    constructor(email, password){
        this.email = email;   
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        // this.email = value  //❌ recursion happen because this will again call setter and it will run in loop.
        this._email = value
    }

    get password(){
        return `${this._password}sbsus`
    }

    set password(value){
        this._password = value
    }
}

const sunil = new User("sunil@gmail.com", "abc")
// console.log(sunil.email);
// console.log(sunil.password);

// Note: 1 Now in above example we did't user this._email, instead we directly used property name email and password. so here we have used them directly to call setter when a new instance is created. so inside constructor  this.email = email  will trigger setter and setter will assign the value to internal variable and getter returns that internal variable. 

// Note: 2 Inside constructor
//  this.propertyname = value -->triggers setter
//  this._propertyname = value -->bypass setter and store raw value directly

// Note: 3 **🚫 Inside getter/setter, NEVER read or write the same property name. It will call the getter/setter again and cause infinite recursion.** Always use a different internal variable (commonly _property).
// Inside getter/setter:
// ❌ this.prop       // causes recursion
// ✔ this._prop      // safe internal storage



//real world example 1: validating user age+++++++++++++++++++++++++++++
// class User {
//     constructor(age) {
//         this._age = age;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         if (value < 0 || value > 120) {
//             throw new Error("Invalid age");
//         }
//         this._age = value;
//     }
// }

// const u = new User(20);
// // console.log(u.age);

// // u.age = -10;  // ❌ error


//Example 2:  Using getter for computed properties.
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    get area() {
        return this.w * this.h;
    }
}

// const r = new Rectangle(10, 5);
// console.log(r.area);   // computed dynamically


//example 3
class Student {
    constructor(score) {
        this.score = score;
    }

    get score() {
        return this._score + 10;
    }

    set score(value) {
        if (value < 0) {
            this._score = 0;
        } else {
            this._score = value;
        }
    }
}

const s1 = new Student(5);
console.log(s1.score);

s1.score = -20;
console.log(s1.score);










