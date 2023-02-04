// DOM: Document Object Model
// HTML DOM model is constructed as a tree of objects.
// DOM is a platform and language-nautral interface that allows programs and scriots to dynamically access and update the content, structure and style of a document.

// What we should do using DOM:
/*
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
*/

// What is the HTML DOM?
/*
HTML DOM is a standard object model and programming interface for HTML.
- HTML elements as objects
- Properties of all HTML elements.
- The methods to access all HTML elements.
- The events for all HTML elements.
*/

// HTML DOM methods are actions you can perform.
// HTML DOM properties are values that you can set or change.

// getElementById Method:
// most common way to access an element is by using the //id// of element.

// innerHTML property:
// The innerHTML property is useful for getting or replacing the content of HTML elements.

// HTML DOM Document Object:
/*
Document object represents your web page.

Finding the HTML Documents:
document.getElementById(id)	            Find an element by element id
document.getElementsByTagName(name)	    Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name

Changing HTML elements:
element.innerHTML       =  new html content	Change the inner HTML of an element
element.attribute       = new value	Change the attribute value of an HTML element
element.style.property  = new style	Change the style of an HTML element
element.setAttribute(attribute, value)	Change the attribute value of an HTML element

Adding and deleting elements:
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	        Write into the HTML output stream

Adding events Handlers:
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
*/

// Finding HTML elements
/*
There are saveral ways to find HTML elemetns:
Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
*/

document.getElementById("demo").innerHTML = "Hello World\n";

const element = document.getElementsByTagName("p");
console.log(element);

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

const z = document.getElementsByClassName("intro");

// css selectors
const p = document.querySelectorAll("p.intro");

// Finding HTML elements by HTML object collections.
const q = document.forms['frm1'];
let text = "";
for (let i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
console.log(text);

// There is some HTML objects are also accessible:
/*
document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title
*/

// Changing the HTML contents: We used getElementById(id).innerHTML

// Changing the value of an attribute:
document.getElementById("image").src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Dynamic HTML contents:
document.getElementById("demo").innerHTML = "Date: " + Date();
