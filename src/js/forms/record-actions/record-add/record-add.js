import { vocabulary } from '../../../vocabulary';
import { validateFormAddInputs } from './compare-inputs';
import { resetTranslates as resetHandler } from './reset-translates';
import { updateUserInterface } from '../../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD } from '../../../storage';
import { FORM_RECORD_ADD } from '../../form';

import { 
    getValueFromSelect,
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid,
    debounce
} from '../../../utils';

function addRecord() {
    const wordInput = FORM_RECORD_ADD.word;
    const translateInputs = FORM_RECORD_ADD.querySelectorAll('[name="translate"]');
    const groupSelect = FORM_RECORD_ADD.groups;

    const word = wordInput.value.trim();
    const translates = Array.from(translateInputs, translateInput => translateInput.value.trim());
    const group = getValueFromSelect(groupSelect).trim();

    const dialogContent = DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD(word, translates, group);

    submitAfterDialogConfirm(dialogContent, () => {
        vocabulary.addOne({word, translates, group});
        vocabulary.print();
        vocabulary.save();
        resetForm(FORM_RECORD_ADD);
        updateUserInterface();
    });
}

function textInputsHandler(event) {
    if (event.target.type === 'text') {
        validateFormAddInputs(FORM_RECORD_ADD);
    }
}

function submitHandler(event) {
    handleSubmitIfFormValid(event.target, addRecord);
}

function initFormAddSingleWord() {
    FORM_RECORD_ADD.addEventListener('input', debounce(textInputsHandler, 100));
    FORM_RECORD_ADD.addEventListener('submit', submitHandler);  
    FORM_RECORD_ADD.addEventListener('reset', resetHandler);
}

export { initFormAddSingleWord };