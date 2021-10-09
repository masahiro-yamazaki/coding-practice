$(function () {
  // ハンバーガーメニュー
  $('#js-hmenu-button').click(function () {
    $('body').toggleClass('no-scroll');
    $('.hmenu').toggleClass('show');
    $('.js-hmenu-open-icon').toggleClass('show');
    $('.js-hmenu-close-icon').toggleClass('show');
  });
});
