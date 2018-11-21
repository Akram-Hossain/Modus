$(function(){
    // Slick slider part start
    $('.ban_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
        arrows:true,
        dots: true,
        nextArrow:'.slidNext',
        prevArrow:'.slidPrv',
      autoplaySpeed: 2000,
    });
    // Slick slider part end

 // services part start
 $('.gallery_main').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    infinite:true,
    autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
 // services part end

// Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
// responsive menu closed end

// Preloader js start   
  $(window).on('load', function(){
    $('.preloader').delay(1500).fadeOut(500);
  });
// Preloader js end   

//animation scroll js start
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500);
        return false;
      }
    }
  });
//animation scroll js end

 // Back to Top Button start 
   $(window).scroll(function () {
     var sticky = $("#menu_part");
     var $scrolling = $(this).scrollTop();
     var bc2top = $(".back-top-btn");
     if ($scrolling > 150) {
       bc2top.fadeIn(1000);
     } else {
       bc2top.fadeOut(400);
     }
   });
 // Back to Top Button start 

 // another back to top button start
   $('.back-top-btn').click(function (e) {
     e.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 1500);
   });
 // another back to top button end 
});