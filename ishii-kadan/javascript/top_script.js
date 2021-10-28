$(function () {
  // トップページのヘッダースクロール時に背景色を変更
  $(window).on('scroll', function () {
    if ($('.header').height() < $(this).scrollTop()) {
      $('.header').removeClass('header--black');
      $('.header-menu').removeClass('header-menu--white');
      $('.header-image--default').css('display', 'none');
      $('.header-image--scrolled').css('display', 'block');
      $('.header-hmenu-button').removeClass('header-hmenu-button--white');
    } else {
      $('.header').addClass('header--black');
      $('.header-menu').addClass('header-menu--white');
      $('.header-image--default').css('display', 'block');
      $('.header-image--scrolled').css('display', 'none');
      $('.header-hmenu-button').addClass('header-hmenu-button--white');
    }
  });

  // お知らせのタブクリック時に表示内容を変更
  $('.info-tabs > p').click(function() {
    const tabIndex = $('.info-tabs p').index(this);
    $('.info-tabs > p').removeClass('active');
    $(this).addClass('active');
    $('.info-contents').removeClass('show').eq(tabIndex).addClass('show');
  });
});
