import { vocabulary } from '../../../vocabulary';
import { validateFormAddInputs } from './compare-inputs';
import { resetTranslates as resetHandler } from './reset-translates';
import { updateUserInterface } from '../../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD } from '../../../storage';
import { 
    getValueFromSelect,
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid,
    debounce
} from '../../../utils';

const form = document.querySelector('.form__add-single-word');

function addRecord() {
    const wordInput = form.word;
    const translateInputs = form.querySelectorAll('[name="translate"]');
    const groupSelect = form.groups;

    const word = wordInput.value.trim();
    const translates = Array.from(translateInputs, translateInput => translateInput.value.trim());
    const group = getValueFromSelect(groupSelect).trim();

    const dialogContent = DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD(word, translates, group);

    submitAfterDialogConfirm(dialogContent, () => {
        vocabulary.addOne({word, translates, group});
        vocabulary.print();
        vocabulary.save();
        resetForm(form);
        updateUserInterface();
    });
}

function textInputsHandler(event) {
    if (event.target.type === 'text') {
        validateFormAddInputs(form);
    }
}

function submitHandler(event) {
    handleSubmitIfFormValid(event.target, addRecord);
}

function initFormAddSingleWord() {
    form.addEventListener('input', debounce(textInputsHandler, 100));
    form.addEventListener('submit', submitHandler);  
    form.addEventListener('reset', resetHandler);
}

export { initFormAddSingleWord };