import { updateVocabularyRange } from './components/range-input';

const defaultOptions = {
    range: {
        value: null,
        max: null
    },
    mixQuestionType: true,
    showGroups: true
};

function initOptions() {
    const optionsData = localStorage.getItem('optionsAppData');
    return optionsData ? JSON.parse(optionsData) : defaultOptions;
}

export const options = initOptions();

function initOptionInputs() {
    const optionsInputs = document.querySelectorAll('[data-option]');
    optionsInputs.forEach(input => {
        const optionName = input.dataset.option;
        const optionValue = options[optionName];
        options[optionName] = optionValue;

        switch(input.type) {
            case 'checkbox':
                input.checked = optionValue;
                break;
            case 'range':
                updateVocabularyRange(optionValue.max, optionValue.value);
                break;
        }
    });
}

function saveOptions() {
    const optionsDataToSave = JSON.stringify(options);
    localStorage.setItem('optionsAppData', optionsDataToSave);
}

export {
    initOptionInputs,
    saveOptions
};