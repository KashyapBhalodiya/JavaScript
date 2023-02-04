// call(): used on different object

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName()); 

const Person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const Person1 = {
    firstName:"John",
    lastName: "Doe"
}
const Person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
console.log(Person.fullName.call(Person1));

// apply(): used on different object.
// same as call() method
// difference: call() takes arguments separately and apply() takes arguments as an array.

console.log(Person.fullName.apply(Person2));

// bind(): an object can borrow a method from another object.

const Per = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = Per.fullName.bind(member);

console.log(fullName);

// local and global variables 
let counter = 0;
function add() {
    let count = 0;
    counter += 1;
}
add();
add();
console.log(counter);

// nested functions
function addition() {
    let cnt = 0;
    function plus()
    {
        cnt += 1;
    }
    plus();
    return cnt;
}
console.log(addition());

// closures:
// combination of a function bundled together (enclosed) with references to its surrounding state

const addtionClosure = (function () {
    let counter = 0;
    return function () {
        counter += 1; 
        return counter;
    }
})();
  
addtionClosure();
addtionClosure();
console.log(addtionClosure);

function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        alert(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc();