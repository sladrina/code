// Ex 1
const originalText = document.querySelector('.original-text').innerHTML;
const dqAll = document.querySelector('.dq-all');
const dqCorrect = document.querySelector('.dq-correctly');
const replaceAll = document.querySelector('.btn-all');
const replaceCorrect = document.querySelector('.btn-correctly');

replaceAll.addEventListener('click', () => {
    let text = originalText;
    const exp = /'/gm;
    text = text.replace(exp, '"');
    dqAll.innerHTML = text;
});

// Ex 3
let form = document.forms.form;
const regName = /^[a-zA-Z-]+$/gm;
const regTel = /^\+\d\(\d{3}\)\d{3}-\d{4}$/gm;
const regEmail = /^\w+[.-]?\w+@\w+\.\w+$/gmi;
let send = form.elements.btnSend;
let errorField = document.querySelector('.errorField');

send.addEventListener('click', (e) => {
    e.preventDefault();
    let name = form.elements.nameField.value;
    let tel = form.elements.telField.value;
    let email = form.elements.emailField.value;
    errorField.innerHTML = '';
    let countError = 0;

    let testName = regName.test(name);
    if (!testName)
    {
        errorField.innerHTML += 'Имя должно содержать только буквы!' + '<br>';
        document.querySelector('#inputName').classList.add('red');
        countError++;
    }

    let testTel = regTel.test(tel);
    if (!testTel)
    {
        errorField.innerHTML += 'Телефон подчиняется шаблону +7(000)000-0000!\n' + '<br>';
        document.querySelector('#inputPhone').classList.add('red');
        countError++;
    }

    let testEmail = regEmail.test(email);
    if (!testEmail)
    {
        errorField.innerHTML += 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или' +
            ' my-mail@mail.ru!' + '<br>';
        document.querySelector('#inputEmail').classList.add('red');
        countError++;
    }

    if (countError == 0)
    {
        alert('Форма отправлена!')
    }
});