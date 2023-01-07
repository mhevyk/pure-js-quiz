import { vocabulary } from './vocabulary';
import { updateVocabularyRange } from './components/range-input';

const createOptions = (array, {isFirstOptionDisabled, defaultOptionText}) => {
    const defaultOption = `<option value='' selected ${isFirstOptionDisabled ? 'disabled' : ''}>${defaultOptionText}</option>`;
    const optionsWithValue = array.map(item => `<option value='${item}'>${item}</option>`);
    return defaultOption + optionsWithValue.join('');
};

const updateSelectsWithGroups = () => {
    const selects = document.querySelectorAll('.select[data-content="groups"]');
    selects.forEach(select => {
        const {disableDefaultOption, defaultOptionText} = select.dataset;
        const isFirstOptionDisabled = disableDefaultOption !== undefined;

        const selectContent = createOptions(vocabulary.groups, {
            isFirstOptionDisabled,
            defaultOptionText: defaultOptionText || 'Виберіть розділ'
        });
        select.innerHTML = selectContent;
    });
};

export const updateUserInterface = () => {
    updateSelectsWithGroups();
    updateVocabularyRange();
};