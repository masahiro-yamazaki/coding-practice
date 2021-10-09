$(function () {
  // ハンバーガーメニュー
  $('#js-hmenu-button').click(function () {
    $('body').toggleClass('no-scroll');
    $('.hmenu').toggleClass('show');
    $('.js-hmenu-open-icon').toggleClass('show');
    $('.js-hmenu-close-icon').toggleClass('show');

    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('.hmenu').attr('aria-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', false);
      $('.hmenu').attr('aria-hidden', 'true');
    }
  });
});
