import { updateVocabularyRange } from '../components/range-input';
import { getValueFromSelect } from '../utils';
import { vocabulary } from '../vocabulary';
import { FORM_QUIZ_INPUT_ANSWER_OPTIONS } from '../forms/form';

const groupSelect = FORM_QUIZ_INPUT_ANSWER_OPTIONS.groups;

function groupChangeHandler() {
    const group = getValueFromSelect(groupSelect);
    const groupContent = vocabulary.getGroupContent(group);
    updateVocabularyRange(groupContent.length);
}

function initPreparationOptions() {
    groupSelect.addEventListener('change', groupChangeHandler);
}

export { initPreparationOptions };