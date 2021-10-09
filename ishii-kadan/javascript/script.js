$(function () {
  // ハンバーガーメニュー
  $('#js-hmenu-button').click(function () {
    $('body').toggleClass('no-scroll');
    $('.hmenu').toggleClass('show');
  });
});
