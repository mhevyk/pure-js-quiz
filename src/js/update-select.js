/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const createOptions = (array, {isFirstOptionDisabled, defaultOptionText}) => {
    const defaultOption = `<option value='' selected ${isFirstOptionDisabled ? 'disabled' : ''}>${defaultOptionText}</option>`;
    const optionsWithValue = array.map(item => `<option value='${item}'>${item}</option>`);
    return defaultOption + optionsWithValue.join('');
}

const updateSelectsWithGroups = () => {
    const selects = document.querySelectorAll('.select[data-content="groups"]');
    const voc = new Vocabulary();
    selects.forEach(select => {
        const {disableDefaultOption, defaultOptionText} = select.dataset;
        const isFirstOptionDisabled = disableDefaultOption !== undefined;

        const selectContent = createOptions(voc.groups, {
            isFirstOptionDisabled,
            defaultOptionText: defaultOptionText || 'Виберіть розділ'
        });
        select.innerHTML = selectContent;
    });
}

const updateRange = () => {
    const range = document.querySelector('#quiz-input-answer-words-count');
    const output = range.nextElementSibling;
    const voc = new Vocabulary();
    const recordsCount = voc.data.length;
    const rangeValue = Math.ceil(recordsCount / 5);

    range.max = recordsCount;
    range.value = rangeValue;
    output.textContent = rangeValue;
}

const updateUserInterface = () => {
    updateSelectsWithGroups();
    updateRange();
}