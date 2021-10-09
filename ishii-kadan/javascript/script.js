$(function () {
  // トップページのヘッダースクロール時に背景色を変更
  $(window).on('scroll', function () {
    if ($('.header').height() < $(this).scrollTop()) {
      $('.header').removeClass('header--black');
      $('.header-menu').removeClass('header-menu--white');
      $('.header-image--default').css('display', 'none');
      $('.header-image--scrolled').css('display', 'block');
    } else {
      $('.header').addClass('header--black');
      $('.header-menu').addClass('header-menu--white');
      $('.header-image--default').css('display', 'block');
      $('.header-image--scrolled').css('display', 'none');
    }
  });
});
