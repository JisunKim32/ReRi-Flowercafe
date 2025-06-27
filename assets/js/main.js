// === Header ===
let lastScroll = 0;
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop === 0) {
        $('header').removeClass('hidden header-bg');
        lastScroll = 0;
        return;
    }

    // if (scrollTop >= 0 && scrollTop <= 937) {
    //     $('header').removeClass('hidden header-bg');
    //     lastScroll = scrollTop;
    //     return;
    // }

    if (Math.abs(scrollTop - lastScroll) < 10) return;

    if (scrollTop > lastScroll && scrollTop > 50) {
        $('header').addClass('hidden');
        // $('header').removeClass('header-bg ,header-border');
        // $('.nav li a').removeClass('header-font');
    } else {
        $('header').removeClass('hidden');
        $('header').addClass('header-bg');
        // $('.nav-logo a, .nav li a').css('color', '#222')
        // $('.hamburger-inner').css('background', '#222')
        // $('.nav li a').addClass('header-font');
    }

    lastScroll = scrollTop;
});

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

// $(function(){
//    $('.nav>li').mouseenter(function(){
//       $(this).children('.sub-menu').stop().slideDown();
//       $('.overlay').addClass('active');
//    }).mouseleave(function(){
//       $(this).children('.sub-menu').stop().slideUp();
//       $('.overlay').removeClass('active');
//    })
// })

$(function(){

  // 각 메뉴 아이템에 마우스를 올렸을 때
  $('.nav > li').on('mouseenter', function(){
      // 1. 내가 마우스를 올린 메뉴의 서브메뉴를 보여준다.
      $(this).children('.sub-menu').stop().slideDown(200);
      
      // 2. ※중요※ 나를 제외한 다른 형제 메뉴들의 서브메뉴는 숨긴다.
      $(this).siblings().children('.sub-menu').stop().slideUp(200);

      // 3. 오버레이를 활성화한다.
      $('.overlay').stop().slideDown(200);
  });

  // 내비게이션 영역 전체에서 마우스가 벗어났을 때
  // 개별 li가 아닌 .nav 전체 영역을 기준으로 합니다.
  $('.nav').on('mouseleave', function(){
      // 1. 모든 서브메뉴를 닫는다.
      $(this).find('.sub-menu').stop().slideUp(200);
      
      // 2. 오버레이를 비활성화한다.
      $('.overlay').stop().slideUp(200);
  });

});
// === Hamburger BTN on/off & Megamenu end ===
// === Header end ===



// === floating menu ===
const kakao = document.querySelector('.kakaotalk-btn');

kakao.addEventListener('mouseenter', () => {
    kakao.classList.add('active');
});
kakao.addEventListener('mouseleave', () => {
    kakao.classList.remove('active');
});
const kakao2 = document.querySelector('.kakaotalk-btn02');

kakao2.addEventListener('mouseenter', () => {
    kakao2.classList.add('active');
});
kakao2.addEventListener('mouseleave', () => {
    kakao2.classList.remove('active');
});

const toTop = document.querySelector('.btn-top');

toTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
    });
});
// === Floating Menu end ===


// // === Sec02 Tab-bar ===
// const tabItem = document.querySelectorAll(".sec02__tab-list a");
// const tabContent = document.querySelectorAll(".sec02__tab-menu");

// tabItem.forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault(); // a 

//         tabContent.forEach((content) => {
//             content.classList.remove("active");
//         });

//         tabItem.forEach((content) => {
//             content.classList.remove("active");
//         });

//         tabItem[index].classList.add("active");
//         tabContent[index].classList.add("active");
//     });
// });
// // === Sec02 Tab-bar end ===





/* === 풀와이드 드롭다운 제어 === */
$(function(){
  const $navLi = $('.nav > li');
  const $globalSub = $('.global-submenu');

  // 각 li의 .sub-menu 내용을 global-submenu에 복붙해서 띄움
  $navLi.mouseenter(function(){
    // 1. 해당 li의 sub-menu 추출
    const $submenu = $(this).children('.sub-menu').clone();
    if ($submenu.length > 0) {
      // 2. global-submenu에 내용 바꿔넣고 슬라이드다운
      $globalSub.html($submenu).addClass('show');
    } else {
      $globalSub.removeClass('show').empty();
    }
  });

  // li or global-submenu에서 마우스가 나가면 닫힘
  $('.nav, .global-submenu').mouseleave(function(e){
    // 네비/서브메뉴 위에서 벗어났을 때
    setTimeout(()=>{
      if (!$(e.relatedTarget).closest('.nav').length && !$(e.relatedTarget).closest('.global-submenu').length) {
        $globalSub.removeClass('show').empty();
      }
    }, 100);
  });

  // global-submenu 위에서 마우스가 떠났을 때 닫힘
  $globalSub.mouseleave(function(){
    $globalSub.removeClass('show').empty();
  });
});
