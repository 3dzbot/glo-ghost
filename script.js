$(document).ready(function () {
  const mobMenuBtn = $('.m-menu');
  const mobMenu = $('.mob-menu');
  mobMenuBtn.on('click', function(){
    mobMenu.toggleClass('active');
    $('body').toggleClass('no-scroll')
  })
});