import '../css/index.css';

import { vocabulary } from './vocabulary';
import { updateUserInterface } from './update-user-interface';
import { initExitButton } from './exit';
import { initFooterYearRange } from './app-existance-date-range';
import { initComponents } from './components';
import { initFormComponents } from './forms';
import { initQuiz } from './quiz';
import { initTemplates } from './templates';
import { initOptionInputs } from './options';

function initApp() {
    vocabulary.load();
    vocabulary.print();
    updateUserInterface();

    initExitButton();
    initFooterYearRange();
    initComponents();
    initFormComponents();
    initTemplates();

    initQuiz();
    initOptionInputs();
}

document.addEventListener('DOMContentLoaded', initApp);