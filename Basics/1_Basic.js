console.time("Your code Took");
console.log("Hello World");
console.log(12 + 12);
console.log(34);
console.log(true);
console.log([3, 1, 2, 4]);
console.log({harry: 'this', marks: 12});
console.table({harry: 'this', marks: 12});
console.warn('This is a warning');
console.timeEnd('Your code took');
console.error('This is an error');

// variable in JS: var, let, const

var name = "kashyap";
console.log(name);
var marks;
console.log(name, marks); // marks is undefined

// Rules for creating JS variables
/*

Can't start the number
Can start with alphabets, _ and $
Case sensitive

*/

// we are using const then we can't change the value
const ownerName = 'Bhailu';
console.log(ownerName);

var city = 'Delhi';
// Block level
{
    let city = 'Jamnagar';
    console.log(city);
}
console.log(city);

/*
Data types in JS
1. Primitive: string, numbers, NULL, Boolean, undefined, symbol
2. Non-primitive: array, object literals, functions, dates
*/

let myName = 'Harry';
console.log('Data type is: ' + (typeof myName));

let myMark = 12;
console.log('Data type is: ' + (typeof myMark));

let isDriver = true;
console.log('Data type is: ' + (typeof isDriver));

let nullVar = null;
console.log('Data type is: ' + (typeof nullVar));


let un = undefined;
console.log('Data type is: ' + (typeof un));

// Reference data types

// array
myarr = [1, 2, 3, 4, false, 'english']
console.log('Data type is: ' + (typeof myarr));

// object literals
let student_marks = {
    harry: 34,
    shubham: 12,
    Rohan: 90
};
console.log('Data type is: ' + (typeof student_marks));
console.log(student_marks);

let date = new Date();
console.log(typeof date);

// type conversion

let myVar;
myVar = String(34)
console.log(myVar, (typeof myVar))

let boolVal = String(false);
console.log(boolVal, (typeof boolVal))

let i = 745
console.log(i.toString())

let s = Number("34")
console.log(s, typeof s)

let num = parseFloat('34.43')
console.log(num, typeof num)
console.log(num.toFixed(2), typeof num)

// string operations

let html;
html = '<h1>This is heading tag</h1>' + '<p>This is a paragraph tag</p>';
html = html.concat('<br>', 'This is a new line')
console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html[2])
console.log(html.indexOf('<'))
console.log(html.lastIndexOf('>'))
console.log(html.charAt(4))
console.log(html.endsWith('new'))
console.log(html.includes('s.'))
console.log(html.substr(0, 10))
console.log(html.slice(0, 4))
console.log(html.split('>'))
console.log(html.replace('is', 'replace'))

let myHTML = 'Orange'
let myJS = 'Apple'
let answer = `Hello ${myHTML} and ${myJS}`;
console.log(answer)

// If-Else

// switch case

// For, while, Do-while

