import { vocabulary } from '../../vocabulary';
import { updateUserInterface } from '../../render-interface';
import { DIALOG_CONTENT_TEMPLATE_DELETE_GROUP } from '../../storage';
import { FORM_GROUP_DELETE } from '../form';

import {
    getValueFromSelect,
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid
} from '../../utils';

function deleteGroup(group) {
    vocabulary.removeGroup(group);
    vocabulary.print();
    vocabulary.save();
    resetForm(FORM_GROUP_DELETE);
    updateUserInterface();
}

function confirmDeleteGroup() {
    const group = getValueFromSelect(FORM_GROUP_DELETE.groups);
    const dialogContent = DIALOG_CONTENT_TEMPLATE_DELETE_GROUP(group);
    submitAfterDialogConfirm(dialogContent, () => deleteGroup(group));
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, confirmDeleteGroup);
}

function initFormDeleteGroup() {
    FORM_GROUP_DELETE.addEventListener('submit', formSubmitHandler);
}

export { initFormDeleteGroup };