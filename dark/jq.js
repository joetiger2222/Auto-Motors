/*global $*/
/*global document*/
$(document).ready(function () {
    "use strict";
    $(".null").animate({
        top: "300px"
        
    }, 1500);
    $(".null").animate({
        width: "350px"
    }, 1000, function () {$(".jq2").fadeIn(800); });   
    
    
    $(".one").animate({
        top: "280px"
    },1000);
    $(".one").animate({
        width: "350px"
    }, 1500, function () {$(".jq1").fadeIn(800); });
    
    });
