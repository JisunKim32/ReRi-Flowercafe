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


// === Sec02 ===
gsap.registerPlugin(ScrollTrigger);

// 원하는 스크롤 양(100px)에 맞춰서 interpolate 시킴
gsap.to(".image-wrapper", {
  width: "1296px",
  height: "440px",
  maxWidth: "1296px",
  maxHeight: "440px",
  scrollTrigger: {
    trigger: ".sec02",
    start: "top top",           // 화면 상단에 닿으면 시작
    end: "+=50",               // 100px 아래까지 스크롤
    scrub: true,                // 부드러운 애니메이션
    // markers: true             // 디버깅시 사용
  }
});


// === Sec05 ===
// picture zoom
$(document).ready(function () {
	// make a zoomed duplicated image version to under
	$(".original").each(function () {
		// make a zooming area
		$(this).wrap('<div class="wrapper item-frame"></div>');
		// make a zoomed duplicated version
		const clonedItem = $(this).clone();
		clonedItem.addClass("zoomed item-frame");
		$(this).after(clonedItem);
	});

	// mouse events
	$(".wrapper").mouseenter(function () {
		$(".wrapper").mousemove(function () {
			let offsetPos = $(this).offset();
			let leftPos = event.pageX - offsetPos.left;
			let topPos = event.pageY - offsetPos.top;
			$(this).find(".zoomed").css({
				top: -topPos,
				left: -leftPos,
				opacity: 1
			});
		});
	});
	$(".wrapper").mouseleave(function () {
		$(this).find(".zoomed").css({
			top: 0,
			left: 0,
			opacity: 0
		});
	});
});
// === Sec05 end ===