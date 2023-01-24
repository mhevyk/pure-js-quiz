import { resetFeedbacks } from '../../../feedback';
import { DIALOG_CONTENT_RESET_TRANSLATES } from '../../../../storage';
import { FORM_RECORD_ADD } from '../../../form';
import { translates } from './translate-id';
import {
    submitAfterDialogConfirm,
    resetInput,
    removeContainerChildren,
    updateTranslatesCount
} from '../../../../utils';

const resetTranslatesButton = document.querySelector('#add-translate-reset');
const translatesContainer = document.querySelector('.additional__translates-container');

function resetTranslates() {
    const firstTranslateInput = FORM_RECORD_ADD.querySelector('[name="translate"]');

    translates.id = 1;
    translates.count = 1;

    resetInput(firstTranslateInput);
    resetFeedbacks(FORM_RECORD_ADD, '[data-reset]');
    removeContainerChildren(translatesContainer);
    updateTranslatesCount(translates.count);
}

function confirmResetTranslates() {
    submitAfterDialogConfirm(DIALOG_CONTENT_RESET_TRANSLATES, resetTranslates);
}

resetTranslatesButton.addEventListener('click', confirmResetTranslates);

export { resetTranslates };