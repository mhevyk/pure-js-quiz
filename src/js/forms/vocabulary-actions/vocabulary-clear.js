import { vocabulary } from '../../vocabulary';
import { submitAfterDialogConfirm, handleSubmitIfFormValid } from '../../utils';
import { DIALOG_CONTENT_CLEAR_VOCABULARY } from '../../storage';
import { updateUserInterface } from '../../render-interface';
import { FORM_VOCABULARY_CLEAR } from '../form';

function clearVocabulary() {
    if (!vocabulary.isEmpty()) {
        vocabulary.clear();
        updateUserInterface();
    }
}

function confirmClearVocabulary() {
    submitAfterDialogConfirm(DIALOG_CONTENT_CLEAR_VOCABULARY, clearVocabulary);
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmClearVocabulary);
}

function initVocabularyClear() {
    FORM_VOCABULARY_CLEAR.addEventListener('submit', formSubmitHandler);
}

export { initVocabularyClear };