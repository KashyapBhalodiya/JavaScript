// set: it is a collection of unique values.
// each value can only occur once in a set.

// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set
// size    Returns the number of elements in a set

// How to create a set
const letter1 = new Set(['a','b','c','d']);
console.log(letter1);

const letter2 = new Set();
letter2.add('a');
letter2.add('d');
letter2.add('c');

const letter3 = new Set();
const a = 'a';
const b = 'b';
letter3.add(a);
letter3.add(b);
console.log(letter3);

// forEach method
let text = "";
letter1.forEach(function(value) {
    text += value;
})

// values(): returns a new iterator object containing all the values in a set.
console.log(letter1.values());

// Map: holds key-value pairs where the keys can be any datatype.
// map remembers the original insertion order of the keys.

// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// size	Returns the number of elements in a Map

// How to create a map
const fruit1 = new Map([
    ['apple', 29],
    ['banana', 10],
    ['oranges', 200]
]);
console.log(fruit1);

const fruit2 = new Map();
fruit2.set('apple', 29);
fruit2.set('banana', 90);
fruit2.set('Oranges', 200);

console.log(fruit2.get('banana'));

console.log(fruit2.size);

fruit2.delete('Oranges');

console.log(fruit2.has('Oranges'));

let txt = "";
fruit1.forEach(function(value, key) {
    txt += key + " : " + value;
})

// entries(): returns an iterator object with the [key, values] in a map
let temp = "";
for (const x of fruit1.entries()) {
    temp += x;
}
console.log(temp);

/*
Datatype: string, number, boolean, object, function, date, array

2 datatypes can't contains values: null, undefined.

primitive data: string, number, boolean, undefined

complpex data: function, object

null: It is supposed to be something that doesn't exist. It is an object
*/