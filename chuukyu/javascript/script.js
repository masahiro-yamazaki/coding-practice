$(function () {
  // ハンバーガーメニュー
  $('.js-header-menu-button').click(function () {
    $('body').toggleClass('is-drawerActive');

    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('.js-hamburgar-menu-sp').css('visibility', 'visible');
      $('.js-hamburgar-menu-sp').attr('area-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', false);
      $('.js-hamburgar-menu-sp').css('visibility', 'hidden');
      $('.js-hamburgar-menu-sp').attr('area-hidden', 'true');
    }
  });
});
