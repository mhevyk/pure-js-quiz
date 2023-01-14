import { updateVocabularyRange } from '../components/range-input';
import { getValueFromSelect } from '../utils';
import { vocabulary } from '../vocabulary';

const form = document.querySelector('.form__quiz-input-answer-options');
const groupSelect = form.groups;

function groupChangeHandler() {
    const group = getValueFromSelect(groupSelect);
    const groupContent = vocabulary.getGroupContent(group);
    updateVocabularyRange(groupContent.length);
}

function initPreparationOptions() {
    groupSelect.addEventListener('change', groupChangeHandler);
}

export { initPreparationOptions };