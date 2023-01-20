import { PROGRESS_BAR_VALUE } from '../storage';

function initProgressBar (progressBarElement, max) {
    progressBarElement.value = 0;
    progressBarElement.style.setProperty(PROGRESS_BAR_VALUE, '0%');
    progressBarElement.max = max;

    setTimeout(() => incrementProgressBarValue(progressBarElement), 100);
}

function incrementProgressBarValue(progressBarElement) {
    const { value, max, step = 1 } = progressBarElement;
    const newValue = value + step;
    const percentage = (newValue / max) * 100;

    progressBarElement.value = newValue;
    progressBarElement.style.setProperty(PROGRESS_BAR_VALUE, `${percentage}%`);
}

export {
    initProgressBar,
    incrementProgressBarValue
};