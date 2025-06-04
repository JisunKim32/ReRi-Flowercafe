// === Header show/hide 스크롤 ===
let lastScroll = 0;
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop === 0) {
        $('header').removeClass('hidden header-bg');
        lastScroll = 0;
        return;
    }
    if (Math.abs(scrollTop - lastScroll) < 10) return;

    if (scrollTop > lastScroll && scrollTop > 50) {
        $('header').addClass('hidden');
    } else {
        $('header').removeClass('hidden');
        $('header').addClass('header-bg');
    }
    lastScroll = scrollTop;
});

// === 햄버거버튼/메가메뉴 기존 코드 ===
$(function () {
    let $hamburger = $('.hamburger'),
        $nav = $('.megamenu');
    $nav.removeClass('active');
    $hamburger.on('click', function(){
        $(this).toggleClass('is-active');
        $nav.toggleClass('active');
        return false;
    });
});

// === 풀와이드 드롭다운 핵심 코드 ===
$(function(){
  const $navLi = $('.nav > li');
  const $globalSub = $('.global-submenu');

  $navLi.mouseenter(function(){
    const $submenu = $(this).children('.sub-menu').clone();
    if ($submenu.length > 0 && $submenu.find('li').length > 0) {
      $globalSub.html($submenu).addClass('show');
    } else {
      $globalSub.removeClass('show').empty();
    }
  });

  // 메뉴/글로벌서브메뉴에서 마우스가 빠져나가면 닫힘
  $('.nav, .global-submenu').mouseleave(function(e){
    setTimeout(function(){
      if (!$(e.relatedTarget).closest('.nav').length && !$(e.relatedTarget).closest('.global-submenu').length) {
        $globalSub.removeClass('show').empty();
      }
    }, 60);
  });

  // 글로벌서브메뉴 위에서 마우스가 떠나면 닫힘
  $globalSub.mouseleave(function(){
    $globalSub.removeClass('show').empty();
  });
});
