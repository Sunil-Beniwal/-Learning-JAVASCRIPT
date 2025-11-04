// ==========================================================
// 🧩  What is Control Flow?
// ==========================================================
// Control flow is the order in which statements execute.
// Normally, code runs top to bottom unless we control it using conditions, switches, or error handling.

// ==========================================================
// ⚙️  if, else if, and else Statements
// ==========================================================

// // ✅ Basic if statement
// let age = 20;

// if (age >= 18) {
//   console.log("You can vote!");
// }


// 🧭 if...else
// let isRaining = true;

// if (isRaining) {
//   console.log("Take an umbrella!");
// } else {
//   console.log("No umbrella needed!");
// }


// ✅ if else if statement
// let age = 20;

// if(age<=18){
//     console.log("teenage");
// }else if(18<age && age<=30){
//     console.log("young boy");    
// }else if(30<age && age<=50){
//     console.log("matured man");    
// }else{
//     console.log("old man"); 
// }

/* Note1:  in above code we can npt write comparison like this 18<age<=30 because it will not work as intended in js. the reason is that in js comparisons are evaluated from left to right, and each comparison returns a boolean value (true or false). Therefore,18<age<=30 is evaluated as (18<age)<=30. The expression 18<age returns a boolean value (true or false), which is then compared to 30. Since true is coerced to 1 and false to 0 in numeric comparisons, the result will always be true (1<=30) or false (0<=30), which does not correctly check if age is between 18 and 30. Therefore, we have to write like this 18<age && age<=30.*/

//simpler way to write above code
// if(age<=18){
//     console.log("teenage");
// }else if(age<=30){
//     console.log("young boy");    
// }else if(age<60){
//     console.log("matured man");    
// }else{
//     console.log("old man"); 
// }

// ==========================================================
// 🧱  Nested Conditionals
// ==========================================================
// const userType = "admin";
// const isLoggedIn = true;

// if(isLoggedIn){
//     if(userType==="admin"){
//         console.log("Welcome! admin");    
//     }else {
//         console.log("Welcome! user");    
//     }
// }else{
//     console.log("please login first!");
// }

// // Cleaner version with combined condition
// if (isLoggedIn && userType === "admin") {
//   console.log("✅ Access granted to admin area.");
// }


// ==========================================================
// ⚡  Logical Operators in Control Flow
// ==========================================================
// && → AND, || → OR, ! → NOT


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// // // NOT example
// let isRaining = false;
// if (!isRaining) {
//   console.log("Go outside, it's sunny!");
// }


// ==========================================================
// ⚙️ 7. Short-Circuit Evaluation
// ==========================================================
// When JavaScript evaluates logical operators like && (AND) or || (OR),
// it doesn’t always evaluate both sides — it stops early as soon as it knows the final result.
// That early stopping is called short-circuiting.
// This is useful for setting default values or executing functions conditionally.

// ✅lets first see example with &&(and)
/*Note: If the left-hand side is false, JS doesn’t check the right-hand side.
Because for AND, if any one condition is false— the whole thing is false and code doesnot execute*/

//example: let's say we want to print a message to the user after login
// let isLoggedIn = true;
// let isUser = true;
// let isAdmin = false;

// isLoggedIn && isUser && console.log(`welcome! User`); //So here it goes to 3rd part only when firstbtwo consitions were true. if anyof first two consition would be false, then message would not print.

// isLoggedIn && isAdmin && console.log(`welcome! User`); //here message will not print.

// //example 2:
// console.log(false && "Hi Sunil"); //prints false because first condition is false so it doesnot check right side and returns false
// console.log(true && "Hi Sunil");  //prints "Hi Sunil" because first condition is true so checks right side and returns it


// // ✅ Now let's see example with || (OR)
// /*Note: If the left-hand side is true, JS doesn’t check the right-hand side.
// Because for OR, if any one condition is true— the whole thing is true and code executes*/

// console.log(true || "Hello World"); //prints true because first condition is true so it doesnot check right side and returns true
// console.log(false || "Hello World"); //prints "Hello World" because first condition is false so checks right side and returns it    

// //✅now let's see example of both && and || combined
// let isLoggedIn2 = false;
// let username = "Sunil";

// let message = (isLoggedIn2 && "Welcome " + username) || "Please log in";

// console.log(message);


// // ✅ Practical Example: Setting Default Values
// let userColor = null;
// let defaultColor = "blue";
// let finalColor = userColor || defaultColor;
// console.log(finalColor); // prints "blue" because userColor is null (falsy), so defaultColor is used


// // ✅ Practical Example: Conditional Function Execution
// function sendNotification() {
//   console.log("Notification sent!");
// }
// let notificationsEnabled = true;
// notificationsEnabled && sendNotification(); // calls sendNotification() only if notificationsEnabled is true


/*Note: Short-circuiting works based on truthy and falsy values —
not just true and false.
So values like 0, "", null, undefined, and NaN are considered falsy,
while rest other values are truthy.*/


// ==========================================================
// 🧭  Practice Challenge
// ==========================================================
// Function: getTicketPrice(age, isStudent)
// Rules:
// - If age < 12 → "Free"
// - If student and age < 25 → "Discounted"
// - Else if age >= 60 → "Senior Discount"
// - Otherwise → "Regular Price"

function getTicketPrice(age, isStudent){
    if(age<12) {
        console.log("free"); 
    }
    else if(isStudent===true && age<25){
        console.log("Discounted");    
    }
    else if(age>=60){
        console.log(" Senior Discount");    
    }else{
        console.log("Regular price");
        
    }
}

// getTicketPrice(22, true)
// getTicketPrice(25, false)
// getTicketPrice(10, false)
// getTicketPrice(45, false)
// getTicketPrice(65, false)


// ==========================================================
// ❌ exception handling using try...catch
// ==========================================================
// we use try...catch to handle errors gracefully in our code.
// It allows us to "try" a block of code that might thwor and error and "catch" any errors that occur,
// preventing the program from crashing and enabling us to handle the error appropriately.

// Example:
// try {
//     //code that may throw an error
//     let result = someFunction(); // assuming someFunction is not defined
//     console.log(result);
// } catch (error) {
//     //code to handle the error
//     console.error("An error occurred:", error.message); //error.message gives description of error.
// } finally {
//     //code that will run regardless of an error occurring or not. this part of code always runs
//     console.log("Execution completed.");
// }



