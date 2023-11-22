const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// document ready
$(document).ready(function(){
    $('.loading').addClass('loaded');
    setTimeout(function(){
        $('.loading').css('display', 'none');
    },500);
})
    // navbar active 
    $(document).scroll(function(){
        $('.navbar ul li a').each(function(){
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   

    // slide navbar
    $(".menu-toggle input").click(function(){
    $(".navbar ul").toggleClass('slide');
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
             $('.navbar').addClass("fix-navbar");
        } else {
         $('.navbar').removeClass("fix-navbar");
         $('.navbar ul li a').first().removeClass('active');
        }	
   });