import { dialog } from './popups/dialog';
import { resetFeedbacks } from './forms/feedback';

export const filterUnique = (array) => [...new Set(array)];
export const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());
export const resetInput = (input) => input.value = null;
export const removeContainerChildren = (container) => container.innerHTML = '';
export const getValueFromSelect = (select) => select.options[select.selectedIndex].value;

export const downloadTextFile = (filename, content) => {
    const link = document.createElement('a');
    link.download = `${filename}.txt`;
    link.href = `data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(content)}`;
    link.click();
};

export const handleSubmitIfFormValid = (form, submitHandler) => {
    const isValid = form.checkValidity();
    if (isValid) {
        submitHandler();
    }
};

export function debounce(callback, time) {
    let timeout;
    return function () {
        const delayedCallback = () => callback.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(delayedCallback, time);
    };
}

export const updateTranslatesCount = (value) => {
    const translatesCountContainer = document.querySelector('.form__add-single-word .translates__count');
    translatesCountContainer.textContent = value;
};

export const resetForm = (form) => {
    form.classList.remove('validated');
    form.reset();
    resetFeedbacks(form);
};

export const submitAfterDialogConfirm = (content, onSubmit) => {
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
        onSubmit();
        dialog.close();
    });
};

export const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
};

export const fetchTextFile = async (url) => {
    const response = await fetch(url);
    return await response.text();
};

export const parseFileName = (filename) => {
    const dotIndex = filename.lastIndexOf('.');
    return {
        rawName: filename.substring(0, dotIndex),
        extension: filename.substring(dotIndex + 1, filename.length)
    };
};