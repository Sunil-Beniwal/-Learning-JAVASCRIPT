// ideal comparisons which are good to use
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/**********string comparisons*******************************/
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.In other words, strings are compared letter-by-letter.

// console.log( 'Z' > 'A' ); // true
// console.log( 'Glow' > 'Glee' ); // true
// console.log( 'Bee' > 'Be' ); // true. same letter longer string is greater.



/***************comparisons confusions**********try to avoid writing like this***********/
// console.log("2" > 1);
// console.log("02" > 1);
// here string is automatically converted to number by js engine and then comparison happens.


// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// here euality check (==) and comparions(<, >, >=, =<) behave differently. In case of comparisons null is conbverted to number i.e 0.That’s why null >= 0 is true and null > 0 is false

/* Special Note
 On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
*/

// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined == 0); //false
/*Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.
*/

// === strict check.check value as well as datatype both.
// console.log("2" === 2); //false

console.log(null==undefined) //true, special case (sweet couple)
console.log(null===undefined) //false because type difference


/*Summary
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons  >= > < <= with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/