$(function () {
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
  // const mySwiper = new Swiper ('.swiper-container', {
  //   slidesPerView: 1,
  //   centeredSlides : true,
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     // 768px以上の場合
  //     768: {
  //       slidesPerView: 2.5,
  //       spaceBetween: 30
  //     },
  //     // 980px以上の場合
  //     980: {
  //       slidesPerView: 3.5,
  //       spaceBetween: 56
  //     },
  //   }
  // });

  // プライバシーポリシー
  const $submitButton = $('.js-submit-button')
  $('.js-privacy-policy-check').on('click', function () {
    const disabled = $submitButton.prop('disabled');
    $submitButton.prop('disabled', !disabled);
  });
});
