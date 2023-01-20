import { vocabulary } from './vocabulary';
import { updateUserInterface, updateSelectsWithWords } from './render-interface';
import { initQuiz } from './quiz';
import { initOptionInputs } from './options';
import { initFormComponents } from './forms';
import initResults from './results';

async function initApp() {
    const { initComponents } = await import('./components');

    vocabulary.load();
    vocabulary.print();
    updateUserInterface();
    updateSelectsWithWords();

    initFormComponents();
    initComponents();
    initQuiz();
    initOptionInputs();

    initResults();
}

document.addEventListener('DOMContentLoaded', initApp);