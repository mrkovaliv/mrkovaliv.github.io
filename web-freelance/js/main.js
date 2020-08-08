$(function(){

    $('.gallery__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
  
    });

    $('.reviews-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1176,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]

    });
    $('.menu__burger-btn').on('click', function(){
      $('.menu__list').slideToggle();
    });

    new WOW().init();

});
