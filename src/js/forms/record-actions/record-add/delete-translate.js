import { validateFormAddInputs } from './compare-inputs';
import { submitAfterDialogConfirm, updateTranslatesCount } from '../../../utils';
import { DIALOG_CONTENT_DELETE_TRANSLATE, formAddOneTranslates } from '../../../storage';

const form = document.querySelector('.form__add-single-word');
const additionalTranslatesContainer = document.querySelector('.translates__container');

function deleteTranslate(deleteIndex) {
    const translateContainerToDelete = form.querySelector(`[data-delete-id='${deleteIndex}']`);
    translateContainerToDelete.remove();

    formAddOneTranslates.count--;
    updateTranslatesCount(formAddOneTranslates.count);
}

function showDeleteConfirm(event) {
    submitAfterDialogConfirm(DIALOG_CONTENT_DELETE_TRANSLATE, () => {
        deleteTranslate(event.target.dataset.deleteId);
        validateFormAddInputs(form);
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
