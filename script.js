//TOPNAV icon
// Get the element with id="defaultOpen" and click on it

function myFunction() {
var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsiveNav";
     } else {
     x.className = "topnav";
     }
}
