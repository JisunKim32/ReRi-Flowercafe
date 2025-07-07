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

// document.addEventListener('DOMContentLoaded', function () {
//     AOS.init();
//   });