$(function () {

  const winH = $(window).height(),
        navH = $('.navbar').innerHeight();
  $('.slider, .carousel-inner').height(winH + navH);
});