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

// === Hamburger BTN on/off & Megamenu ===
$(function () {
   let $hamburger = $('.hamburger'),
      $nav = $('.megamenu');

   $nav.removeClass('active');

   $hamburger.on('click', function () {
      $(this).toggleClass('is-active');
      $nav.toggleClass('active');

      return false;
   });
});
// === Hamburger BTN on/off & Megamenu end ===


// === Submenu ===
$(function () {
   $('.nav>li').mouseover(function () {
      $(this).children('.sub-menu').stop().slideDown();
   }).mouseout(function () {
      $(this).children('.sub-menu').stop().slideUp();
   })
})
// === Submenu end ===
// === Header end ===



// === Sec02 Kakao map ===
let mapContainer = document.getElementById('map'), // 지도를 표시할 div  
   mapOption = {
      center: new kakao.maps.LatLng(

         37.380741, 126.660885), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
   };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
let positions = [
   {
      title: '송도점',
      latlng: new kakao.maps.LatLng(
         37.379810, 126.661002)
   },
   {
      title: '테크노큐브점',
      latlng: new kakao.maps.LatLng(
         37.381392, 126.660745)
   },
];

// 마커 이미지의 이미지 주소입니다
let imageSrc = "https://i.ibb.co/Q3jmrXhc/map-marker-v4.png";

for (let i = 0; i < positions.length; i++) {

   // 마커 이미지의 이미지 크기 입니다
   let imageSize = new kakao.maps.Size(35, 53);
   // 마커 이미지를 생성합니다    
   let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

   // 마커를 생성합니다
   let marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage // 마커 이미지 
   });
}
// === Sec02 Kakao map end ===



// === Modal ===
window.onload = function () {
   const openModalBtn01 = document.querySelectorAll('.open-modal01');
   const openModalBtn02 = document.querySelectorAll('.open-modal02');
   const modal01 = document.querySelector('#locationModal01');
   const modal02 = document.querySelector('#locationModal02');
   const closeBtn = document.querySelectorAll('.modal__close');
   const backdrop = document.querySelector('.modal-backdrop');

   openModalBtn01.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         e.preventDefault();
         modal01.classList.add('show')
         backdrop.classList.add('show')
      })
   })
   openModalBtn02.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         e.preventDefault();
         modal02.classList.add('show')
         backdrop.classList.add('show')
      })
   })
   closeBtn.forEach((close) => {
      close.addEventListener('click', () => {
         modal01.classList.remove('show');
         modal02.classList.remove('show');
         backdrop.classList.remove('show');
      });
   });
   backdrop.addEventListener('click', () => {
      modal01.classList.remove('show')
      modal02.classList.remove('show')
      backdrop.classList.remove('show')
   })
}
// === Modal end ===



// === Modal01 Map ===
// === ModalMap 01_1 ===
var modalMap01_1Container = document.getElementById('modalMap01_1'), // 지도를 표시할 div 
   modalMap01_1Option = {
      center: new kakao.maps.LatLng(37.379810, 126.661002), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
   };

var modalMap01_1 = new kakao.maps.Map(modalMap01_1Container, modalMap01_1Option); // 지도를 생성합니다

var modalMap01_1ImageSrc = 'https://i.ibb.co/Q3jmrXhc/map-marker-v4.png', // 마커이미지의 주소입니다    
   modalMap01_1ImageSize = new kakao.maps.Size(35, 53), // 마커이미지의 크기입니다
   modalMap01_1ImageOption = { offset: new kakao.maps.Point(17, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var modalMap01_1MarkerImage = new kakao.maps.MarkerImage(modalMap01_1ImageSrc, modalMap01_1ImageSize, modalMap01_1ImageOption),
   modalMap01_1MarkerPosition = new kakao.maps.LatLng(37.379810, 126.661002); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var modalMap01_1Marker = new kakao.maps.Marker({
   position: modalMap01_1MarkerPosition,
   image: modalMap01_1MarkerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
modalMap01_1Marker.setMap(modalMap01_1);
// === ModalMap 01_1 end ===


// === ModalMap 01_2 ===
var modalMap01_2Container = document.getElementById('modalMap01_2'), // 지도를 표시할 div 
   modalMap01_2Option = {
      center: new kakao.maps.LatLng(37.379810, 126.661002), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
   };

   var modalMap01_2 = new kakao.maps.Map(modalMap01_2Container, modalMap01_2Option); // 지도를 생성합니다

var modalMap01_2ImageSrc = 'https://i.ibb.co/Q3jmrXhc/map-marker-v4.png', // 마커이미지의 주소입니다    
   modalMap01_2ImageSize = new kakao.maps.Size(35, 53), // 마커이미지의 크기입니다
   modalMap01_2ImageOption = { offset: new kakao.maps.Point(17, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var modalMap01_2MarkerImage = new kakao.maps.MarkerImage(modalMap01_2ImageSrc, modalMap01_2ImageSize, modalMap01_2ImageOption),
   modalMap01_2MarkerPosition = new kakao.maps.LatLng(37.379810, 126.661002); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var modalMap01_2Marker = new kakao.maps.Marker({
   position: modalMap01_2MarkerPosition,
   image: modalMap01_2MarkerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
modalMap01_2Marker.setMap(modalMap01_2);
// === Modal01 Map end ===


// === Modal02 Map ===
// === ModalMap 02_1 ===
var modalMap02_1Container = document.getElementById('modalMap02_1'), // 지도를 표시할 div 
    modalMap02_1Option = { 
        center: new kakao.maps.LatLng(37.381392, 126.660745), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var modalMap02_1 = new kakao.maps.Map(modalMap02_1Container, modalMap02_1Option); // 지도를 생성합니다

var modalMap02_1ImageSrc = 'https://i.ibb.co/Q3jmrXhc/map-marker-v4.png', // 마커이미지의 주소입니다    
    modalMap02_1ImageSize = new kakao.maps.Size(35, 53), // 마커이미지의 크기입니다
    modalMap02_1ImageOption = {offset: new kakao.maps.Point(17, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var modalMap02_1MarkerImage = new kakao.maps.MarkerImage(modalMap02_1ImageSrc, modalMap02_1ImageSize, modalMap02_1ImageOption),
    modalMap02_1MarkerPosition = new kakao.maps.LatLng(37.381392, 126.660745); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var modalMap02_1Marker = new kakao.maps.Marker({
    position: modalMap02_1MarkerPosition, 
    image: modalMap02_1MarkerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
modalMap02_1Marker.setMap(modalMap02_1);

// === ModalMap 02_2 ===
var modalMap02_2Container = document.getElementById('modalMap02_2'), // 지도를 표시할 div 
    modalMap02_2Option = { 
        center: new kakao.maps.LatLng(37.381392, 126.660745), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var modalMap02_2 = new kakao.maps.Map(modalMap02_2Container, modalMap02_2Option); // 지도를 생성합니다

var modalMap02_2ImageSrc = 'https://i.ibb.co/Q3jmrXhc/map-marker-v4.png', // 마커이미지의 주소입니다    
    modalMap02_2ImageSize = new kakao.maps.Size(35, 53), // 마커이미지의 크기입니다
    modalMap02_2ImageOption = {offset: new kakao.maps.Point(17, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var modalMap02_2MarkerImage = new kakao.maps.MarkerImage(modalMap02_2ImageSrc, modalMap02_2ImageSize, modalMap02_2ImageOption),
    modalMap02_2MarkerPosition = new kakao.maps.LatLng(37.381392, 126.660745); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var modalMap02_2Marker = new kakao.maps.Marker({
    position: modalMap02_2MarkerPosition, 
    image: modalMap02_2MarkerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
modalMap02_2Marker.setMap(modalMap02_2);
// === ModalMap 02_2 end ===
// === Modal02 Map end ===


// === Modal Map Relayout (카카오맵 다시 그리기) ===
document.addEventListener('DOMContentLoaded', function() {
   // 송도점 모달 (locationModal01)
   const locationTab01 = document.getElementById('location-tab'); // 송도점 모달의 '매장 위치' 탭 버튼
   const infoTab01 = document.getElementById('info-tab'); // 송도점 모달의 '매장 정보' 탭 버튼

   if (locationTab01) {
       // Bootstrap의 'shown.bs.tab' 이벤트를 사용하여 탭이 완전히 보여진 후 지도를 다시 그립니다.
       locationTab01.addEventListener('shown.bs.tab', function (event) {
           console.log('송도점 매장 위치 탭 활성화됨');
           modalMap01_2.relayout(); // modalMap01_2 (송도점 매장 위치 지도)를 다시 그립니다.
           modalMap01_2.setCenter(modalMap01_2MarkerPosition); // 지도의 중심을 마커 위치로 재설정
       });

       // 매장 정보 탭도 추가 (이미 잘 보이긴 하지만, 모달 리사이즈 등에도 대응 가능)
       infoTab01.addEventListener('shown.bs.tab', function (event) {
           console.log('송도점 매장 정보 탭 활성화됨');
           modalMap01_1.relayout(); // modalMap01_1 (송도점 매장 정보 지도)를 다시 그립니다.
           modalMap01_1.setCenter(modalMap01_1MarkerPosition); // 지도의 중심을 마커 위치로 재설정
       });
   }

   // 테크노큐브점 모달 (locationModal02)
   const locationTab02 = document.getElementById('location-tab02'); // 테크노큐브점 모달의 '매장 위치' 탭 버튼
   const infoTab02 = document.getElementById('info-tab02'); // 테크노큐브점 모달의 '매장 정보' 탭 버튼

   if (locationTab02) {
       locationTab02.addEventListener('shown.bs.tab', function (event) {
           console.log('테크노큐브점 매장 위치 탭 활성화됨');
           modalMap02_2.relayout(); // modalMap02_2 (테크노큐브점 매장 위치 지도)를 다시 그립니다.
           modalMap02_2.setCenter(modalMap02_2MarkerPosition); // 지도의 중심을 마커 위치로 재설정
       });
       
       // 매장 정보 탭도 추가
       infoTab02.addEventListener('shown.bs.tab', function (event) {
           console.log('테크노큐브점 매장 정보 탭 활성화됨');
           modalMap02_1.relayout(); // modalMap02_1 (테크노큐브점 매장 정보 지도)를 다시 그립니다.
           modalMap02_1.setCenter(modalMap02_1MarkerPosition); // 지도의 중심을 마커 위치로 재설정
       });
   }

   // 모달이 열릴 때 현재 활성화된 탭의 지도를 다시 그리는 로직 추가 (선택 사항이지만 권장)
   const locationModal01 = document.getElementById('locationModal01');
   const locationModal02 = document.getElementById('locationModal02');

   if (locationModal01) {
       locationModal01.addEventListener('shown.bs.modal', function () {
           // 송도점 모달이 열릴 때 현재 활성화된 탭에 따라 지도 relayout
           if (infoTab01 && infoTab01.classList.contains('active')) {
               modalMap01_1.relayout();
               modalMap01_1.setCenter(modalMap01_1MarkerPosition);
           } else if (locationTab01 && locationTab01.classList.contains('active')) {
               modalMap01_2.relayout();
               modalMap01_2.setCenter(modalMap01_2MarkerPosition);
           }
       });
   }

   if (locationModal02) {
       locationModal02.addEventListener('shown.bs.modal', function () {
           // 테크노큐브점 모달이 열릴 때 현재 활성화된 탭에 따라 지도 relayout
           if (infoTab02 && infoTab02.classList.contains('active')) {
               modalMap02_1.relayout();
               modalMap02_1.setCenter(modalMap02_1MarkerPosition);
           } else if (locationTab02 && locationTab02.classList.contains('active')) {
               modalMap02_2.relayout();
               modalMap02_2.setCenter(modalMap02_2MarkerPosition);
           }
       });
   }
});