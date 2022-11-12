// *** For Example in HTML file

// DOM: Document Object Model

// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects
// In the DOM, all HTML elements are defined as objects.

// Property and method: Property is a value that you can get and method is an action you can do
// Ex: getElementById is a method and innerHTML is a property. 

//------------------------------------------------------------
// * DOM Document object
// It represents your web page.
// If you want to access any element in an HTML page, you always start with accessing the document object.

// Finding HTML elements
// document.getElementById(id) - Find an element by element id
// document.getElemetnsByTagName(name) - Find an element by tag name
// document.getElementsByClassName(name) - Find an element by class name

// Changing HTML elements
// element.innerHTML =  new html content ->	Change the inner HTML of an element
// element.attribute = new value	     -> Change the attribute value of an HTML element
// element.style.property = new style	 -> Change the style of an HTML element

// element.setAttribute(attribute, value)	Change the attribute value of an HTML element

// Adding and Deleting Elements
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	            Write into the HTML output stream

// *** Finding HTML Elements by CSS selectors
// *** Finding HTML Elements by HTML object Collections 

// * DOM HTML
// Changing HTML content:
// The easiest way to modify the content of an HTML element is by using the innerHTML property.
// Syntax: document.getElementById(id).innerHTML = "new HTML";

// Changing the value of an Attribute:
// Syntax: document.getElementById(id).attribute = "new HTML";

// Dynamix HTML content:
document.getElementById("first").innerHTML = "Date: " + Date();

// * DOM Forms
// *** Form validation
// *** Validate Numeric Input 
// NOTE: For automatic form validation we used required 
// Ex: <input type="text" name="fname" required>

// * DOM changing CSS
// Changnig HTML Style:
// Syntax: document.getElementById(id).style.property = new style
// document.getElementById("p2").style.color = "blue";

// * Using Events

// * HTML Collections
// It is an array-like collection of HTML elements.
// The element collection can be accessed by index(start at 0)
// *** Length property
// It returns the number of elements in an HTMLcollections.
// *** item property
// Returns the element at a specified index
// *** namedItem
// Returns the element with a specified id

/*
Difference b/w HTMLCollection and NodeList
-> HTMLCollection is a collection of document elements.
-> NodeList is a collection of document nodes (element nodes, attributes node and text nodes)
*/

// * NodeList
// It is an array-like collection of Node Objects.
// Properties and methods: entries(), forEach(), item(), keys(), length, values()

