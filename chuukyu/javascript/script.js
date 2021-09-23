$(function () {
  const headerHeight = 94;

  // AOS
  AOS.init({
    offset: 100,
    delay: 200,
    duration: 500,
    easing: 'ease-out',
    anchorPlacement: 'bottom-top',
    once: true
  });

  // ハンバーガーメニュー
  $('#js-menu-button').click(function () {
    $('body').toggleClass('is-drawerActive');

    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('#js-glabal-menu').addClass('show');
      $('#js-glabal-menu').attr('aria-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', false);
      $('#js-glabal-menu').removeClass('show');
      $('#js-glabal-menu').attr('aria-hidden', 'true');
    }
  });

  // アコーディオン
  $('.js-accordion-title').on('click', function () {
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
  });

  // swiper
  const mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // プライバシーポリシー
  const $submitButton = $('.js-submit-button')
  $('.js-privacy-policy-check').on('click', function () {
    const disabled = $submitButton.prop('disabled');
    $submitButton.prop('disabled', !disabled);
  });

  // ヘッダー固定表示時に、アンカーポイントがヘッダーと被らない対応
  $('a[href^="#"]').click(function() {
    const href= $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top - headerHeight;
    const speed = 500;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});
