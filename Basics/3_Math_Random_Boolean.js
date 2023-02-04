// Math object has no consructor and the math object is static.
        
console.log(Math.PI)      
console.log(Math.SQRT2)   
console.log(Math.SQRT1_2) 
console.log(Math.LN2)     
console.log(Math.LN10)    
console.log(Math.LOG2E)   
console.log(Math.LOG10E)   

// methods:
console.log(Math.round(12.2));
console.log(Math.ceil(12.5));
console.log(Math.floor(12.5));
console.log(Math.trunc(2.5));
console.log(Math.sign(-5));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.abs(-4.7));
console.log(Math.sin(90));
console.log(Math.cos(90));
console.log(Math.min(9, 1, 4, 3, -2));
console.log(Math.max(12, 2, 4, -9, 90));
console.log(Math.random());
console.log(Math.log());

// random: returns a number between 0 and 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// A proper random function:
function getRandomFunction(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}
console.log(getRandomFunction(12, 2));

let x = false;
let y = new Boolean(false);
console.log(x);
console.log(y);

// for in and for of loop:
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text);

let language = "JavaScript, HTML, css";
let t = "";
for (let x of language) {
    t += x;
}
console.log(t);

