// Form validation
function validateForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}

// Validate Numeric Input:
function myFunction() {
    let x = document.getElementById("num").value;
    let text;
    if (isNan(x) || x < 1 || x > 10) {
        text = "Input is not valid";
    } else {
        text = "Everthing is perfect";
    }
    document.getElementById("demo").innerHTML = text;
}

// If we want to automatic forma validation use the required.

// Data validation:
// It is the process of ensuring that user input is clear, correct, and useful.
// It is ensure correct user input.
// server side validation: performed by a web server, after input sent to be web server.
// client side validation: performed by a web browser, after input is sent to be web server

// HTML Constraint validation:
/* It is based on:
Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods

HTML input attributes:
disabled	Specifies that the input element should be disabled
max	        Specifies the maximum value of an input element
min	        Specifies the minimum value of an input element
pattern	    Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	    Specifies the type of an input element

CSS selectors:
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values
*/

// * Changing HTML style
// document.getElementById(id).style.porperty = new style

document.getElementById("p2").style.color = "blue";

// Using events:
// HTML DOM allows you to execute code when an event occurs.
// HTML DOM style object references....