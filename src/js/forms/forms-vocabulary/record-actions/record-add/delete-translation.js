import { validateFormAddInputs } from './compare-inputs';
import { submitAfterDialogConfirm, updatetranslationsCount } from '../../../../utils';
import { DIALOG_CONTENT_DELETE_translation } from '../../../../storage';
import { FORM_RECORD_ADD } from '../../../form';
import { translations } from './translation-id';

const additionaltranslationsContainer = document.querySelector('.translations__container');

function deleteTranslation(deleteIndex) {
    const translationContainerToDelete = FORM_RECORD_ADD.querySelector(`[data-delete-id='${deleteIndex}']`);
    translationContainerToDelete.remove();

    translations.count--;
    updatetranslationsCount(translations.count);
}

function showDeleteConfirm(event) {
    submitAfterDialogConfirm(DIALOG_CONTENT_DELETE_translation, () => {
        deleteTranslation(event.target.dataset.deleteId);
        validateFormAddInputs(FORM_RECORD_ADD);
    });
}

function deleteTranslationHandler(event) {
    if (event.target.classList.contains('input-delete')) {
        showDeleteConfirm(event);
    }
}

function initDeletetranslation() {
    additionaltranslationsContainer.addEventListener('click', deleteTranslationHandler);
}

export { initDeletetranslation };
