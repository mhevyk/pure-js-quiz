import { resetFeedbacks } from './feedback';
import { formAddOneTranslates, DIALOG_CONTENT_RESET_TRANSLATES } from '../storage';
import {
    submitAfterDialogConfirm,
    resetInput,
    removeContainerChildren,
    updateTranslatesCount
} from '../utils';

const resetTranslatesButton = document.querySelector('#add-translate-reset');
const translatesContainer = document.querySelector('.additional__translates-container');

function resetTranslates() {
    const form = document.querySelector('.form__add-single-word');
    const firstTranslateInput = form.querySelector('[name="translate"]');

    formAddOneTranslates.id = 1;
    formAddOneTranslates.count = 1;

    resetInput(firstTranslateInput);
    resetFeedbacks(form, '[data-reset]');
    removeContainerChildren(translatesContainer);
    updateTranslatesCount(formAddOneTranslates.count);
}

function confirmResetTranslates() {
    submitAfterDialogConfirm(DIALOG_CONTENT_RESET_TRANSLATES, resetTranslates);
}

resetTranslatesButton.addEventListener('click', confirmResetTranslates);

export { resetTranslates };