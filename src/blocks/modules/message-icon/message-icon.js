document.querySelector('.message-icon_active').addEventListener('click', () => {

    let block = document.querySelector('.window-message');

    if (block.classList.contains('window-message_show'))
    {
        block.classList.remove('window-message_show');

        hideFullShadow(); 
    }
    else
    {
        block.classList.add('window-message_show');

        showFullShadow('message-icon_active');
    }
});

document.querySelector('.window-message-close_window').addEventListener('click', () => {

    document.querySelector('.window-message').classList.remove('window-message_show');

    hideFullShadow();
});