window.onload = function () {
    const openModalBtn = document.querySelector('#openModal');
    const modal = document.querySelector('#locationModal');
    const closeBtn = document.querySelector('.modal__close');

    openModalBtn.onclick = function () {
        modal.classList.add('show')
    }
    closeBtn.onclick = function () {
        modal.classList.remove('show')
    }
}