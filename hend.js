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

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px" ;
     }
     else{
        accordionItemBody.style.maxHeight = 0;
     }
   });
});