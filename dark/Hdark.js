/* exported Home Cars ContactUs  AboutUs carChoosen searchCar SignOut Signup searchbyimg sendalert1 sendalert2 changeimg1 changeimg2 changeimg3 changeimg4 changeimg5 changeimg6 buynow darkMode*/
/*global $*/
/*global document*/
/* global window*/
/*global alert*/
/*global location*/

/*header*/
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
function AudiTT1() {
    "use strict";
    window.location.href = "Audi TTdark.html";
    
}
function AudiTT2() {
    "use strict";
    window.location.href = "Audi TT2dark.html";
    
}
function readmore1() {
  var dots = document.getElementById("dot1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("read1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more▼"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less▲"; 
    moreText.style.display = "inline";
  }
}
function readmore2() {
  var dots = document.getElementById("dot2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("read2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more▼"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less▲"; 
    moreText.style.display = "inline";
  }
}

function SignOut(){
    window.location.href="logindark.html";
}
function Signup(){
    window.location.href="logindark.html";
}

function sendalert1(){
    var email=document.getElementById("email").value;
    var problem=document.getElementById("problem").value;
    if(email===""||problem===""){
        alert("you must fill the empty cells");
    }else{
    alert("Sent Succesfully");
    window.location.href="contactusdark.html";
    }
}
function sendalert2(){
    var email=document.getElementById("aboutUsEmail").value;
    var problem=document.getElementById("aboutUsProblem").value;
     if(email===""||problem===""){
        alert("you must fill the empty cells");
    }else{
    alert("Sent Succesfully");
    window.location.href="aboutusdark.html";
    }
}
function changeimg1(_src){
    var etronImg=document.getElementById("etronImg");
    var replace=_src.replace("small","big");
    etronImg.src=replace;
}
function changeimg2(_src){
    var ttImg=document.getElementById("ttImg");
    var replace=_src.replace("small","big");
    ttImg.src=replace;
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
function changeimg5(_src){
    var cla=document.getElementById("claImg");
    var replace=_src.replace("small","big");
    cla.src=replace;
}
function changeimg6(_src){
    var cls=document.getElementById("clsImg");
    var replace=_src.replace("small","big");
    cls.src=replace;
}
function buynow(){
    "use strict";
    window.location.href = "paymentdark.html";
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
(function(){
      var words = [
          'WHY ARE YOU CONFUSED ???<br>PICK YOUR CAR NOW 🚗',
          'Audi :<br>"BE A BEAST....... Drive A BEAST."',
          'Mercedes-Benz :<br>"THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT."',
          'BMW :<br>"RESPECT IS EARNED NOT GIVEN."'
          
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();