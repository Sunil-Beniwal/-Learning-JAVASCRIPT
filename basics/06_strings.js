const name = "Sunil"
const age = 24
// console.log("Name: "+name + ",age: "+age);

console.log(`Hellow my name is ${name}. My age is ${age}`); //Better way and preferred.

const myName = new String('Sunil-kumar-beniwal')
// console.log(myName);
// console.log(myName[0]);
// console.log(myName.length);
// console.log(myName.__proto__);

// console.log(myName.toUpperCase());
// console.log(myName.indexOf("i"));
// console.log(myName.charAt(3));

const newString = myName.substring(0,6) //can't take negative index
// console.log(newString);

const newString1 = myName.slice(2,6)
// console.log(newString1);
const newString2 = myName.slice(-5) //can take negative index. negative iondex start from end of the string.
// console.log(newString2);

const newString3 = "   Sunil    "
// console.log(newString3);
// console.log(newString3.trim());

// console.log(myName.split('-'));

const url = "https://sunil.com/sunil%20beniwal"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

