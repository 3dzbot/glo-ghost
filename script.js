$(document).ready(function () {
  const mobMenuBtn = $('.m-menu');
  const mobMenu = $('.mob-menu');
  const tab = $('.tab');

  tab.on('click', function(){
    tab.removeClass('active');
    $(this).toggleClass('active');
    let activeTabContent = $(this).attr('data-target');
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass('visible');
  });

  mobMenuBtn.on('click', function(){
    mobMenu.toggleClass('active');
    $('body').toggleClass('no-scroll')
  });

  const mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: '.button-next',
          // prevEl: '.swiper-button-prev',
        },
        // spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      993: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    }
  });
});