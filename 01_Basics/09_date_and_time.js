let myDate = new Date()
console.log(myDate);
// console.log(typeof myDate); //object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


// let myCreatedDate = new Date(2025,0,21) //Month starts from 0 to 11
// let myCreatedDate = new Date(2025,0,21,15,10) 
let myCreatedDate = new Date("2025-01-21T05:30:00") //in this format month starts from 1 to 12

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime()); //Returns: the number of milliseconds since January 1, 1970, 00:00:00 UTC
// // Note:getTiem() is used to compare two dates and to calcuate the difference between two dates.
// console.log(myCreatedDate.getDate()); //day of the month
// console.log(myCreatedDate.getFullYear());  //year
// console.log(myCreatedDate.getMonth()); //month starts from 0 to 11
// console.log(myCreatedDate.getDay()); //day of the week (0 to 6 for Sun to Sat)
// console.log(myCreatedDate.getHours());//returns the hour (5 in this example)


let myTimeStamp = Date.now() // returns the current timestamp in milliseconds since Jan 1, 1970 (UTC).
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); //time in seconds

let newDate = new Date()
console.log(newDate.toLocaleString( 'default', { 
    dateStyle: "long"
    } )); 


