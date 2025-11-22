// ==========Object.getOwnPropertyDescriptor()======================

// console.log(Math.PI);
// Math.PI = 4;          //won't change
// console.log(Math.PI); // same value

const PAI = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(PAI);
// here its property of writale is hardcoded set to false  so we can't change it value. Also we can't set its properties like writable, enumerables to false because they are hard coded.


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// ======================Object.defineProperty()============================================
// here object is our created so we can change its descriptor properties with Object.defineProperty() method.
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "Ilaichi Tea";
console.log(chai.name); //ginger chai because writable is false.

for (const key in chai) {
    if(typeof chai[key] !== "function"){
        console.log(`${key} : ${chai[key]}`);
    }
}

