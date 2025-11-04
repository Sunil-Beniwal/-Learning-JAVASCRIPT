const accountId = 12345
let accountName = "Sunil Beniwal"
var accountPassword = "255355"
accountCity = "Jaipur"; //this is valid but we don't write like this.
let accountState;

// accountId = 2987 //can't change constant variables
accountName = "Beniwal"
accountPassword = "45664566"
accountCity = "Benguluru"

console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity, accountState]);

/* Notes
semicolon are optional in many cases in js.
perefer not to use var because of issue with blcok scope as variables declared with var are not block scoped.
Also var tolerates redclarations in same scope whereas redeclarations are not allowed in let.
ex var name = "sunil";
   var name = "rahul"; // this will notthrow error it will just update name to rahul

*/