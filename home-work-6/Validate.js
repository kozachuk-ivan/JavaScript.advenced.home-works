// сохраняем форму в переменную
let form = document.mainForm;
// устанавливаем обработчик событий на form
form.addEventListener('input', inputsChange);
form.addEventListener('submit', submitHundler);
// используем валидатор для значений inputs
function inputsChange(event) {
    if(event.target.closest('[name="userName"]')) {
        let pattern = /\S/;
        validate(event.target, pattern);
    } else if (event.target.closest('[name="email"]')) {
        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(event.target, pattern);
    } else if (event.target.closest('[name="zip"]')) {
        let pattern = /\d{5}/;
        validate(event.target, pattern);
    }
}
// перед отправкой проверяем, все ли введено верно
function submitHundler(event) {
    let formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
        if(formElements[i].className === 'invalid') {
            alert('Вы допустили ошибку в заполнении формы');
            event.preventDefault();
            break;
        }
    }
}
// функция - шаблон валидатора для проверки инпутов
function validate(elem, pattern) {
    let res = pattern.test(elem.value);
    (!res) ? elem.className = "invalid" : elem.className = "valid";
}