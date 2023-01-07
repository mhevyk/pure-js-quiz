import { vocabulary } from '../vocabulary';
import { updateUserInterface } from '../update-user-interface';
import { DIALOG_CONTENT_TEMPLATE_DELETE_GROUP } from '../storage';
import {
    getValueFromSelect,
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid
} from '../utils';

const form = document.querySelector('.form__delete-group');

function deleteGroup(group) {
    vocabulary.removeGroup(group);
    vocabulary.print();
    vocabulary.save();
    resetForm(form);
    updateUserInterface();
}

function confirmDeleteGroup() {
    const group = getValueFromSelect(form.groups);
    const dialogContent = DIALOG_CONTENT_TEMPLATE_DELETE_GROUP(group);

    submitAfterDialogConfirm(dialogContent, () => deleteGroup(group));
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmDeleteGroup);
}

function initFormDeleteGroup() {
    form.addEventListener('submit', formSubmitHandler);
}

export { initFormDeleteGroup };