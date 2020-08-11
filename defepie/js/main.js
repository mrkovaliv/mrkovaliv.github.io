$(function(){

    $('.header__burg').on('click', function(){
      $('.header__contact').addClass('header__contact--active');
      $('.header__burg').removeClass('header__burg--active');
      $('.header__close').addClass('header__close--active');
    });
    $('.header__close').on('click', function(){
      $('.header__burg').addClass('header__burg--active');
      $('.header__contact').removeClass('header__contact--active');
      $('.header__close').removeClass('header__close--active');
    });
    

    new WOW().init();

});
