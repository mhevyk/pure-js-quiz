import { resetFeedbacks } from '../../../feedback';
import { DIALOG_CONTENT_RESET_translationS } from '../../../../storage';
import { FORM_RECORD_ADD } from '../../../form';
import { translations } from './translation-id';
import {
    submitAfterDialogConfirm,
    resetInput,
    removeContainerChildren,
    updatetranslationsCount
} from '../../../../utils';

const resettranslationsButton = document.querySelector('#add-translation-reset');
const translationsContainer = document.querySelector('.additional__translations-container');

function resetTranslations() {
    const firsttranslationInput = FORM_RECORD_ADD.querySelector('[name="translation"]');

    translations.id = 1;
    translations.count = 1;

    resetInput(firsttranslationInput);
    resetFeedbacks(FORM_RECORD_ADD, '[data-reset]');
    removeContainerChildren(translationsContainer);
    updatetranslationsCount(translations.count);
}

function confirmResettranslations() {
    submitAfterDialogConfirm(DIALOG_CONTENT_RESET_translationS, resetTranslations);
}

resettranslationsButton.addEventListener('click', confirmResettranslations);

export { resetTranslations };