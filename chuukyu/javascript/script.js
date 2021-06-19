$(function () {
  // ハンバーガーメニュー
  $('.js-header-menu-button').click(function () {
    $('body').toggleClass('is-drawerActive');

    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('.js-hamburgar-menu-sp').addClass('show');
      $('.js-hamburgar-menu-sp').attr('aria-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', false);
      $('.js-hamburgar-menu-sp').removeClass('show');
      $('.js-hamburgar-menu-sp').attr('aria-hidden', 'true');
    }
  });
});
