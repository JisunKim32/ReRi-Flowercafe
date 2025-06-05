// 모달 열기/닫기
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('branchModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', function(e){
  e.preventDefault();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 스크롤 락
});

closeBtn.addEventListener('click', function(){
  modal.style.display = 'none';
  document.body.style.overflow = ''; // 스크롤 해제
});

// 배경 클릭 시 닫기
modal.querySelector('.modal__dim').addEventListener('click', function(){
  modal.style.display = 'none';
  document.body.style.overflow = '';
});

// 탭 전환
const tabs = modal.querySelectorAll('.modal__tabs li');
const panels = modal.querySelectorAll('.modal__panel');
tabs.forEach(tab => {
  tab.addEventListener('click', function(){
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    modal.querySelector('.modal__panel[data-panel="'+tab.dataset.tab+'"]').classList.add('active');
  });
});
