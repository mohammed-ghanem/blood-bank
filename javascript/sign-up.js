$(document).ready(function () {

// start icons in input form
    var parent = ('<div class="test"> </div> ');

    $('.chevron').wrap(parent);
    $(".calender").wrap(parent);

    $(".test").css("position","relative");

    $("<span><i class=\"fas fa-chevron-down\"></i></span>").insertBefore('.chevron');
    $("<span><i class=\"far fa-calendar-alt\"></i></span>").insertBefore(".calender");

    $("span").css({
       position:'absolute',
        top:'7px',
        left:'10px',
        cursor:'pointer',
    });
// start animate for signUp form
    var signUp = $(".sign-up");

    signUp.css("zIndex","1").animate({
        top:'0',
    },1500,function () {
        signUp.animate({
            width:'320px',
        });
        signUp.animate({
            height: '625px',
        }, 2000, function () {
            $(".container").fadeIn(3000);
        });
    });
    // end animate for signUp form



});
