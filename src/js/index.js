import { vocabulary } from './vocabulary';
import { updateUserInterface, updateSelectsWithWords } from './update-user-interface';
import { initQuiz } from './quiz';
import { initOptionInputs } from './options';
import { initFormComponents } from './forms';

async function initApp() {
    const { initExitButton } = await import('./exit');
    const { initTemplates } = await import('./templates');
    const { initFooterYearRange } = await import('./app-existance-date-range');
    const { initComponents } = await import('./components');
    const { initCharts } = await import('./charts');

    vocabulary.load();
    vocabulary.print();
    updateUserInterface();
    updateSelectsWithWords();

    initFormComponents();

    initExitButton();
    initFooterYearRange();
    initComponents();
    initTemplates();

    initQuiz();
    initOptionInputs();

    initCharts();
}

document.addEventListener('DOMContentLoaded', initApp);