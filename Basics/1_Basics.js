// Javascript display properties
/*
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log()
*/

// document.getElementById("add").innerHTML = 5 + 6;
// document.write(5 + 6);
// windows.alert(5 + 6);
// console.log(5 + 6);

// let, var and const:
// var: variables are containers for storing data.
// const: If we want to general rule then we will use const.
// let: If you think the value of the variable can change use let.

// undefined: A variable declared without a value will have the value undefined.

// * Operators:
/*
Arithmetic: +, -, *, /, ++, --, %
Assignment: =, +=, -=, *=, /=, %=, **=
comparison: ==, ===, !=, !==, >, <, >=, <=, ?
Logical: &&, ||, !
Type operators: typeof, instanceof
Bitwise: &, |, ^, ~, <<, >>, >>>
*/

/*
Datatypes: string, number, digit, boolean, undefined, null, symbol, object
let x = BigInt("123456789012345678901234567890");

Object data type: 
- Object
- Array
- Date

Function invocation:
- When a event occures (when a user clicks a button)
- When it is invoked (called) from javascript
- Automatically (self invoked)

*/

// this: It refers to an object, it refers to a global object, it is undefined

/*
Event: JS interaction with HTML is handled through events that occur when the user or browser manipulates a page.
common events:
onchange, onclick, onmousehover, onmouseout, onkeydown, onload

string: backslash esacape characters
\', \", \\
Escape sequences: \b, \f, \n, \r, \t, \v

Strings as objects:
let x = new String("XYZ");

Methods: length, slice(), substring(), substr(), replace(), replaceAll(), toUpperCase(), toLowerCase(), 
concat(), trim()(remove whitespaces), trimStart()(only starting position remove), trimEnd()(only ending position removing), 
padStart(), padEnd(), charAt(), charCodeAt(), split()

search:  indexOf(), lastIndexOf(), search(), match(), matchAll(), includes(), startsWith(), endsWith()

String template literals:
Back-Tics syntax: ``
let text = `hello`;
Quotes inside strings:
let text = `He's called "Johnny"`
variable substitutions:
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;

Expression Substitution:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

NaN - Not a Number
let x = 100 / "10";

Infinity

JS Display numbers (By default base 10)
let num = 32
num.toString(32)
num.toString(16)
num.toString(10)
num.toString(8)

*/

/*
Number methods:
toString()
toExponential()
tofixed()
toPrecision()
valueOf()

Converting variables to numbers
Number()
    Number.isInteger()	
    Number.isSafeInteger()	
    Number.parseFloat()
    Number.parseInt()
parseFloat()
parseInt()
*/

// Array:
// Why use arrays: If you have a list of items storing the cars in single variables.
const arr = [1, 2, "mukund"];
console.log(arr);

// using js keyword new
const car = new Array("Saab", "Volvo", "BMW");
console.log(car);

// Accesing array elements:
console.log(car[1]);

// Arrays are objects:
// Arrays are a special type of objects. using typeof operator returns object for arrays.
console.log(typeof(arr));
const person = {firstname: "Hero", lastname: "Honda"};
console.log(person.lastname);
console.log(car.length);
console.log(car.sort());

let len = car.length;
let text = "<ul>"
for (let i = 0; i < len; ++i) {
    text += "<li>" + car[i] + "</li>";
}
text += "</ul>";

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(i => {
    console.log(i);
});

// Adding array elements
arr1.push(6);

// Associative Arrays: Arrays with named index called associative arrays
// In JS arrays always use numbered indexes.

const person = [];
person[0] = "kashyap";
person[1] = "meet";

// Difference between arrays and objects
// arrays are numbered indexes and objects are named indexes. Arrays are special kind of objects.

// JS has a built-in array constructor new Array()
const points = new Array(2, 3, 4, 5);

// How to recognize an array
const fruits = ["apple", "banana", "strawberry"];
let type = typeof(fruits);
console.log(type);

Array.isArray(fruits);
console.log(fruits instanceof Array);

// * Methods

// Converting array into string
const A = ["pizza", "burger", "french-fries"];
console.log(A.toString());

// join: returns a new string by concatenating all of the elements in an array, 
// separated by commas or a specified separator string. 

console.log(A.join(" * "));

// poping and pushing
A.pop();
A.push("meggi");

// shifting:
console.log(A.shift());
console.log(A.unshift());
console.log(A.length);

delete A[0];

// concatinating
const boy = ['anand', 'devanand'];
const girl = ['rasmika', 'samnatha'];

const parents = girl.concat(boy);
console.log(parents);

// splicing and slicing:
// splice: splice(1, 2, str) 1=>how many add element, 2=>how many element remove, 3=>string
const SPLICE = [1, 2, 3, 4, 5];
SPLICE.splice(2, 0, 6, 7);
console.log(SPLICE);

// splice: remove the elements and it will create a new array
const SLICE = [1, 2, 3, 4, 5, 6];
const ans = SLICE.slice(2);

console.log(ans);

// sorting:
fruits.sort();
fruits.reverse();

// numeric sort:
fruits.sort(function(a, b) {
    return a-b;
});

// finding the max value:
console.log(Math.max.apply(SLICE));
console.log(Math.min.apply(SLICE));

// sorting object arrays
const cars = [
    {type: "volvo", yaer: 2016},
    {type: "volvo", yaer: 2020},
    {type: "volvo", yaer: 2026}
];

cars.sort(function(a, b) {
    return a.year - b.year;
});

// Array foreach()
const numbers = [45, 4, 1, 2, 90, 5];
let txt = "";
numbers.forEach(myfunction);

function forEachFun(value) {
    txt += value + "<br>";
}

// array map():
// map() function creates a new array by perforing a function on each array element. Doesn't change the original array.

var array1 = [2, 3, 4, 5, 6];
var newArr = array1.map(function(val, index) {
    return {ley: index, value: val * val};
})
console.log(newArr);

// array filter: used to create a new array from a given array consisting of only those those elements from the given array which satisfy a condition set by the argument method.
// array.filter(callback(parameter), thisValue)

function isEven(value) {
    return value & 1 != 0;
}
var filtered = [11, 98, 2, 4, 5, 7].filter(isEven);
console.log(filtered);

// array reduce():method runs a function on each array element to reduce it to a single value.
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(reduceFunction);

function reduceFunction(total, value) {
  return total + value;
}

// every(): checks if all teh value pass a test.
const numbers2 = [45, 5, 2, 1, 90];
let all = numbers2.every(everyFun);
function everyFun(value) {
    return value > 18;
}

// lastindexof(): returns the position of lastindex
console.log(numbers2.lastIndexOf() + 1);

// find(): used to get the value of first element in the array that satisfies provided condition.
var array3 = [10, 20, 30, 40];
var found = array3.find(function (element) {
    return element > 12
});
console.log(found);

// findIndex(): returns index of first array element that passes a test condition.
let first = array3.findIndex(findFirstIndex);
function findFirstIndex() {
    return value > 30;
}

// from(): returns a array object from any object with a length property or any iterable object.
console.log(Array.from("learning"));

// keys(): returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}

// entries(): returns an Array Iterator object with key/value pairs
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

// includes: check if an element is present in an array
console.log(fruits.includes("banana"));