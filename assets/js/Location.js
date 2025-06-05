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


// === Modal ===
window.onload = function () {
    const openModalBtn = document.querySelectorAll('.open-modal');
    const modal = document.querySelector('#locationModal');
    const closeBtn = document.querySelector('.modal__close');
    const backdrop = document.querySelector('.modal-backdrop');

    openModalBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show')
            backdrop.classList.add('show')
        })
    })
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show')
        backdrop.classList.remove('show')
    })
}
// === Modal end ===
