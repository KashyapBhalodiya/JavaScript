// Regular expression is a sequence of characters that forms a search pattern.
// used for text search and text repace operartions.
// It is a single character or a more complicated pattern.
// Syntax: /pattern/modifiers;

// string methods: 
// search(): It uses an expression to search for a match and returns the position of the match
// replace(): returns a modified string where the pattern is replaced.

let text = "Hey siri what do you want?";
console.log(text.search("want"));
console.log(text.replace("siri", "google"));

// Regular expression modifiers: 
/*
i: perform case sensitive matching
g: perform a global match
m: perform multiline matching
*/
// patterns:
/*
[abc]: find any of the characters between the brackets
[0-9]: Find any of digits between brackets
(x|y): Find any of the alternatives seperated by |
*/
// metacharacters:
/*
\d: find a digit
\s: find a whitespace character
\b: find a match at the beginning and at the end of word
\uxxxx: find the unicode character specified by the hexadecimal number xxxx
*/
// Quantifiers:
/*
n+: matches any string that contains that at least one n
n*: matches any string that contains zero or more occurences of n
n?: matches any string that contains zero or one occurences of n
*/

// test(): searches a string for a pattern. returns true or false values.
const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));

// exec(): searches a string for a specified pattern and returns the found text as an object.
console.log(/e/.exec("The best things in life are free"));


/******************** Errors***********************/
// try: defines a block to run.
// catch: defines a code block to handle any error
// finally: defines a code block to run regardless of result.
// throw: defines a custom error.

/*
Error name values:
EvalError	An error has occurred in the eval() function
RangeError	A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	A syntax error has occurred
TypeError	A type error has occurred
URIError	An error in encodeURI() has occurred
*/

try {
    try {
        throw new Error("oops");
    }
    finally {
        console.log("Finally");
    }
}
catch(e) {
    console.log("Outer: ", e.message);
}

// scope: Block, function and global (scope determines visibility of variables)

// Block scope:
{
    let x = 2;
}

// local scope: they can be accessed from within function
function myFunction() {
    let carname = "volvo";
}

// global scope:
let carName = "volvo";
function globalScope() {
    console.log(carName);
}

// automatically global scope:
carFun();
function carFun() {
    carName = "volvo";
}

