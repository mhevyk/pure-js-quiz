import { vocabulary } from '../../vocabulary';
import { submitAfterDialogConfirm, handleSubmitIfFormValid, resetForm, debounce } from '../../utils';
import { updateUserInterface } from '../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_ADD_GROUP } from '../../storage';
import {
    setValidFeedback,
    setInvalidFeedback,
    FEEDBACKS_ADD_GROUP
} from '../feedback';

const form = document.querySelector('.form__add-group');
const groupInput = form.group;

function validateHandler() {
    const group = groupInput.value.trim();
    const { EMPTY_INPUT, GROUP_ALREADY_EXISTS } = FEEDBACKS_ADD_GROUP;

    if (!group) {
        setInvalidFeedback(groupInput, EMPTY_INPUT);
    } else if (vocabulary.groups.includes(group)) {
        setInvalidFeedback(groupInput, GROUP_ALREADY_EXISTS(group));
    } else {
        setValidFeedback(groupInput);
    }
}

function addGroup() {
    const group = groupInput.value.trim();

    submitAfterDialogConfirm(DIALOG_CONTENT_TEMPLATE_ADD_GROUP(group), () => {
        vocabulary.addGroup(group);
        vocabulary.save();
        resetForm(form);
        updateUserInterface();
    });
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, addGroup);
}

function initAddGroupForm() {
    form.addEventListener('input', debounce(validateHandler, 100));
    form.addEventListener('submit', formSubmitHandler);
}

export { initAddGroupForm };