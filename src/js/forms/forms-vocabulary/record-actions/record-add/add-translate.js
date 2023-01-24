import { updateTranslatesCount } from '../../../../utils';
import { translates } from './translate-id';

const translatesContainer = document.querySelector('.additional__translates-container');

function addTranslate() {
    const newId = translates.id + 1;
    const translateHTML = `
        <label class='form__label row' data-delete-id="${newId}">
            <div class='input-delete__container'>
                <i class='input-delete fa fa-trash' aria-hidden='true' data-delete-id='${newId}'></i>
            </div>
            <input type='text' class='text-input' name='translate' placeholder='Переклад' maxlength='40' required>
            <small class='feedbacks'>
                <span class='feedback valid'>Переклад введено правильно!</span>
                <span class='feedback invalid' data-default-feedback='Введіть переклад!'>Введіть переклад!</span>
            </small>
        </label>
    `;
    translates.id++;
    translates.count++;

    translatesContainer.insertAdjacentHTML('beforeend', translateHTML);
    translatesContainer.lastElementChild.focus();
    updateTranslatesCount(translates.count);
}

function initAddTranslate() {
    const addTranslateButton = document.querySelector('#add-translate');
    addTranslateButton.addEventListener('click', addTranslate);
}

export { initAddTranslate };