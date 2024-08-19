function showFullShadow(block)
{
    let elem = document.querySelector('.full-shadow');

    elem.classList.add('visible-opacity_show');

    elem.dataset.block = block;
}

function hideFullShadow()
{
    let event = new Event('click'),
        elem = document.querySelector('.full-shadow');

    document.querySelector('.' + elem.dataset.block).dispatchEvent(event)

    elem.dataset.block = '';

    elem.classList.remove('visible-opacity_show');
}

document.querySelector('.full-shadow').addEventListener('click', () => hideFullShadow());