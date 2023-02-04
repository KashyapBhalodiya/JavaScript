// modules: It allows you to break up your code into seperate files.
// this makes it easier to maintain a code-base.

// Export: Modules with functions or variables can be stored in any external file.
// Two types: named and default exports

// * named exports:
// In-line individually:
export const name = "Helli";
export const age = 40;

// ALl at once at the bottom
const firstName = "Mathur";
const lastName = "Dave";

export {firstName, lastName};

// * Deafult exports
const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};
    
export default message;

// import {name, age} from ./filename.js
// import message from ./filename.js

// * JSON: Javascript object notation
// It is a format storing and transporting data.
// It is often used when data is sent from a server to a web page.
// lightweight and language independent.
/*
Ex:
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
*/

// converting JSON text to a JS object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj);

