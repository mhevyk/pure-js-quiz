import { submitAfterDialogConfirm } from '../utils';
import { DIALOG_CONTENT_EXIT_QUIZ } from '../storage';
import { dialog } from '../popups/dialog';

import {
    pageNavigator,
    config as navigateConfig
} from '../navigation/page-navigator';
import { backArrows } from '../components/arrow';

const backButton = backArrows[0];

function enableGoBackConfirm() {
    navigateConfig.canGoBack = false;
    backButton.addEventListener('click', confirmQuizExit);
}

function disableGoBackConfirm() {
    navigateConfig.canGoBack = true;
    backButton.removeEventListener('click', confirmQuizExit);
}

function exitQuiz() {
    disableGoBackConfirm();
    pageNavigator.goToPreviousPage();
}

function confirmQuizExit() {
    submitAfterDialogConfirm(DIALOG_CONTENT_EXIT_QUIZ, () => {
        exitQuiz();
    });
}

function createCloseHandler() {
    const cancelButton = dialog.dialogItems.cancelButton;
    cancelButton.classList.add('hidden');
    return () => {
        exitQuiz();
        setTimeout(() => cancelButton.classList.remove('hidden'));
    };
}

export {
    enableGoBackConfirm,
    exitQuiz,
    createCloseHandler
};