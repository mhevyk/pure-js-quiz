import { dialog } from './popups/dialog';
import { resetFeedbacks } from './forms/feedback';

function filterUnique(array) {
    return [...new Set(array)];
}

function shuffle(array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function resetInput(input) {
    input.value = null;
}

function removeContainerChildren(container) {
    container.innerHTML = '';
}

function getValueFromSelect(select) {
    return select.options[select.selectedIndex].value;
}

function scrollToTop(options = {}) {
    window.scrollTo({ top: 0, ...options });
}

function getRandomInteger(max, min = 0) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomArrayItem(array) {
    return array[getRandomInteger(array.length)];
}

function updatetranslationsCount(value) {
    const translationsCountContainer = document.querySelector('.form__add-single-word .translations__count');
    translationsCountContainer.textContent = value;
}

async function fetchTextFile(url) {
    const response = await fetch(url);
    return await response.text();
}

function getCSSRootVariable(variableName) {
    const root = document.querySelector(':root') || document.documentElement;
    const rootStyles = getComputedStyle(root);
    return rootStyles.getPropertyValue(`--${variableName}`);
}

function resetForm(form) {
    form.classList.remove('validated');
    form.reset();
    resetFeedbacks(form);
}

function downloadTextFile(filename, content) {
    const link = document.createElement('a');
    link.download = `${filename}.txt`;
    link.href = `data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(content)}`;
    link.click();
}

function handleSubmitIfFormValid(form, submitHandler) {
    const isValid = form.checkValidity();
    if (isValid) {
        submitHandler();
    }
}

function debounce(callback, time) {
    let timeout;
    return function () {
        const delayedCallback = () => callback.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(delayedCallback, time);
    };
}

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

function parseFileName(filename) {
    const dotPosition = filename.lastIndexOf('.');
    return {
        rawName: filename.substring(0, dotPosition),
        extension: filename.substring(dotPosition + 1, filename.length)
    };
}

function submitAfterDialogConfirm(content, onSubmit) {
    const {
        header = '',
        body = '',
        submitBtn = 'ОК',
        cancelBtn = 'Скасувати'
    } = content;
    
    dialog
        .header(header)
        .body(body)
        .submitBtn(submitBtn)
        .cancelBtn(cancelBtn);

    dialog.open();
    dialog.addEventListener('submit', () => {
        onSubmit?.();
        dialog.close();
    });
}

export {
    filterUnique,
    shuffle,
    resetInput,
    scrollToTop,
    removeContainerChildren,
    getValueFromSelect,
    downloadTextFile,
    handleSubmitIfFormValid,
    debounce,
    updatetranslationsCount,
    resetForm,
    submitAfterDialogConfirm,
    readFileAsync,
    fetchTextFile,
    parseFileName,
    getCSSRootVariable,
    getRandomInteger,
    getRandomArrayItem
};