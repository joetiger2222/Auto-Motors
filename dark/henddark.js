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
    if(dark.checked==false){
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