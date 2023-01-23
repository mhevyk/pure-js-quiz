export const FORM_QUIZ_INPUT_ANSWER_OPTIONS = document.querySelector('.form__quiz-input-answer-options');
export const FORM_QUIZ_INPUT_ANSWER = document.querySelector('.form__quiz-input-answer');
export const FORM_RECORD_ADD = document.querySelector('.form__add-single-word');
export const FORM_RECORD_DELETE = document.querySelector('.form__delete-one');
export const FORM_GROUP_ADD = document.querySelector('.form__add-group');
export const FORM_GROUP_DELETE = document.querySelector('.form__delete-group');
export const FORM_FILE_IMPORT = document.querySelector('.form__import-txt');
export const FORM_VOCABULARY_CLEAR = document.querySelector('.form__vocabulary-clear');

function addColorValidateHandler(form) {
    form.addEventListener('submit', event => event.target.classList.add('validated'));
}

function addPreventDefaultHandler(form) {
    form.addEventListener('submit', event => event.preventDefault());
}

function initForms() {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        const { colorValidate } = form.dataset;
        if (colorValidate !== undefined) {
            addColorValidateHandler(form);
        }
        addPreventDefaultHandler(form);
    });
}

export { initForms };