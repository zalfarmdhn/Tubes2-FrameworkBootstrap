$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:320,
    nav:false,
    touchDrag: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
});