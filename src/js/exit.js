import { submitAfterDialogConfirm } from './utils';
import { DIALOG_CONTENT_EXIT_APP } from './storage';

function exitApp() {
    window.open(location, '_self').close();
}

function confirmExitApp() {
    submitAfterDialogConfirm(DIALOG_CONTENT_EXIT_APP, exitApp);
}

function initExitButton() {
    const exit = document.querySelector('.exit');
    exit.addEventListener('click', confirmExitApp);
}

export { initExitButton };