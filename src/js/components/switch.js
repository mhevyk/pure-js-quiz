import { vocabulary } from '../vocabulary';
import { options, saveOptions } from '../options';

function changeHandler(event) {
    const { checked, dataset } = event.target;
    const { option } = dataset;
    options[option] = checked;
    saveOptions();
}

function showGroupsChangeHandler() {
    vocabulary.print();
}

function initShowGroupsSwitcher() {
    const checkbox = document.querySelector('#show-groups');
    checkbox.addEventListener('change', showGroupsChangeHandler);
}

function initSwitchers() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', changeHandler));
}

export {
    initSwitchers,
    initShowGroupsSwitcher
};