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
    $('body').addClass('js');

    var $hamburger = $('.hamburger'),
        $nav       = $('.megamenu');

  // 초기 상태
  $nav.hide();

  $hamburger.on('click', function(){
    $(this).toggleClass('is-active');  // 햄버거 X 형태 토글
    $nav.slideToggle();             // 0.3초 동안 부드럽게 열고 닫음
    return false;
  });
});


// 현수님
// 모바일 네비게이션 메뉴 생성 함수
function closeMenu() {
  if (window.innerWidth <= 1000) {
    siteNav.classList.remove('is-active', 'mobile-view');
    overlay.classList.remove('is-active');
    hamburgerButton.classList.remove('is-active');
    // mobile-nav-menu 요소를 즉시 제거하거나 숨김
    const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
    if (mobileNavMenu) {
      mobileNavMenu.style.display = 'none'; // 또는 mobileNavMenu.remove();
    }
    const activeMenus = siteNav.querySelectorAll('.active');
    activeMenus.forEach((menu) => menu.classList.remove('active'));
  } else {
    siteNav.classList.remove('is-active', 'desktop-view');
    overlay.classList.remove('is-active');
    hamburgerButton.classList.remove('is-active');
    const activeMenus = siteNav.querySelectorAll('.active');
    activeMenus.forEach((menu) => menu.classList.remove('active'));
  }
  menuOpen = false;
  updateHeaderStyle();
}
let lastScrollTop = 0;
const delta = 5;
let navbarHeight = 0;
let didScroll = false;
let menuOpen = false;
let header,
  logo,
  gostbar,
  gostToggleBtn,
  masthead,
  hamburgerButton,
  siteNav,
  overlay;
function updateNavbarHeight() {
  navbarHeight = header ? header.offsetHeight : 0;
}
function hasScrolled() {
  const st = window.scrollY || window.pageYOffset;
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    header.classList.remove('nav-down');
    header.classList.add('nav-up');
  } else {
    if (
      !menuOpen &&
      st + window.innerHeight < document.documentElement.scrollHeight
    ) {
      header.classList.remove('nav-up');
      header.classList.add('nav-down');
    }
  }
  lastScrollTop = st;
}
function updateHeaderStyle() {
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > 200 && !menuOpen) {
    header.classList.add('scrolled-200');
    logo.src = 'assets/images/logo-dark.svg';
    gostbar.src = 'assets/images/icons/gost_bar-dark.svg';
  } else if (!menuOpen) {
    header.classList.remove('scrolled-200');
    logo.src = 'assets/images/logo.svg';
    gostbar.src = 'assets/images/icons/gost_bar.svg';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  header = document.querySelector('header');
  logo = document.querySelector('.h-logo');
  gostbar = document.querySelector('.hamburger-inner');
  gostToggleBtn = document.getElementById('gostToggleBtn');
  masthead = document.getElementById('masthead');
  hamburgerButton = document.querySelector('.hamburger');
  siteNav = document.querySelector('#site-nav');
  overlay = document.querySelector('.overlay');
  updateNavbarHeight();
  if (siteNav && window.innerWidth <= 1000) {
    createMobileNavMenu();
    const allMegaMenuLists = siteNav.querySelectorAll(
      '.megamenu-box .megamenu-list'
    );
    allMegaMenuLists.forEach((list) => {
      list.style.display = 'none';
    });
  }
  hamburgerButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (window.innerWidth <= 1000) {
      siteNav.classList.toggle('is-active');
      overlay.classList.toggle('is-active');
      hamburgerButton.classList.toggle('is-active');
      if (siteNav.classList.contains('is-active')) {
        siteNav.classList.add('mobile-view');
        siteNav.classList.remove('desktop-view');
        if (!siteNav.querySelector('.mobile-nav-menu')) {
          createMobileNavMenu();
        } else {
          // 메뉴가 열릴 때 mobile-nav-menu가 이미 있다면 표시
          const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
          if (mobileNavMenu) {
            mobileNavMenu.style.display = 'block';
          }
        }
        const allMegaMenuLists = siteNav.querySelectorAll(
          '.megamenu-box .megamenu-list'
        );
        allMegaMenuLists.forEach((list) => {
          list.style.display = 'none';
        });
      } else {
        // 메뉴가 닫힐 때 mobile-nav-menu를 즉시 제거하거나 숨김
        siteNav.classList.remove('mobile-view');
        const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
        if (mobileNavMenu) {
          mobileNavMenu.style.display = 'none'; // 또는 mobileNavMenu.remove();
        }
        const activeMenus = siteNav.querySelectorAll('.active');
        activeMenus.forEach((menu) => menu.classList.remove('active'));
      }
    } else {
      siteNav.classList.toggle('is-active');
      overlay.classList.toggle('is-active');
      hamburgerButton.classList.toggle('is-active');
      if (siteNav.classList.contains('is-active')) {
        siteNav.classList.add('desktop-view');
        siteNav.classList.remove('mobile-view');
        const allMegaMenuLists = siteNav.querySelectorAll(
          '.megamenu-box .megamenu-list'
        );
        allMegaMenuLists.forEach((list) => {
          list.style.display = 'block';
        });
      } else {
        siteNav.classList.remove('desktop-view');
      }
    }
    if (menuOpen) {
      header.classList.remove('scrolled-200');
      logo.src = 'assets/images/logo.svg';
      gostbar.src = 'assets/images/icons/w-close.svg';
    } else {
      updateHeaderStyle();
      // 닫기 버튼을 눌렀을 때 mobile-nav-menu를 즉시 제거하거나 숨김 (추가 안전장치)
      if (window.innerWidth <= 1000) {
        const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
        if (mobileNavMenu) {
          mobileNavMenu.style.display = 'none'; // 또는 mobileNavMenu.remove();
        }
      }
    }
  });
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('is-active')) {
      closeMenu();
    }
  });
  window.addEventListener('scroll', () => {
    didScroll = true;
    updateHeaderStyle();
  });
  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);
  window.addEventListener('resize', () => {
    if (siteNav && siteNav.classList.contains('is-active')) {
      if (window.innerWidth <= 1000) {
        siteNav.classList.add('mobile-view');
        siteNav.classList.remove('desktop-view');
        if (!siteNav.querySelector('.mobile-nav-menu')) {
          createMobileNavMenu();
        }
        const allMegaMenuLists = siteNav.querySelectorAll(
          '.megamenu-box .megamenu-list'
        );
        allMegaMenuLists.forEach((list) => {
          list.style.display = list.classList.contains('active')
            ? 'block'
            : 'none';
        });
      } else {
        siteNav.classList.add('desktop-view');
        siteNav.classList.remove('mobile-view');
        const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
        if (mobileNavMenu) {
          mobileNavMenu.style.display = 'none'; // 숨김 처리
        }
        const allMegaMenuLists = siteNav.querySelectorAll(
          '.megamenu-box .megamenu-list'
        );
        allMegaMenuLists.forEach((list) => {
          list.style.display = 'block';
        });
      }
    } else {
      if (window.innerWidth > 1000) {
        const mobileNavMenu = siteNav.querySelector('.mobile-nav-menu');
        if (mobileNavMenu) {
          mobileNavMenu.style.display = 'none'; // 숨김 처리
        }
      }
    }
    updateNavbarHeight();
  });
});


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


// === section02 signature menu ===
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