$(document).ready(function () {



// start select from  buttons
    $(".select .btn").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

     // select by data content

        $(".all-content > div").fadeOut();
        $($(this).data('content')).fadeIn(1500);
    });
// end select from  buttons

// start select slider to show  dropdown list

            $(".setting .fa-bars ").on('click',function () {

                $(this).parent(".setting").toggleClass('list');

                if($(this).parent(".setting").hasClass('list'))
                {
                    $(".drop-list").animate({
                        right:'0',
                    },1000)
                }
                else
                {
                    $(".drop-list").animate({
                        right:'-300px',
                    },1000)

                }

            });
// end select slider to show  dropdown list
            $(".bell .fa-bell ").on('click',function () {

                $(this).parent(".bell").toggleClass('ring');

                if($(this).parent(".bell").hasClass('ring'))
                {
                    $(".drop-bell").animate({
                        left:'0',
                    },1000)
                }
                else
                {
                    $(".drop-bell").animate({
                        left:'-300px',
                    },1000)

                }

            });

// start icon for scrolling top

        $(window).scroll(function(){

            var scrollUp = 	$(".scroll");

            if($(window).scrollTop() > 1000 ) {

                scrollUp.fadeIn();
            } else {
                scrollUp.fadeOut();
            }
        });

        $(".scroll").on("click",function () {

            $("body , html").animate({
                scrollTop:'0',
            },1000)
        });

// end icon for scrolling top






});

