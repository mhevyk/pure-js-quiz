import { vocabulary } from '../vocabulary';
import { options, saveOptions } from '../options';

function checkboxChangeHandler(event) {
    const { checked, dataset } = event.target;
    const { option } = dataset;
    options[option] = checked;
    saveOptions();
}

function showGroupsCheckboxChangeHandler() {
    vocabulary.print();
}

function initShowGroupsCheckbox() {
    const checkbox = document.querySelector('#show-groups');
    checkbox.addEventListener('change', showGroupsCheckboxChangeHandler);
}

function initCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkboxChangeHandler));
}

export {
    initCheckboxes,
    initShowGroupsCheckbox
};