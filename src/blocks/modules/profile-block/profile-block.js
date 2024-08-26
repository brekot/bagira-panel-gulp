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

document.querySelectorAll('.form-profile__input_password').forEach((e) => {

    e.addEventListener('focus', (e) => {

        e.target.closest('.form-profile__line').classList.add('form-profile__line_focus');
    });
});

document.addEventListener('click', (e) => {

    let elem = e.target.closest('.form-profile__line_focus');

    document.querySelectorAll('.form-profile__line_focus').forEach((e) => {

        if (elem !== e)
        {
            e.classList.remove('form-profile__line_focus')
        }
    });

    elem = e.target.closest('.form-profile__password-toggle');

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

        input.focus();
    }
});