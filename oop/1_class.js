// class: class is a template for javascript objects.
// constructor: It is executed automatically when a new object is created. It is used to initialized object properties
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
// to create an instance of object we used new keyword
let mycar1 = new Car("BMW", 2003);

console.log(mycar1);
console.log(mycar1.name);

