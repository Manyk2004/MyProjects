$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function(){
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    appendArrows: $('.team__slider-arrows'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      },
    ],
  })

  $('.team__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    appendArrows: $('.testimonials__slider-arrows'),
    appendDots: $('.testimonials__dots'),
    /* responsive: [
      {
        breakpoint: 700,
        settings: {
          
        }
      },
    ] */
  })

  $('.testimonials__prev').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  /* $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideToggle()
  }) */

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).children('.program__acc-text').slideDown()
      $(this).addClass('program__acc-link--active')
    }
  })

  $('.header__nav-list a, .header__top-btn, .footer__go-top').on('click', function(e) {
    e.preventDefault()
    var id = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({scrollTop: top }, 1500)
  })

  setInterval(() => {
    if($(window).scrollTop() > 0 && $('.header__caption').hasClass('header__caption--open') === false) {
      $('.burger-btn').addClass('burger-btn--follow')
    }
    else {
      $('.burger-btn').removeClass('burger-btn--follow')
    }
  }, 0);
  
  $('.burger-btn, .overlay, .header__caption a').on('click', function (e) {
    e.preventDefault()
    $('.header__caption').toggleClass('header__caption--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })
})