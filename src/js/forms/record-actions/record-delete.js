import { updateSelectsWithWords, updateUserInterface } from '../../render-interface';
import { getValueFromSelect, submitAfterDialogConfirm, handleSubmitIfFormValid, resetForm } from '../../utils';
import { DIALOG_CONTENT_TEMPLATE_DELETE_ONE } from '../../storage';
import { vocabulary } from '../../vocabulary';

const form = document.querySelector('.form__delete-one');
const groupSelect = form.group;
const wordSelect = form.word;

function filterWords() {
    const group = getValueFromSelect(groupSelect);
    updateSelectsWithWords(group);
}

function deleteRecordByWord(word) {
    vocabulary.delete(word);
    vocabulary.print();
    vocabulary.save();
    resetForm(form);
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
    form.addEventListener('submit', formSubmitHandler);
}

export { filterWords };