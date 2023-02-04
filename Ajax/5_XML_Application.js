const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const xmlDoc = xhttp.responseXML; 
    const cd = xmlDoc.getElementsByTagName("CD");
    myFunction(cd, 0);
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function myFunction(cd, i) {
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
function next() {
    if (i < len-1) {
        i++;
        displayCD(i);
    }
}
  
function previous() {
    if (i > 0) {
        i--;
        displayCD(i);
    }
}