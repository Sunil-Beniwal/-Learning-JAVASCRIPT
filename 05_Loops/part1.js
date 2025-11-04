//for loop+++++++++++++++++++++++++++++++++++++++++++++

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
// console.log(element); //error: element is not defined
// console.log(i); //error: i is not defined

//nested for loop++++++++++++++++++++++++++++++++++++++
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 1; j <=5; j++) {
//         console.log(`inner loops: ${j}`);  
//     } 
    
// }

// break and continue++++++++++++++++++++++++++++++++++++++
// for (let i = 1; i <= 10; i++) {
//     if (i === 4) {
//         console.log('breaking the loop at i = 4');
//         break; //exit from the loop
//     }
//     console.log(i);
// }



// for (let i = 1; i <= 10; i++) {
//     if (i === 4) {
//         console.log('skipping the iteration at i = 4');
//         continue; //skip the current iteration and continue with next iteration
//     }
//     console.log(i);
// }


//for loop with arrays++++++++++++++++++++++++++++++++++++++

// const fruits = ['apple', 'banana', 'mango', 'grapes', 'orange'];

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element); 
// }


// while loops+++++++++++++++++++++++++++++++++++++++++++

// syntax :
//index initialization
// while (condition) {
//     // code block to be executed
//     // index updation
// }

//example: 
// let i = 1;
// while(i<=10){
//     console.log(`value of i is: ${i}`);
//     i+= 2;
// }

//while loops with arrays+++++++++++++++++++++++++++++++++++++++++++

// const fruits = ['apple', 'banana', 'mango', 'grapes', 'orange'];
// let index = 0;
// while(index < fruits.length){
//     const element = fruits[index];
//     console.log(element);
//     index++;
// }


// do while loops+++++++++++++++++++++++++++++++++++++++++++
// syntax : 
// index initialization
// do {
//     // code block to be executed
//     // index updation
// } while (condition);

//example:
// let i =1;
// do{
//     console.log(`value of i is: ${i}`);
//     i++
// }while(i<=5);

// Note: do while loop will execute the code block at least once even if the condition is false initially.


