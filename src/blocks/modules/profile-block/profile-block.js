document.addEventListener('mousedown', (e) => {

    let elem = e.target.closest('.form-profile__password-toggle');

    if (elem)
    {
        let input = elem.previousElementSibling;

        if (input.type === "password")
        {
            input.type = "text";

            elem.classList.add('form-profile__password-toggle_show');
        }
        else
        {
            input.type = "password";

            elem.classList.remove('form-profile__password-toggle_show');
        }
    }
});

document.addEventListener('mouseup', (e) => {

    let elem = e.target.closest('.form-profile__password-toggle');

    if (elem)
    {
        elem.previousElementSibling.focus();
    }
});

document.querySelector('.readonly-toggle').addEventListener('click', (e) => {

    let elem = e.target,
        form = elem.closest('form'),
        firstInput = form.querySelector('input'),
        sendBtn = form.querySelector('.readonly-toggle-send');

    form.querySelectorAll('input').forEach((e) => {

        e.readOnly = !e.readOnly;
    });

    firstInput.focus();

    firstInput.setSelectionRange(firstInput.value.length, firstInput.value.length);

    elem.classList.toggle('btn_main');

    elem.classList.toggle('btn_dark');

    sendBtn.classList.toggle('d-none');
});