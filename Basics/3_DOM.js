let a = document;
console.log(a);
// typeof document

a = document.all
a = document.body
a = document.form
Array.from(a).forEach(function(element) {
    console.log(element)
})

a = document.links

console.log(a)