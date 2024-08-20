document.querySelector('.menu-btn').addEventListener('click', ()=> {

    document.body.classList.toggle('overflow-hidden');

    document.querySelector('.panel-left').classList.toggle('panel-left_open');

    document.querySelector('.menu-btn').classList.toggle('menu-btn_open');
});