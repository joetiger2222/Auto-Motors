//header
function Home() {
    "use strict";
    window.location.href = "Homedark.html";
}
function Cars() {
    "use strict";
    window.location.href = "carsPagedark.html";
    
}
function ContactUs() {
    "use strict";
    window.location.href = "contactusdark.html";
                    
}
function AboutUs() {
    "use strict";
    window.location.href = "aboutusdark.html";
}
function SignOut(){
    window.location.href="logindark.html";
}
function Signup(){
    window.location.href="logindark.html";
}
function darkMode(){
    var dark=document.getElementById("dark");
    if(dark.checked===false){
         var fileName = location.href.split("/").slice(-1);
         var pathName=String(fileName);
         var replace=pathName.replace("dark","");
        var locaion="../"+replace;
        window.location.href=locaion;
    }
}
function moreoption(){
    var pageList= document.getElementById("pageList");
    if(pageList.style.display=="block"){pageList.style.display="none";}
    else{pageList.style.display="block";}
}
//end of header