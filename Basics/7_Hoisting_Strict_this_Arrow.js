// javascript declaration are hoisted:
// a variable can be used before it has been declared.

// <p id="demo"></p>

// x = 5;
// ele = document.getElementById("demo");
// ele.innerHTML = x;

// var x;

// strinct mode: it easier to write secure javascript
// declaring strict mode: 
"use strict";
myFunction();

function myFunction() {
    let y = 3.14;
}

// this: this keywords refers to an object.
/*
depending how to use it this keyword:
object method, this refers to the object
Alone, this refers to the global object.
Function, this refers to the global object
strict mode, this is undefined.
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5560,
    fullName : function() {
        return this.firstName + " " + this.lastName;    
    }
};

console.log(person.fullName());

console.log(this);

function myFunction1() {
    return this;
}
console.log(myFunction1());

// Explicit binding: 
/*
call(): Used t invoke a function with an owner object as an argument
apply(): 
bind(): 
*/

const Persone = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const Persone1 = {
    firstName:"John",
    lastName: "Doe"
}
const Persone2 = {
    firstName:"Mary",
    lastName: "Doe"
}
console.log(Persone.fullName.call(Persone1));

// Persone1.firstName.apply(Persone);

// let fulname = Person.lastName.bind(Persone2);

// arrow function: shorter function (shorthand function)

let myfunction2 = (a, b) => a * b;
console.log(myfunction2(1, 2));

let hello = "";
hello = () => "Hello World";
console.log(hello);

