// Arrays

const mixed = ['string', 123, 12.21, [43, 12.21]]
const arr = new Array(23, 12, 90, 'Orange')
console.log(mixed)
console.log(arr)

console.log(mixed[2])
console.log(mixed.length)
console.log(Array.isArray('23'))
arr[0] = 'Pineapple'
console.log(arr)

let value = mixed.indexOf(123)
console.log(value)

mixed.push(34) // ending element insert
console.log(mixed)

mixed.unshift(100); // starting element insert
console.log(mixed)

mixed.pop() // endging element remove
mixed.shift() // starting element remove
console.log(mixed)

mixed.splice(1, 2) // 1 to 2 elemnt remove
console.log(mixed)

mixed.reverse() // original array change
console.log(mixed)

mixed.concat(arr)
console.log(mixed)

// Object

let myObj = {
    name: 'kashyap',
    university: 'ganpat',
    sex: 'male',
    marks: [1, 2, 3, 4]
}

console.log(myObj)
console.log(myObj.name)
console.log(myObj.marks)
console.log(myObj['university'])

// Functions

function greet(name) {
    console.log(`Happy Birthday ${name}. Many many happy returns of the day`)
}
let name = 'Kush'
greet(name)

const obj = {
    name: "Skill",
    game: function() {
        return "GTA";
    }
}
console.log(obj.game())

a = ['Fruits', 'vegetables', 'nuts'];
a.forEach(function(element, index, a){
    console.log(element, index, a)
});


// DOM - Document Object Model

console.log(window)

window.alert("Hello")
alert("Hello"); // window is by default include we don't write because window is global object

ptr = prompt("What is your name?");
console.log(ptr);

ptr = confirm("Are you sure you want to exit?");
console.log(ptr);

ptr = window.innerHeight;
console.log(ptr);

ptr = window.innerWidth;
console.log(ptr);

ptr = window.scrollX
ptr = scrollY
ptr = location
ptr = location.href
ptr = location.toString()
ptr = window.history


