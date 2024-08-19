window.showFullShadow = function(block)
{
    let elem = document.querySelector('.full-shadow');

    elem.classList.add('visible-opacity_show');

    elem.dataset.block = block;
}

window.hideFullShadow = function()
{
    let elem = document.querySelector('.full-shadow');

    elem.dataset.block = '';

    elem.classList.remove('visible-opacity_show');
}

document.querySelector('.full-shadow').addEventListener('click', (e) => {

    const event = new Event('click');

    document.querySelector('.' + e.target.dataset.block).dispatchEvent(event);

    hideFullShadow();
});