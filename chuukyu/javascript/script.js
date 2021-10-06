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

  // SPでハンバーガーのナビゲーションリンククリック後、ナビが閉じる対応
  $('.js-sp-hamburgar-menu').click(function() {
    $(this).attr('aria-expanded', false);
    $('#js-glabal-menu').removeClass('show');
    $('#js-glabal-menu').attr('aria-hidden', 'true');
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
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
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

// プライバシーポリシー
function checkIsSubmittable() {
  const isPrivacyPolicyChecked = $('.js-privacy-policy-check').prop('checked');
  const isNameInputted = $('.js-contact-name').val().trim().length;
  const isEmailInputted = $('.js-contact-email').val().trim().length;
  const isContentInputted = $('.js-contact-content').val().trim().length;
  const isSubmittable = isPrivacyPolicyChecked && isNameInputted && isEmailInputted && isContentInputted;
  $('.js-submit-button').prop('disabled', !isSubmittable);
}
