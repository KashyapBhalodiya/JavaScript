/*
JSON: JavaScript Object Notation
It is a text format for storing and transporting data
It is self-describing and easy to understand.

It is lightweight data interchange format
plain text written in JSON
used to send data between computers
Language independent

Why use JSON?
- easily convert JSON data into JS objects.
- two methods: JSON.parse() and JSON.stringify()
*/

var person = {name: "John", age: 31};
console.log(person.name);

// JSON: example
// {"employees":[
//     { "firstName":"John", "lastName":"Doe" },
//     { "firstName":"Anna", "lastName":"Smith" },
//     { "firstName":"Peter", "lastName":"Jones" }
// ]}

/* JSON v/s XML
doesn't use end tag, shorter, quicker to read and write, use arrays
JSON is faster than XML

data types:, string, number, object (JSON object), array, boolean, null
*/

// parse: convert javascript object
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(typeof obj);
console.log(obj);

// stringify: convert into string
const myJSON = JSON.stringify(obj);
console.log(typeof myJSON);
console.log(myJSON);

// there is 2 ways to accessing object values
const json = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(json);
console.log(myObj["name"]);
console.log(myObj.age);

a = '["Ford", "BMW", "Fiat"]';
myArray = JSON.parse(a);
console.log(myArray);
console.log(myArray[1]);

