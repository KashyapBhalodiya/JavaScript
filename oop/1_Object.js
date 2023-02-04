// primitive data type(Immutable): string, number, boolean, null, undefined, symbol, bigint

// object: It is a collection of named values.
// properties: the named values of an object is called properties.

// Creating a Javascript Object:
/*
1. single object using an object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

2. single object, with the keyword new
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";

3. Define an object constructor and then create objects of the constructed type.

4. Create an object using Objec.create()
*/

// for in loop
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
};
txt = "";
for (let x in person) {
    txt += person[x];
}
console.log(txt);

// deleting object properties
delete person['age'];

// nested objects:
myObj = {
    name:"John",
    age:30,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log(myObj.cars.car2);
console.log(myObj['cars']['car1']);

// Adding a method to an object
const Person = {
    firstName: "John",
    lastName: "Doe",
    id: 1100,
};
Person.name = function() {
    return this.firstName + " " + this.lastName;
};
console.log(Person.name());

// displaying object values
const myArray = Object.values(Person);
console.log(myArray);

// Jacascript accessors: (getters and setters)
const p = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
    // set lang2(lang2) {
    //     this.language = this.lang2;
    // }
};
console.log(p.lang);
p.lang = "en";
console.log(p.language);

// object.defineProperty: used to add getters and setters
const obj = {counter : 0};

Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});
console.log(obj.increament);
console.log(obj.decrement);

// javascript object constructor
function per(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}
const a = new per("John", "Doe", 90);
console.log(a);

// Adding a method to a constructor
function newPerson(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    };
}
const myFather = new newPerson("John", "Doe", 50, "blue");
console.log(myFather.name());

// Built-in JS constructors: String, Number, Boolean, Object, Array, RegExp, Function, Date

// Prototype: javascript objects inherit features from one another.
function person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
person2.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
const p1 = new person2("John", "Doe", 16, "green");
console.log(p1.name());

// sets: It is a collection of unique values. Each value can only occur once in set. Hold any value of data type.
// methods: new Set(), add, delete, has, clear, forEach, values, keys, entries, size

const letters = new Set(['a', 'b', 'c', 'd']);
console.log(letters);

letters.add('e');
console.log(letters);
console.log(letters.keys());
console.log(letters.values());

const myIterator = letters.entries();
let text = "";
for (const entry of myIterator) {
    text += entry;
}

console.log(typeof letters);
console.log(letters instanceof Set);

// Maps: holds key-value pairs where the keys can be any datatype.
// methods: new Map(), set, get, delete, has, clear, forEach, values, keys, entries, size

const fruits = new Map(["apples", 500], ["bananas", 20]);
console.log(fruits);

console.log(fruits.set("oranges", 200));
console.log(fruits.get("apples"));
console.log(fruits.delete("apples"));

