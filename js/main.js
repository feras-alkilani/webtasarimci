


// oclock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



$(function () {
    'use strict';
    // Adjust Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
  
  });

  /* global $, alert, console */


$(function (){

    'use strict';

    // Adjust Header Height

    var myHeader = $('.header'),

        mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function ( ){

        myHeader.height($(window).height());

    });
    // Links Add Active Class

    $('.links li a').click (function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Adjust Bxslider List Item Center

    mySlider.each (function (){

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2);

    });


    // Triger The Bx Slider

   mySlider.bxSlider ({

        pager: false
    });

       //On Document Ready

        // Triger Mixup

        $('#container').mixItUp();

        // Adjust Shuffle Links

        $('.shuffle li').click(function (){
            $(this).addClass('selected').siblings().removeClass('selected');

        });

        $('#Container').mixItUp();
        
        // Triger Nice Scroll
        
        $('html').niceScroll({

            cusorcoler: '#1abc9c',

            cursorwidth: '10px',

            cursorvorder: '1px solid #1abc9c'
        });

});