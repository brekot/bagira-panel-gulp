document.querySelector('.panel-user').addEventListener('click', () => {

    let block = document.querySelector('.panel-user-block');

    if (block.classList.contains('visible-opacity_show'))
    {
        block.classList.remove('visible-opacity_show');

        hideFullShadow(); 
    }
    else
    {
        block.classList.add('visible-opacity_show');

        showFullShadow('panel-user-block');
    }
});

document.querySelector('.panel-user-block').addEventListener('click', () => {

    document.querySelector('.panel-user-block').classList.remove('visible-opacity_show');

    hideFullShadow();
});