// windows.history object contains the browser history.

// 2 methods: history.back() and history.forward()

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

// navigator: contains information about the visitor's browser.
// properties:
// navigator.cookieEnabled: returns true if cookies are enabled
// navigator.appCodeName: returns the application code name of the browser
// navigator.platform: returns the browser platform

document.getElementById("demo").innerHTML = "CookieEnabled: " + navigator.cookieEnabled;
document.getElementById("demo1").innerHTML = "AppName: " + navigator.appName;
document.getElementById("demo2").innerHTML = "AppCodeName: " + navigator.appCodeName;
document.getElementById("demo3").innerHTML = "Product Name: " + navigator.product;
document.getElementById("demo4").innerHTML = "App Version: " + navigator.appVersion;
document.getElementById("demo5").innerHTML = navigator.userAgent;
document.getElementById("demo6").innerHTML = navigator.platform;
document.getElementById("demo7").innerHTML = navigator.language;
document.getElementById("demo8").innerHTML = navigator.onLine;
document.getElementById("demo9").innerHTML = navigator.javaEnabled;

// Three kind of popup boxes: alert, confirm and propmpt
// alert box: used if you want to make sure information comes through to the user.
// confirm box: used to if you want to user to verify everything.
// propmpt: used if you want the user to input a value before entering a page.

function alertFunction() {
    alert("Hello User");
}

function verifyFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "OK";
    }
    else {
        txt = "Cancel";
    }
    document.getElementById("verify").innerText = txt;
}

function promptFunction() {
    let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("prompt").innerHTML = text;
}

