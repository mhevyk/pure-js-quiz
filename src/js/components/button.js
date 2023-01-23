import { CSS_CLASSES } from '../storage';

function changeButtonStyle(button, {text, replaceClasses}) {
    button.textContent = text;
    button.classList.replace(replaceClasses.from, replaceClasses.to);
}

function convertPrimaryButtonToSecondary(submitButton) {
    changeButtonStyle(submitButton, {
        text: 'Наступне питання',
        replaceClasses: {
            from: CSS_CLASSES.buttonPrimary,
            to: CSS_CLASSES.buttonSecondary
        }
    });
}

function convertSecondaryButtonToPrimary(submitButton) {
    changeButtonStyle(submitButton, {
        text: 'Завершити спробу',
        replaceClasses: {
            from: CSS_CLASSES.buttonSecondary,
            to: CSS_CLASSES.buttonPrimary
        }
    });
}

export {
    convertSecondaryButtonToPrimary,
    convertPrimaryButtonToSecondary
};