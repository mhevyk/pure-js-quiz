import { updateSelectsWithWords, updateUserInterface } from '../../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_DELETE_ONE } from '../../../storage';
import { vocabulary } from '../../../vocabulary';
import { FORM_RECORD_DELETE } from '../../form';
import {
    getValueFromSelect,
    submitAfterDialogConfirm,
    handleSubmitIfFormValid,
    resetForm
} from '../../../utils';

const {
    group: groupSelect,
    word: wordSelect
} = FORM_RECORD_DELETE;

function filterWords() {
    const group = getValueFromSelect(groupSelect);
    updateSelectsWithWords(group);
}

function deleteRecordByWord(word) {
    vocabulary.delete(word);
    vocabulary.print();
    vocabulary.save();
    resetForm(FORM_RECORD_DELETE);
    filterWords();
    updateUserInterface();
}

function confirmDeleteRecord() {
    const wordToDelete = getValueFromSelect(wordSelect);
    submitAfterDialogConfirm(DIALOG_CONTENT_TEMPLATE_DELETE_ONE(wordToDelete), () => deleteRecordByWord(wordToDelete));
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmDeleteRecord);
}

export function initFormDeleteOne() {
    groupSelect.addEventListener('change', filterWords);
    FORM_RECORD_DELETE.addEventListener('submit', formSubmitHandler);
}

export { filterWords };