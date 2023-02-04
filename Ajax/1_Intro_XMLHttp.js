// Using AJAX we can 
// 1. Read data from a web server - after the page has loaded.
// 2. Update a web page without reloading the page.
// 3. send data to a web server - in the background.

// Let us see one example when the page content is change.

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    };
    xhttp.open("GET", "./1_ajax.txt");
    xhttp.send();
}

/*
what is AJAX:
AJAX = Asynchronous Javascript and XML. It is not a programming language

It is used a combination of:
    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - javascript and HTML DOM (to display the data)

-> AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
This means that it is possible to update parts of a web page, without reloading the whole page.

How it works?
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

Modern fetch API
The fetch API interface allows web browsers to make http requests to web servers.

*/

// * XMLHttpRequest object
/*
Keystone of AJAX is the XMLHttpRequeset object
    - Create an XMLHttpRequest object
    - Define a callback function
    - Open the XMLHttpRequest object
    - Send a Request to a server
*/

// xmlhttprequest object: used to exchange the data with a web server behind the scenes. 
// This means that it is possible update parts of a web page, without reloading the whole page.

// create xmlhttprequest object:
// variable = new XMLHttpRequest();

// define a callback function:
// xhttp.onload = function() {}

// send a request:
// xhttp.open("GET", "text file");
// xhttp.send()

// XMLHttpRequest object methods:
/*
new XMLHttpRequest()	        Creates a new XMLHttpRequest object

abort()	                        Cancels the current request

getAllResponseHeaders()	        Returns header information

getResponseHeader()	            Returns specific header information
open(method, url, async, user, psw)	Specifies the request
                                    method: the request type GET or POST
                                    url: the file location
                                    async: true (asynchronous) or false (synchronous)
                                    user: optional user name
                                    psw: optional password

send()	                        Sends the request to the server, Used for GET requests

send(string)	                Sends the request to the server., Used for POST requests

setRequestHeader()	            Adds a label/value pair to the header to be sent
*/

// XMLHttpRequest object properties:
/*
onload	Defines a function to be called when the request is recieved (loaded)

onreadystatechange	Defines a function to be called when the readyState property changes

readyState	Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready

responseText	Returns the response data as a string

responseXML	Returns the response data as XML data

status	Returns the status-number of a request (https://www.w3schools.com/tags/ref_httpmessages.asp)
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    For a complete list go to the Http Messages Reference

statusText	Returns the status-text (e.g. "OK" or "Not Found")
*/

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    // this event is tiggered four times for each change in the readystate.
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./1_ajax.txt");
    xhttp.send();
}