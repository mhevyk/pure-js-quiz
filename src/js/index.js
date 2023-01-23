import { vocabulary } from './vocabulary';
import { updateUserInterface, updateSelectsWithWords } from './render-interface';
import { initQuiz } from './quiz';
import { initOptionInputs } from './options';

async function initApp() {
    const { initFormComponents } = await import('./forms');
    const { initComponents } = await import('./components');
    const { initResults } = await import('./results');

    vocabulary.load();
    vocabulary.print();
    updateUserInterface();
    updateSelectsWithWords();

    initFormComponents();
    initQuiz();
    initOptionInputs();

    initComponents();
    initResults();
}

document.addEventListener('DOMContentLoaded', initApp);