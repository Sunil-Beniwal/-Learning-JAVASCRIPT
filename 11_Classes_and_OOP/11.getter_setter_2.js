// ============getter/setter for constructor function=====================
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {

        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
            this._email = value;
        }
    })

     Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const user1 = new User("user1@gmail.com", "pasd")

// console.log(user1.email);
// console.log(user1.password);


// =========================Using Getters and Setters with Private Fields=================================
class account {
    #balance; // Private property

    constructor(balance) {
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative!");
        } else {
            this.#balance = amount;
        }
    }
}

const acc1  = new account(1000);
console.log(acc1.balance);
// acc.balance = -500;  // "Balance cannot be negative!"


// ==============getter/setter for object literal============================
const person = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(person)
// console.log(tea.email);


// example 2 
const student = {
    _marks: 95,

    get marks() {
        return this._marks;
    },

    set marks(value) {
        if (value < 0 || value > 100) {
            throw new Error("Invalid marks");
        }
        this._marks = value;
    }
};

// console.log(student.marks)  // getter runs

// student.marks = 88;        // setter runs
// console.log(student.marks);

// student.marks = 150;       // ❌ ERROR