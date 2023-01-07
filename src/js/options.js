import { updateVocabularyRange } from './components/range-input';

const defaultOptions = {
    questionsCount: 1,
    mixQuestionType: true,
    showGroups: true
};

const initOptions = () => {
    const optionsData = localStorage.getItem('optionsAppData');
    return optionsData ? JSON.parse(optionsData) : defaultOptions;
};

export const options = initOptions();

export const initOptionInputs = () => {
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
                updateVocabularyRange(optionValue);
                break;
        }
    });
};

export const saveOptions = () => {
    const optionsDataToSave = JSON.stringify(options);
    localStorage.setItem('optionsAppData', optionsDataToSave);
};