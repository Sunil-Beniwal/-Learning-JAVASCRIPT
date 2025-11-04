// stack memory(primitive) vs heap memory(Non-primitive)
/*
if we get a variable form stack memory then we get the copy of original variable and modifying that copy will not change the original variable.

But in case of heap memory, if we get a variable from heap memory then we get the refrence of original variable from that memory , and changing the variable will change the original variable.
*/

let myName = "Sunil"
let myFriendName = myName

myFriendName ="Rahul"
console.log(myName)
console.log(myFriendName)

/************Heap memory****************/

let obj1 = {
    email: "sunil@gmail.com",
    age:24
}
let obj2 = obj1

obj2.email = "rahul@gmail.com"

console.log(obj1.email);
console.log(obj2.email);
