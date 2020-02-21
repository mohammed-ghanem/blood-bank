$(document).ready(function () {


    // start animate for login form
     var login = $(".login");

    $(login).css("zIndex","1").animate({
        top:'0',
    },1500,function () {
        $(login).animate({
           width:'320px',
        });
        $(login).animate({
            height: '550px',
        }, 2000, function () {
            $(".container").fadeIn(3000);
        });
    });
    // end animate for login form


});