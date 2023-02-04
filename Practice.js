// Data types: underfined, null, boolean, string, symbol, number and object

// var and let both are the variable declaration
// difference between var and let: var is function scoped and let is block scoped

// const: used to define a new variable and this variable is fixed.

// to see quotation mark in the string use the \ before the quotation mark
console.log("Hello \"Friends!\"")

/* Escape Sequences in Strings */
/*
    \' - single quote
    \" - double quote
    \\ - backslash
    \n - new line
    \t - tab
    \r - carriage return
    \b - backspace
    \f - form feed
*/

// find the length of string using (.length)

/*--------------------  create an array  ------------------------------*/
var arr = ["abcd", 23, 22.1];
// nested array: arr = [["abcd", 12], ["weq"], 2.3];
console.log(arr);

// append the data at the last in array using push function
arr.push("last");
console.log(arr);

// remove the last element in the array using pop function
arr.pop();
console.log(arr);

// remove the element at the first index using shift function
arr.shift();
console.log(arr);

// insert the element at the first index using unshift function
arr.unshift("Begin");
console.log(arr);

/*----------------- Function ---------------------*/
function right() {
    console.log("hello world");
}
right();

// passing values
function right1(a, b) {
    console.log(a - b);
}
right1(10, 5);

// return the function

function  right2(num) {
    return num - 7;
}
console.log(right2(10));

// Stand In Line

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* ----------------------------------- Operators --------------------------------------- */
// Assignment Operators: =, +=, -=, *=, /=, %=, **=(power function), <<=, >>=, >>>=(unsigned right shift), &=, ^=, |=, &&=, ||=, ??=(Logical Nullish Assignment)
// Comparison Operators: ==, !=, ===(strict equal), !==, >, >=, <, <=
// Arithmetic Operators: %, ++, --, **
// Bitwise Operators: &, |, ^, ~, <<, >>, >>>(unsigned right shift)
// Logical Operators: &&, ||, !
// Conditional (ternary) operators: condition ? expression1 : expression2
// Unary Operators: delete, typeof, void
const Employee = {
    firstName: 'John',
    lastName: 'Doe'
};
delete Employee.firstName;
console.log(Employee.firstName);
console.log(typeof Employee.lastName);
console.log(void 2 == '2');

// Relational Operators: in, instanceof
const Car = {make: 'Honda', model: 'Accord', year: 1998};
console.log('make' in Car);

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new car('Honda', 'Accord', 1998);
console.log(auto instanceof car);

// switch statement
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "aplha";
            break;
        case 2:
            answer = "beta";
            break;
        default:
            answer = "gama";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));

// build javascript objects

var Dog = {
    "name": "Tommy",
    "Legs": 4,
    "Friends": ["Everything!"]
};

var obj = Dog.name;
console.log(obj);
// accessing object properties with bracket notation
var obj1 = Dog["Friends"];
console.log(obj1);
// update the objects
Dog.Friends = "Malik";
console.log(Dog);
// add new properties to an object
Dog.bark = "bow-bow";
console.log(Dog.bark);
// delete properties to an object
delete Dog.bark;
console.log(Dog);
// using objects for lookups
function phoeticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "Charlie": "Chicago",
        "echo": "Easy"
    };
    result = lookup[val];
    return result;
}
console.log(phoeticLookup("Charlie"));

// Testing objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleight"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return  myObj[checkProp];
    } else {
        return "Not Found";
    }
    return "Change Me";
}
console.log(checkObj("gift"));

// Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Arjit Singh",
        "title": "Galiyan",
        "release_year": 2017,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Carry Minati",
        "title": "Streams and Games",
        "release_year": 2015,
        "formats": [
            "GTA-V",
            "Songs",
            "Drama"
        ],
        "gold": true
    },
];
// accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        }
    }
};
var variable1 = myStorage.car.inside["glove box"];
console.log(variable1);

// Accessing nested arrays
var myPlants = [
    {
        type: "Flowers",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[0].list[1];
console.log(secondTree);

// Record Collection
var collection = {
    "2548": {
        "album": "1999",
        "artist": "Prince"
    },
    "1234": {
        "artist": "Robert Lewandosaki",
        "tracks": [
            "1998",
            "Little Red Corvette"
        ]
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []; // [] - empty array
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(1234, "artist", "tracks"));

// Iterate with while loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

// Iterate with for loop
for (var j = 0; j < 5; j++) {
    myArray.push(j);
}
console.log(myArray);

// nested array
var product = [[1, 2], [3,4], [5,6,7]];
for (var row = 0; row < product.length; row++) {
    for (var col = 0; col < product[row].length; col++) {
        console.log(product[row][col]);
    }
}

// do-while loop
var a = [];
var res = 1;
do {
    a.push(res);
    res++;
} while (res < 5)
console.log(res, a);

// generate random Fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

// generate random whole numbers
function randomWholeNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());

// use the parseInt function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("123"));

// declar read-only variable with the const keyword: const can't be reassigned
const pi = 3.14159265;
console.log(pi);

// mutate an array decalred with array
const s = [1,2,3,4];
function editInPlace() {
    s[0] = 2;
    s[1] = 4;
    s[2] = 5;
}
editInPlace();
console.log(s);

// prevent object mutation
function freezeObj() {
    const Math_constants = {
        PI: 3.14
    };

    Object.freeze(Math_constants);

    try {
        Math_constants.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return Math_constants.PI;
}
const PI = freezeObj();
console.log(PI);

// use arrow functions to write concise Anonymous Functions
// var magic = function() {
//     return new Date();
// };

// write in short in upper code
const magic = () => new Date();

// // write Arrow functions with parameters
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };

// write short code
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

// write higher order arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squareInterger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareInterger;
};
const squareInterger = squareList(realNumberArray);
console.log(squareInterger);

// Write higher order Arrow functions
const increament = (function() {
    return function increament(number, value) {
        return number + value;
    };
})();
console.log(increament(5,2));
console.log(increament(5));

// use the rest oeprator with functions parameters
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// use the spread operator to evaluate arrays in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

// use destructing assignment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x: p, y: b, z: c} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTemp(avgTemperatures) {
    const {tomorrow: tempOfTommorow} = avgTemperatures;
    return tempOfTommorow;
}
console.log(getTemp(AVG_TEMPERATURES));

// destructing assignment with nested objects
const LOCAL_FOREST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};
function getMax(forecast) {
    const{ tomorrow: { max: maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log(getMax(LOCAL_FOREST));

// use destructing assignment to assign variables from arrays
const [o, g] = [1,2,3,4,5];
console.log(o, g);

let aa = 8, bb = 6;
(() => {
    [aa, bb] = [bb, aa];
})();
console.log(aa);

// use destructing assignment with the reset operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...ARR] = list;
    return ARR;
}
const ARR = removeFirstTwo(source);
console.log(ARR);
console.log(source);

// use destructing assignment to pass an object as a function's parameters
const states = {
    max: 56.78,
    median: 34.54,
    mode: 23.57,
    min: -0.12
};
const half = (function () {
    // return function half(stats) {
    //     return (stats.max + stats.min) / 2.0;
    // };
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(states);
console.log(half(states));

// create string using template literals
const person = {
    name: "Ronaldo",
    age: 36
};
const greeting = `Hello, my name is ${person.name}!I am ${person.age} year old`;
console.log(greeting);

// write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Messi", 34, "Male"));

// write concise declarative functions
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// use class syntax to define a constructor function
// var spaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
class spaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// use getter and setter to control access to an object
// class Book {
//     constructor(author) {
//         this._author = author;
//     }
//     get writer() {
//         return this._author;
//     }

//     set write(updateAuthor) {
//         this._author = updateAuthor;
//     }
// }
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// understand differences between import and require
// use export to reuse a code block
// use * to import everything from a file

