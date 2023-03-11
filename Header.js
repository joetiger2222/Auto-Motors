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