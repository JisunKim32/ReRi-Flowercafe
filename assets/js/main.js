// === Header ===
let lastScroll = 0;
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (Math.abs(scrollTop - lastScroll) < 10) return;

    if (scrollTop > lastScroll && scrollTop > 50) {
        $('header').addClass('hidden');
    } else {
        $('header').removeClass('hidden');
    }

    lastScroll = scrollTop;
});

// === floating menu ===
// document.addEventListener('DOMContentLoaded', () => {
// });
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


// === section04 image hover ===