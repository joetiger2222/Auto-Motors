//header
function Home() {
    "use strict";
    window.location.href = "Home.html";
}
function Cars() {
    "use strict";
    window.location.href = "carsPage.html";
    
}
function ContactUs() {
    "use strict";
    window.location.href = "contactus.html";
                    
}
function AboutUs() {
    "use strict";
    window.location.href = "aboutus.html";
}
function SignOut(){
    window.location.href="sign up.html";
}
function Signup(){
    window.location.href="sign up.html";
}
function darkMode(){
    var dark=document.getElementById("dark");
    if (dark.checked===true) {
    var fileName = location.href.split("/").slice(-1),
        pathName = String(fileName),
        replace = pathName.replace(".html","dark.html"),
        locaion = "dark/"+replace;
    window.location.href = locaion;
    }
}
function moreoption(){
    var pageList= document.getElementById("pageList");
    if(pageList.style.display=="block"){pageList.style.display="none";}
    else{pageList.style.display="block";}
}
//end of header
//sold cars
function sold(){
    alert("This Car Has been Sold");
}
//Audi cars
//Audi TT
function auditt()
{
    "use strict";
    window.location.href="Audi TT.html";
}
//Audi e-tron
function auditron()
{
    "use strict";
    window.location.href="Audi e-tron (2020).html";
}
//BMW cars
//4 series g22
function g22()
{
    "use strict";
    window.location.href="BMW 4 Series (G22).html";
}
//2 seies f44
function f44()
{
    "use strict";
    window.location.href="BMW 2 Series (F44).html";
}
//payment page
//hide text
$(document).ready(function()
            {
                $("button").click(function()
                            {
                $("#negative").toggle("slow");
                            });
            });
