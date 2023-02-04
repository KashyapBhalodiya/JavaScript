// javascript callbacks: A callback is a function passed as an argument to another function.

function myDisplayer(some) {
    // document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// when to use a callback:
// where callbacks really shine are in asynchronous functions, where one function has to wait for another function.

// waiting for a timeout
setTimeout(myFunction, 3000);
function myFunction() {
    console.log(5 * 5);
}
myFunction();

// waiting for intervals:
setInterval(myFun, 2000);
function myFun() {
    let d = new Date();
    console.log(d.getTime());
}
myFun();

// promise: It is something that is completed in the future.

// let myPromise = new Promise(function(myResovlve, myReject) {
//     myResovlve();
//     myReject();
// });

// myPromise.then(
//     function(value)
// );

// Async: async function declaration declares an async function where the await keyword is permitted within the function body.
async function myFunction1() {
    return "Hello";
}

// same as above
function myFunction2() {
    return Promise.resolve("Hello");
}

// await: await keyword makes the function pause the execution and wait for a resolved promise before
// let value = await promise;

async function myDisplay() {
    let mypromise = new Promise(function(resolve, reject) {
        resolve("Hello");
    });
    document.getElementById("demo").innerHTML = await mypromise;
}
myDisplay();

