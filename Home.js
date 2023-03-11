/* exported Home Cars ContactUs  AboutUs carChoosen searchCar SignOut Signup searchbyimg sendalert1 sendalert2 changeimg1 changeimg2 changeimg3 changeimg4 changeimg5 changeimg6 buynow darkMode*/
/*global document */
/* global window*/
/*global alert*/
/*global location*/
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
    window.location.href="login.html";
}
function Signup(){
    window.location.href="sign up.html";
}
function login(){
    window.location.href="login.html";
}
function searchbyimg(_src){
    var replace=_src.replace("png","html");
    window.location.href=replace;
}
function changeimg3(_src){
    var series2=document.getElementById("2seriesImg");
    var replace=_src.replace("small","big");
    series2.src=replace;
}
function changeimg4(_src){
    var series4=document.getElementById("4seriesImg");
    var replace=_src.replace("small","big");
    series4.src=replace;
}

function buynow(){
    "use strict";
    window.location.href = "payment.html";
}
        function red(){
        document.getElementById("bg").src = "red.jpg";
    }
        function blue(){
        document.getElementById("bg").src = "blue.jpg";
    }    function white(){
        document.getElementById("bg").src = "white.jpg";
    }    function black(){
        document.getElementById("bg").src = "black.jpg";
    }
    function metalic(){
        document.getElementById("bg").src = "metalic.jpg";
    }
function moreoption(){
    var pageList= document.getElementById("pageList");
    if(pageList.style.display=="block"){pageList.style.display="none";}
    else{pageList.style.display="block";}
}

function darkMode(){
    "use strict";
    var dark=document.getElementById("dark");
    if (dark.checked === true) {
    var fileName = location.href.split("/").slice(-1),
        pathName = String(fileName),
        replace = pathName.replace(".html","dark.html"),
        locaion = "dark/"+replace;
    window.location.href = locaion;
    }
}

        function insideBlack(){
        document.getElementById("inside").src = "inside/inside-black.jpg";
    }
        function insideBrown(){
        document.getElementById("inside").src = "inside/inside-brown.jpg";
    }    function insideGrey(){
        document.getElementById("inside").src = "inside/inside-grey.jpg";
    }    function insideMocha(){
        document.getElementById("inside").src = "inside/inside-brown1.jpg";
    }




