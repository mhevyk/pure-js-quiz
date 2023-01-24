import { vocabulary } from '../../../vocabulary';
import { updateUserInterface } from '../../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_ADD_GROUP } from '../../../storage';
import { FORM_GROUP_ADD } from '../../form';
import {
    setValidFeedback,
    setInvalidFeedback,
    FEEDBACKS_ADD_GROUP
} from '../../feedback';
import {
    submitAfterDialogConfirm,
    handleSubmitIfFormValid,
    resetForm,
    debounce
} from '../../../utils';

const groupInput = FORM_GROUP_ADD.group;

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

function addGroup(group) {
    vocabulary.addGroup(group);
    vocabulary.save();
    resetForm(FORM_GROUP_ADD);
    updateUserInterface();
}

function confirmAddGroup() {
    const group = groupInput.value.trim();
    const dialogContent = DIALOG_CONTENT_TEMPLATE_ADD_GROUP(group);
    submitAfterDialogConfirm(dialogContent, () => addGroup(group));
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmAddGroup);
}

function initAddGroupForm() {
    FORM_GROUP_ADD.addEventListener('input', debounce(validateHandler, 100));
    FORM_GROUP_ADD.addEventListener('submit', formSubmitHandler);
}

export { initAddGroupForm };