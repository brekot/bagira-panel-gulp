document.addEventListener('click', (e) => {

    let elem = e.target.closest('[data-tabs-link]');

    if (elem)
    {
        document.querySelector('.tabs-panel__link_active').classList.remove('tabs-panel__link_active');

        elem.classList.add('tabs-panel__link_active')

        document.querySelectorAll('[data-tabs-block]').forEach((e) => e.classList.add('d-none'));

        document.querySelector('[data-tabs-block="' + elem.dataset.tabsLink + '"]').classList.remove('d-none');
    }
});