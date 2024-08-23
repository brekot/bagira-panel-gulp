document.addEventListener('change', (e) => {

    let elem = e.target.closest('.input-file__input');

    if (elem)
    {
        let count = elem.files.length,
            label = elem.closest('.input-file').querySelector('.input-file__label-text');

        if (count == 1)
        {
            label.innerText = elem.files[0].name;
        }
        else
        {
            label.innerText = 'Выбрано файлов: ' + count;
        }
    }
});