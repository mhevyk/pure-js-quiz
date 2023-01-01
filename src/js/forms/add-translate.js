/* eslint-disable no-undef */
(() => {
    const addTranslateButton = document.querySelector('#add-translate');
    const translatesContainer = document.querySelector(
        '.form__add-single-word .additional__translates-container'
    );

    const addTranslate = () => {
        const translateHTML = `
            <label class='label row' data-delete-index="${COUNTERS.translateIdCounter}">
                <div class='input-delete__container'>
                    <i class='input-delete fa fa-trash' aria-hidden='true' title='Видалити переклад' data-delete-index='${COUNTERS.translateIdCounter}'></i>
                </div>
                <input type='text' name='translate' placeholder='Переклад' maxlength='40' required>
                <small class='feedbacks'>
                    <span class='feedback valid' aria-live='polite'>Переклад введено правильно!</span>
                    <span class='feedback invalid' data-default-feedback='Введіть переклад!'>Введіть переклад!</span>
                </small>
            </label>
        `;
        translatesContainer.insertAdjacentHTML('beforeend', translateHTML);
        COUNTERS.translateIdCounter++;
        updateTranslatesCount();
    }

    addTranslateButton.addEventListener('click', addTranslate);
})();