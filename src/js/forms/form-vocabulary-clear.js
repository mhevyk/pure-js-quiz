import { vocabulary } from '../vocabulary';
import { submitAfterDialogConfirm, handleSubmitIfFormValid } from '../utils';
import { DIALOG_CONTENT_CLEAR_VOCABULARY } from '../storage';

function clearVocabulary() {
    if (!vocabulary.isEmpty()) {
        vocabulary.clear();
    }
}

function confirmClearVocabulary() {
    submitAfterDialogConfirm(DIALOG_CONTENT_CLEAR_VOCABULARY, clearVocabulary);
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmClearVocabulary);
}

function initVocabularyClear() {
    const form = document.querySelector('.form__vocabulary-clear');
    form.addEventListener('submit', formSubmitHandler);
}

export { initVocabularyClear };