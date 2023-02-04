// functions are defined with the function keyword.

// function expressions: It is also defined uisng an expression.
// function expression can be stored in a variable
// a function without name is called anonymous function
const x = function(a, b) {
    return a * b;
}
console.log(x(12, 2));

// function constructor
const myFun = new Function('a', 'b', "return a * b");
console.log(myFun(12, 2));

// functino hoisting:
// Hoisting is JS default behaviour of moving declarations to teh top of the current scope.
// Applies to variable and function declarations

console.log(myFunction(5));

function myFunction(y){
    return y * y;
}

// self-invoking functions: It is invoked automatically without named called
(function() {
    return "Hello World";
})();

// function can be used as values:
function addition(a, b) {
    return a + b;
}
let add = addition(4, 3) * 2;
console.log(add);

// Functions are objects
function intToString(a, b) {
    return a * b;
}
let text = intToString(2, 2).toString();
console.log(text + " " + typeof text);

// arrow functions:
// It allows a short syntax for writing function expressions

const ar = (x, y) => x * y;
console.log(ar(12, 2));

// Default parameter values
function mii(x, y = 10) {
    return x + y;
}
console.log(mii(5));

// * Function rest parameter: Allows a function to trat an indefinite number of arguments as array

function sum(...args) {
    let sum = 0;
    for (let arg of args) 
        sum += arg;
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

// arguments object: built-in object called the arguments object
// argument object contains an array of arguments used when function was called.

MAXI = findMax(1, 21, 43, 123, 3, 90);
function findMax() {
    let max = -Infinity; // *******
    for (let i = 0; i < arguments.length; ++i) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(MAXI);

// * Arguments are passed by value and objects are passed by reference

// Invokoing a function with a function constructor
function invoked(arg1, arg2) {
    this.firstname = arg1;
    this.lastname = arg2;
}

const myObj = new invoked("Hop", "Less");
console.log(myObj.firstname);

