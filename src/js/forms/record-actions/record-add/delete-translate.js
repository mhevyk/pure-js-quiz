import { validateFormAddInputs } from './compare-inputs';
import { submitAfterDialogConfirm, updateTranslatesCount } from '../../../utils';
import { DIALOG_CONTENT_DELETE_TRANSLATE } from '../../../storage';
import { FORM_RECORD_ADD } from '../../form';
import { translates } from './translate-id';

const additionalTranslatesContainer = document.querySelector('.translates__container');

function deleteTranslate(deleteIndex) {
    const translateContainerToDelete = FORM_RECORD_ADD.querySelector(`[data-delete-id='${deleteIndex}']`);
    translateContainerToDelete.remove();

    translates.count--;
    updateTranslatesCount(translates.count);
}

function showDeleteConfirm(event) {
    submitAfterDialogConfirm(DIALOG_CONTENT_DELETE_TRANSLATE, () => {
        deleteTranslate(event.target.dataset.deleteId);
        validateFormAddInputs(FORM_RECORD_ADD);
    });
}

function deleteTranslateHandler(event) {
    if (event.target.classList.contains('input-delete')) {
        showDeleteConfirm(event);
    }
}

function initDeleteTranslate() {
    additionalTranslatesContainer.addEventListener('click', deleteTranslateHandler);
}

export { initDeleteTranslate };
