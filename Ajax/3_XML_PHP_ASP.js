// AJAX can be used for interactive communication with an XML file.

// Example:
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        myFunction(this);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
}

function myFunction() {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table="<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i <x.length; i++) { 
        table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("table1").innerHTML = table;
}

// AJAX is used to create more interactive applications.
// same as ASP
function showHint(str) {
    if(str.length == 0) {
        document.getElementById("txthint").innerHTML = "";
        return;
    }

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "gethint.php?q="+str);
    xhttp.send();
}