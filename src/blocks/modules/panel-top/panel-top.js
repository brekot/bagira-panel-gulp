document.querySelector('.panel-user').addEventListener('click', () => {

    document.querySelector('.panel-user-block').classList.add('visible-opacity_show');

    showFullShadow('panel-user-block');
});

document.querySelector('.panel-user-block').addEventListener('click', () => {

    document.querySelector('.panel-user-block').classList.remove('visible-opacity_show');

    hideFullShadow();
});