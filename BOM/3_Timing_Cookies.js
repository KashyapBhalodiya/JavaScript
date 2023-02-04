// javascript can be executed in time-intervals this is called timing events.

// timing events : setTimeout() and setInterval()
// The first parameter is a function to be executed.
// The second parameter indicates the number of milliseconds before execution.

function myFunction() {
    alert("Hello World");
}

// How to stop the execution: clearTimeout

// setInterval: repeats a given function at every given time-interval.
// using the clearInterval() we stop the execution.
var myInt = setInterval(myTime, 1000);
function myTime() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

// cookies: Store the information in web pages.
// cookies are data, stored in small text files, on your computer.
// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
// Cookies were invented to solve the problem "how to remember information about the user":
    // When a user visits a web page, his/her name can be stored in a cookie.
    // Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies saved in key-value pairs.

// create a cookie with javascript:
// JS can create, read and delete cookies with document.cookie property.
document.cookie = "username = John Doe";

// By default cookie is deleted when browser is closed. So we add the expiry date.
document.cookie = "username = John Doe; expires = Thu, 20 Dec 12:00:00 UTC;";

// By default the path is current page, So we can add path also.
document.cookie = "username = John Doe; expires = Thu, 20 Dec 12:00:00 UTC; path=/;";

// To delete the cookie we can set the past date.

// How can we set, get and check the cookies:
// All in one code

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}