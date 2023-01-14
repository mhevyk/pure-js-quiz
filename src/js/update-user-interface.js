import { vocabulary } from './vocabulary';
import { updateVocabularyRange } from './components/range-input';
import { filterWords } from './forms/form-delete-one';

function createOptions(array, {isFirstOptionDisabled, defaultOptionText}) {
    const defaultOption = `<option value='' selected ${isFirstOptionDisabled ? 'disabled' : ''}>${defaultOptionText}</option>`;
    const optionsWithValue = array.map(item => `<option value='${item}'>${item}</option>`);
    return defaultOption + optionsWithValue.join('');
}

function updateSelects(contentType, defaultOptionContent, optionsContent) {
    const selects = document.querySelectorAll(`.select[data-content=${contentType}]`);
    selects.forEach(select => {
        const { disableDefaultOption, defaultOptionText } = select.dataset;
        const isFirstOptionDisabled = disableDefaultOption !== undefined;

        const selectContent = createOptions(optionsContent, {
            isFirstOptionDisabled,
            defaultOptionText: defaultOptionText || defaultOptionContent
        });

        select.innerHTML = selectContent;
    });
}


const updateSelectsWithGroups = () => updateSelects('groups', 'Виберіть розділ', vocabulary.groups);

function updateSelectsWithWords(group = '') {
    const records = vocabulary.getGroupContent(group);
    const words = records.map(record => record.word);
    updateSelects('words', 'Виберіть слово', words);
}

function updateUserInterface() {
    updateSelectsWithGroups();
    updateVocabularyRange();
    filterWords();
}

export {
    updateSelectsWithWords,
    updateUserInterface
};