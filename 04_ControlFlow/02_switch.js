// ==========================================================
// ⚖️ 3. The switch Statement
// ==========================================================
// Use when you check the same variable against multiple values.

//syntax:
// switch (key) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     ...  

//     default:
//         break;
// }

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Today is:", dayName);


// ⚠️ Fall-through behavior example:
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("fruit is Apple!");
  case "banana":
    console.log("Fruit is Banana!");
    break;
  default:
    console.log("Other fruit");
}

//Note: if we miss break statement then it will go through every case after matched case and execute them until it finds break or end of switch statement.