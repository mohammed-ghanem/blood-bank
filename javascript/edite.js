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


});