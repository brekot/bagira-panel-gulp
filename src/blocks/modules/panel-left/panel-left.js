document.querySelector('.menu-btn').addEventListener('click', ()=> {

    document.body.classList.toggle('overflow-hidden');

    document.querySelector('.panel-left').classList.toggle('panel-left_open');

    document.querySelector('.menu-btn').classList.toggle('menu-btn_open');
});

document.addEventListener('click', (e) => {

    let elem = e.target;

    if (!elem.closest('.menu-btn') && !elem.closest('.panel-left') && document.querySelector('.panel-left').classList.contains('panel-left_open'))
    {
        document.body.classList.remove('overflow-hidden');

        document.querySelector('.panel-left').classList.remove('panel-left_open');
    
        document.querySelector('.menu-btn').classList.remove('menu-btn_open');
    }
});