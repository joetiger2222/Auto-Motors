/*global $*/
/*global document*/
/*global window*/
/*global setInterval*/
$(document).ready(function () {
    "use strict";
    $(".null").animate({
        top: "250px"
        
    }, 1500);
    $(".null").animate({
        width: "350px"
        

        
    }, 600, function () {$(".jq2").fadeIn(600); });

   
    $(".one").animate({
        top: "700px"
    });
    $(".one").animate({
        width: "350px"
    }, 600, function () {$(".jq1").fadeIn(600); });
    
    
    
    $("._p1").animate({
        top: "400px"
    }, 1100);
    $("._p2").animate({
        top: "550px"
    }, 900);
    
    $("._p3").animate({
        top: "700px"
    }, 700);
    $("._p7").animate({
        top: "850px"
    }, 500);
    
    
    
    $("._p5").animate({
        top: "850px"
    }, 500);
    $("._p4").animate({
        top: "850px"
    }, 500);
    
    $("._p6").animate({
        top: "850px"
    }, 500);
    
    $("._p6").animate({
        left: "-250px"
    }, 1200);
    $("._p5").animate({
        left: "-500px"
    }, 1000);
    $("._p4").animate({
        left: "-750px"
    }, 800);
    
    
   
  

    
    setInterval(function () {
        var mercedescls = ["Mercedes-Benz CLS-Class (C257)4 big.png", "Mercedes-Benz CLS-Class (C257)3 big.png ", "Mercedes-Benz CLS-Class (C257).png"],
            mercedescla = ["Mercedes-Benz CLA-Class1.png", "Mercedes-Benz CLA-Class2.png", "Mercedes-Benz CLA-Class.png"],
            bmw2series = ["BMW 2 Series (F44)1 big.png", "BMW 2 Series (F44)2 big.png", "BMW 2 Series (F44).png"],
            bmw4series = ["BMW 4 Series (G22)1 big.png", "BMW 4 Series (G22)5 big.png", "BMW 4 Series (G22)6 big.png"],
            auditt = ["Audi TT1 big.png", "Audi TT4 big.png", "Audi TT.png"],
            audietron = ["Audi e-tron (2020)1 big.png", "Audi e-tron (2020)3 big.png", "Audi e-tron (2020).png"],
            rand = Math.floor(Math.random() * 3);
        $("#mercedesCls").attr('src', mercedescls[rand]);
        $("#mercedesCla").attr('src', mercedescla[rand]);
        $("#bmw2Series").attr('src', bmw2series[rand]);
        $("#bmw4Series").attr('src', bmw4series[rand]);
        $("#tt").attr('src', auditt[rand]);
        $("#etron").attr('src', audietron[rand]);
        
    }, 1500);
    $(".logo").animate({
        left: "50px"
    }, 1000);
   
    $(".animate").fadeIn(1000);
    $(".animate").fadeTo(1000, 1);
    
   
    
    
    
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".fixedHeader").addClass("sticky");
        } else {
            $(".fixedHeader").removeClass("sticky");
        }
    });
    
    
    
    $("#about").click(function () {
        $(window).scrollTop(600);
        $("#info").addClass("point");
        setTimeout(function(){
          $("#info").removeClass("point");  
        },1000)
        
    });
    $("#images").click(function () {
        $(window).scrollTop(600);
         $("#img").addClass("point");
        setTimeout(function(){
          $("#img").removeClass("point");  
        },1000)
        
    });
    
    $("#rate").click(function () {
        $(window).scrollTop(1500);
        
    });
      $("#appear").click(function () {
        $(window).scrollTop(1500);
        
    });
    $("#engine").click(function () {
        $("#engineTable").css("background-color", "black");
        $("#performanceTable").css("background-color", "black");
        $(window).scrollTop(2300);
        $("#engineTable").css("background-color", "red");
        
    });
    
    $("#performance").click(function () {
        $("#engineTable").css("background-color", "black");
        $("#performanceTable").css("background-color", "black");
        $(window).scrollTop(2600);
        $("#performanceTable").css("background-color", "red");
        
    });
    
    
});