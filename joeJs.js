/* exported Home Cars ContactUs  AboutUs carChoosen searchCar SignOut Signup searchbyimg sendalert1 sendalert2 changeimg1 changeimg2 changeimg3 changeimg4 changeimg5 changeimg6 buynow darkMode getName post writeComment moreoption*/
/*global document */
/* global window*/
/*global alert*/
/*global location*/
function carChoosen() {
    "use strict";
    var carType = document.getElementById("carType"),
        carModel = document.getElementById("carModel"),
        selecteOption = carType.options[carType.selectedIndex].text;
    carModel.options.length = 0;
    if (selecteOption === "BMW") {
        var bmwArray = ["BMW 4 Series (G22)", "BMW 2 Series (F44)"];
        for (var i=0;i<bmwArray.length;i++){
                var option=document.createElement("option");
                option.value=bmwArray[i];
                option.text=bmwArray[i];
                carModel.appendChild(option);
            }
    }else if(selecteOption==="MERCEDES"){
        var mercedesArray=["Mercedes-Benz CLS-Class (C257)","Mercedes-Benz CLA-Class"];
        for(i = 0;i<mercedesArray.length;i++){
                option=document.createElement("option");
                option.value=mercedesArray[i];
                option.text=mercedesArray[i];
                carModel.appendChild(option);
            }
    }
    else if(selecteOption==="AUDI"){
        var audiArray=["Audi TT","Audi e-tron (2020)"];
           for(i = 0;i<audiArray.length;i++){
                option=document.createElement("option");
                option.value=audiArray[i];
                option.text=audiArray[i];
                carModel.appendChild(option);
            }
    }
    else{option=document.createElement("option");
        option.value="--Choose Model--";
         option.text="--Choose Model--";
         carModel.appendChild(option);
        }
}
function searchCar(){
    var carModel=document.getElementById("carModel");
    var carText=carModel.options[carModel.selectedIndex].text
    if(carText==="--Choose Model--"){
        alert("please enter valid car type");
    }else{
    var carPage=carModel.options[carModel.selectedIndex].text+".html";
    window.location.href=carPage;
    }
}

function changeimg5(_src){
    var cla=document.getElementById("claImg");
    var index=_src.indexOf("small");
    var slc=_src.slice(0,index-3)+".png";
    cla.src=slc;
}
function changeimg1(){
    var cls=document.getElementById("clsImg");
    cls.src="Mercedes-Benz CLS-Class (C257)1 big.png";
}
function changeimg2(){
    var cls=document.getElementById("clsImg");
    cls.src="Mercedes-Benz CLS-Class (C257)2 big.png";
}
function changeimg3(){
    var cls=document.getElementById("clsImg");
    cls.src="Mercedes-Benz CLS-Class (C257)6 big.png";
}
function changeimg4(){
    var cls=document.getElementById("clsImg");
    cls.src="Mercedes-Benz CLS-Class (C257)7 big.png";
}

function darkMode(){
    var dark=document.getElementById("dark");
    if (dark.checked==true) {
    var fileName = location.href.split("/").slice(-1),
        pathName = String(fileName),
        replace = pathName.replace(".html","dark.html"),
        locaion = "dark/"+replace;
    window.location.href = locaion;
    }
}

function getName(){
     var userName=document.getElementById("username").value="";
     var userNamePlaceHolder=document.getElementById("username").placeholder="Enter your Name";
   document.getElementById("username").style.visibility="visible";
    document.getElementById("getuserName").style.display="none";
    document.getElementById("next").style.display="block";
   
    
    
}
var name="";
function writeComment(){
    var userName=document.getElementById("username").value;
    if(userName==""){alert("please enter your user name")}else{
        name=userName+":";
    document.getElementById("username").value="";
    document.getElementById("username").placeholder ="Enter your comment...";
    document.getElementById("post").style.display="block";
    document.getElementById("next").style.display="none"
    
    }
}
function post(){
    var newList= document.createElement("li");
    newList.innerHTML=name;
    var commentText=document.getElementById("username").value;
    if(commentText==""){alert("please enter comment")}else{
    var details= document.createElement("ul");
    details.innerHTML=commentText;
    newList.appendChild(details);
    document.getElementById("comment").appendChild(newList);
    document.getElementById("username").style.visibility="hidden";
    document.getElementById("post").style.display="none";
    document.getElementById("getuserName").style.display="block";
    }
}
function moreoption(){
    var pageList= document.getElementById("pageList");
    if(pageList.style.display=="block"){pageList.style.display="none";}
    else{pageList.style.display="block";}
}


function zoomin() {
  var myImg = document.getElementById("claImg");
    var currWidth = myImg.clientWidth;
    if(currWidth>600){
  document.getElementById("p1").style.display="none";
  document.getElementById("p2").style.display="none";
  document.getElementById("p3").style.display="none";
  document.getElementById("p4").style.display="none";
  document.getElementById("p5").style.display="none";
  document.getElementById("p6").style.display="none";
  document.getElementById("p7").style.display="none";
    }
    if(currWidth==900){document.getElementById("video").style.display="none";}
  if (currWidth == 1100) return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomout() {
    
  var myImg = document.getElementById("claImg");
  var currWidth = myImg.clientWidth;
    if(currWidth==800){
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="block";
  document.getElementById("p4").style.display="block";
  document.getElementById("p5").style.display="block";
  document.getElementById("p6").style.display="block";
  document.getElementById("p7").style.display="block";
    }
    if(currWidth==1000){document.getElementById("video").style.display="block";}
  if (currWidth == 500) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}
function mercedes() {
    "use strict";
    window.location.href = "Mercedes_cars.html";
}function bmw() {
    "use strict";
    window.location.href = "BMW_cars.html";
}function audi() {
    "use strict";
    window.location.href = "Audi_cars.html";
}




