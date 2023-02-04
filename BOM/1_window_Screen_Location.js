// It allows javascript to "talk to" the browser.
// BOM - Browser Object Model

// window object: It is supported by all browsers. It represents the browser's window.
// all global JS objects, functions and variables automatically become members of the window object.
// document object property is a property of windows object.
    // window.document.getElementId("header");

// window size: Two property determine the size of the browser window.
// 1. window.innerHeight
// 2. window.innerWidth

document.getElementById("demo").innerHTML = "InnerWidth: " + window.innerWidth + " and InnerHeight: " + window.innerHeight;

// other window methods:
// window.open() = open a new window
// window.close() = close the current window
// window.moveTo() = move to current window
// window.resizeTo() = resize the current window

// window.screen object contains information about user's screen.
// properties: screen.width, height, availWidth, availHeight, colorDepth, pixelDepth
document.getElementById("demo2").innerHTML = "screen width: " + screen.width;

// window.location used to get current page address (URL) and to redirect the browser to a new page.
// properties:
// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

document.getElementById("demo3").innerHTML = "URL: " + window.location.href + " and hostname: " + window.location.hostname;
document.getElementById("demo4").innerHTML = "Protocol: " + window.location.protocol;

function newDoc() {
    window.location.assign("https://cplusplus.com/");
}

