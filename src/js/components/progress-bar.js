import { PROGRESS_BAR_VALUE } from '../storage';

function initProgressBar (progressBarElement, max) {
    progressBarElement.value = 0;
    progressBarElement.style.setProperty(PROGRESS_BAR_VALUE, '0%');
    progressBarElement.max = max;
}

function incrementProgressBarValue(progressBarElement) {
    const { value, max } = progressBarElement;
    const newValue = value + 1;
    const percentage = (newValue / max) * 100;

    progressBarElement.value = newValue;
    progressBarElement.style.setProperty(PROGRESS_BAR_VALUE, `${percentage}%`);
}

export {
    initProgressBar,
    incrementProgressBarValue
};