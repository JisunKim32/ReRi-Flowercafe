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

$(function(){
   $('.nav>li').mouseover(function(){
      $(this).children('.sub-menu').stop().slideDown();
   }).mouseout(function(){
      $(this).children('.sub-menu').stop().slideUp();
   })
})
// === Hamburger BTN on/off & Megamenu end ===
// === Header end ===


// // === Fullpage.js ===
// new fullpage('#fullpage', {
//     sectionSelector : '.section',
//     // 섹션을 선택자를 지정
//     scrollOverflow: false,
//     // 콘텐츠가 섹션 크기보다 큰 경우 스크롤링을 허용할 지 여부
//     navigation: false,
//     // 페이지 네비게이션을 사용할지 여부
//     scrollingSpeed: 1000,
//     // 스크롤 속도
//     // responsiveWidth: 900,
//     // 해당 크기 일 때 autoScroll 비활성화
//     parallax: true,
//     // 작은 화면에서 부드러운 스크롤링
//     css3: false,
//     // fullpage css 기믄 먹여준다
//  })
// // === Fullpage.js end ===

// fullpage.js
new fullpage('#fullpage', {
    sectionSelector: '.section',
    scrollOverflow: false,
    navigation: false,
    // 아래 옵션 추가: 이 섹션에서는 일반 스크롤 허용
    scrollingSpeed: 1000,
    // 스크롤 속도
    // responsiveWidth: 900,
    // 해당 크기 일 때 autoScroll 비활성화
    parallax: true,
    // 작은 화면에서 부드러운 스크롤링
    autoScrolling: true,
    fitToSection: true,
    // normalScrollElements: '.section-normal'
  });
  
//   // Swiper.js
//   new Swiper('.mySwiper', {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: false,
//     allowTouchMove: true,   // 터치/드래그 허용
//     mousewheel: true,       // 마우스 휠로도 가로 스크롤 가능!
//     keyboard: true,         // 키보드 좌우 화살표로 이동 가능
//     speed: 1000,
//     // navigation/pagination 옵션은 필요 없으니 생략
//   });

//   const mySwiper = new Swiper('.mySwiper', {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: false,
//     allowTouchMove: true,
//     mousewheel: true,
//     keyboard: true,
//     speed: 1000,
//     on: {
//       // 휠 이벤트 버블링 방지 (마지막/첫 슬라이드가 아닐 때만 fullpage로 넘어가게)
//       reachEnd: function () {
//         // 마지막 슬라이드에서 아래로 휠을 내렸을 때 fullpage로 넘기고 싶으면 여기에 커스텀
//       },
//       reachBeginning: function () {
//         // 첫 슬라이드에서 위로 휠을 올렸을 때 fullpage로 넘기고 싶으면 여기에 커스텀
//       },
//     }
//   });
  
//   // 아래 코드로 fullpage와 swiper의 wheel 이벤트를 "적절히" 막을 수 있음
//   document.querySelector('.mySwiper').addEventListener('wheel', function (e) {
//     const swiper = mySwiper;
//     // Swiper가 처음/마지막 슬라이드가 아니면, fullpage로 wheel 이벤트 전달을 막음
//     if (
//       !(swiper.isBeginning && e.deltaY < 0) &&
//       !(swiper.isEnd && e.deltaY > 0)
//     ) {
//       e.stopPropagation();
//     }
//   });

//   const swiperEl = document.querySelector('.mySwiper');
// swiperEl.addEventListener('wheel', function(e) {
//   // wheel 방향 판단
//   const dir = e.deltaY;
//   // swiper가 마지막 슬라이드이면서 아래로 휠 내릴 때
//   if (mySwiper.isEnd && dir > 0) {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//   }
//   // swiper가 첫 슬라이드이면서 위로 휠 올릴 때
//   if (mySwiper.isBeginning && dir < 0) {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//   }
//   // 중간 슬라이드일 땐 swiper만 이동, fullpage로 wheel 이벤트 안 넘김
//   if (!mySwiper.isBeginning && !mySwiper.isEnd) {
//     e.stopPropagation();
//   }
// });
