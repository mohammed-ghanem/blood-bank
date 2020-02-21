$(document).ready(function () {



// start animate for change-password form
    var change = $(".change-pass");

    change.css("zIndex","1").animate({
        top:'0',
    },1500,function () {
        change.animate({
            width:'320px',
        });
        change.animate({
            height: '550px',
        }, 2000, function () {
            $(".container").fadeIn(3000);
        });
    });


});