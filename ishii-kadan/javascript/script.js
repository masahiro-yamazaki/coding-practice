$(function () {
  // AOS
  AOS.init({
    offset: 100,
    delay: 200,
    duration: 2000,
    easing: 'ease-out',
    anchorPlacement: 'bottom-top',
    once: true
  });

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
      $('.hmenu-link').attr('tabindex', '0');
    } else {
      $(this).attr('aria-expanded', false);
      $('.hmenu').attr('aria-hidden', 'true');
      $('.hmenu-link').attr('tabindex', '-1');
    }
  });

  // 宿泊予約モーダル
  $('.header-reservation').click(function () {
    $('body').addClass('no-scroll');
    $('.modal-area').addClass('show');
  });

  $('.modal-background').click(function () {
    $('body').removeClass('no-scroll');
    $('.modal-area').removeClass('show');
  });

  $('.close-icon').click(function () {
    $('body').removeClass('no-scroll');
    $('.modal-area').removeClass('show');
  });

  // プランが選択された場合、色を変更
  $('.modal-content-plan-select').click(function () {
    $(this).removeClass('default-color');
  });

  // 日付選択
  flatpickr('#js-datepicker', {
    mode: 'range',
    minDate: 'today'
  });
});
