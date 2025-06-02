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

// === Hamburger BTN on/off & Megamenu end ===
// $(function () {
//     $('body').addClass('js');

//     let $hamburger = $('.hamburger'),
//         $nav       = $('.megamenu');

//   // 초기 상태
//   $nav.hide();

//   $hamburger.on('click', function(){
//     $(this).toggleClass('is-active');  // 햄버거 X 형태 토글
//     $nav.slideToggle();             // 0.3초 동안 부드럽게 열고 닫음
//     return false;
//   });
// });
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


// === Sec02 Tab-bar ===
const tabItem = document.querySelectorAll(".sec02__tab-list a");
const tabContent = document.querySelectorAll(".sec02__tab-menu");

tabItem.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault(); // a 

        tabContent.forEach((content) => {
            content.classList.remove("active");
        });

        tabItem.forEach((content) => {
            content.classList.remove("active");
        });

        tabItem[index].classList.add("active");
        tabContent[index].classList.add("active");
    });
});
// === Sec02 Tab-bar end ===