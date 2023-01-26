import { updatetranslationsCount } from '../../../../utils';
import { translations } from './translation-id';

const translationsContainer = document.querySelector('.additional__translations-container');

function addtranslation() {
    const newId = translations.id + 1;
    const translationHTML = `
        <label class="form__label row" data-delete-id="${newId}">
            <span class="control-icon">
                <i class="input-delete fa-solid fa-trash"></i>
            </span>
            <input type="text" class="text-input" name="translation" placeholder="Переклад" maxlength="40" required>
            <small class="feedbacks">
                <span class="feedback valid">Переклад введено правильно!</span>
                <span class="feedback invalid" data-default-feedback="Введіть переклад!">Введіть переклад!</span>
            </small>
        </label>
    `;
    translations.id++;
    translations.count++;

    translationsContainer.insertAdjacentHTML('beforeend', translationHTML);
    translationsContainer.lastElementChild.focus();
    updatetranslationsCount(translations.count);
}

function initAddtranslation() {
    const addtranslationButton = document.querySelector('#add-translation');
    addtranslationButton.addEventListener('click', addtranslation);
}

export { initAddtranslation };