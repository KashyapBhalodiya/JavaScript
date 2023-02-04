// XMLHttpRequest: used to request data from a server.

// send a request to a server
// xhttp.open("GET", "ajax_info.txt", true); // true or false: server requests should be sent asynchronously.
// xhttp.send();

// methods:
// open(method, url, async)	Specifies the type of request
//     method: the type of request: GET or POST
//     url: the server (file) location
//     async: true (asynchronous) or false (synchronous)
// send()	    Sends the request to the server (used for GET)
// send(string)	Sends the request to the server (used for POST)

function onLoad() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "demo_get.asp?t=", Math.random());
    xhttp.send();
}

function myFunction() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo1").innerHTML = this.responseText;
    }
    xhttp.open("POST", "demo_post.asp");
    xhttp.send();
}

// Note: Sometimes async = false are used for quick testing. So the third parameter is false.

// sendRequestHeader(header, value): Adds HTTP headers to the request

// * server response

// properties:
// responseText = get the response data as a string
// responseXML = get the response data as XML data

function response1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("div1").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}

function response2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = this.responseText;
        const x = xmlDoc.getElementByTagName("ARTIST");
        let txt = "";
        for (let i = 0; i < x.length; ++i) {
            txt += x[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("div1").innerHTML = txt;
    }
    xhttp.open("GET", "ajax_info.xml");
    xhttp.send();
}

// server response methods:
// getResponseHeader()	Returns specific header information from the server resource
// getAllResponseHeaders()	Returns all the header information from the server resource

// const xhttp = new XMLHttpRequest;
// xhttp.onload = function() {
//     document.getElementById("p1").innerHTML = this.getResponseHeader();
// }
// xhttp.open("GET", "ajax_info.txt");
// xhttp.send();

const xhttp = new XMLHttpRequest;
xhttp.onload = function() {
    document.getElementById("p1").innerHTML = this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
