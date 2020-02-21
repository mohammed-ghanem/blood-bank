$(document).ready(function () {

// start animate for forGot-password form
    var forGot = $(".forget-pass");

    forGot.css("zIndex","1").animate({
        top:'0',
    },1500,function () {
        forGot.animate({
            width:'320px',
        });
        forGot.animate({
            height: '500px',
        }, 2000, function () {
            $(".container").fadeIn(3000);
        });
    });


});