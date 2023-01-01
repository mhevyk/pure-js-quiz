/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const filterUnique = (array) => [...new Set(array)];
const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());
const resetInput = (input) => input.value = null;
const removeContainerChildren = (container) => container.innerHTML = '';
const getValueFromSelect = (select) => select.options[select.selectedIndex].value;

const handleSubmitIfFormValid = (form, submitHandler) => {
    const isValid = form.checkValidity();
    if (isValid) {
        submitHandler();
    }
}

const updateTranslatesCount = (value) => {
    const translatesCountContainer = document.querySelector(
        '.form__add-single-word .translates__count'
    );
    const translates = document.querySelectorAll(
        '.form__add-single-word [name="translate"]'
    );
    translatesCountContainer.textContent = value ?? translates.length;
}

const resetForm = (form) => {
    form.classList.remove('validated');
    form.reset();
    resetFeedbacks(form);
}

const confirmDecorator = ({header = '', body = '', submitBtn = 'ОК', cancelBtn = 'Скасувати'}, onDialogSubmitClick) => {
    const dialog = new Dialog();
    dialog.header(header);
    dialog.body(body);
    dialog.submitBtn(submitBtn);
    dialog.cancelBtn(cancelBtn);

    dialog.open();
    dialog.addEventListener('submit', () => {
        onDialogSubmitClick();
        dialog.close();
    });
}

const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

const parseFileName = (filename) => {
    const dotIndex = filename.lastIndexOf('.');
    return {
        rawName: filename.substring(0, dotIndex),
        extension: filename.substring(dotIndex + 1, filename.length)
    };
}