class User{
    constructor(username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass
    }

    encryptPass(){
        console.log(`${this.pass}abc`);
        
    }

    captiliseUsername(){
        return `${this.username.toUpperCase()}`
    }
    
}

const user1 = new User("Sunil", "Sunil@gmail.com", "123")

console.log(user1);
user1.encryptPass();
console.log(user1.captiliseUsername());


//behind the scene*****************************

// function User(username, email, pass){
//     this.username = username;
//     this.email = email;
//     this.pass = pass
// }

// User.prototype.encryptPass = function(){
//     console.log(`${this.pass}abc`);
// }

// User.prototype.captiliseUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user2 = new User("Rahul", "mymail@gmail.com", "123")
// console.log(user2);
// user2.encryptPass()
