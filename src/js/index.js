window.$ = window.jQuery = require('jquery');



$(document).ready(function(){
    $('.header').on('click', '.header__mobile-menu, .navigation__close', function(){
        $('.navigation').slideToggle();
    })

    const reviews = new Swiper('.reviews__slider', {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
       
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
      
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top 
        }, 500);
      });

});

$(window).resize(function() {
    if($(window).width()>=768) {
        $('.navigation').attr('style', '');
     }
 })
 
 $(window).scroll(function(){
     const header = $('.header');
     const windowPosition = $(window).scrollTop();
     const bannerHeight = $('#banner').outerHeight();
     
     
     if(windowPosition >= bannerHeight - header.outerHeight()){
        header.addClass('stiky');
     }
     else {
        header.removeClass('stiky');
     }
 })
