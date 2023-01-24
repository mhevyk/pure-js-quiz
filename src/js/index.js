import { vocabulary } from './vocabulary';
import { updateUserInterface, updateSelectsWithWords } from './render-interface';
import { initOptionInputs } from './options';

async function initApp() {
    const { initForms } = await import('./forms');
    const { initComponents } = await import('./components');
    const { initResults } = await import('./results');

    vocabulary.load();
    vocabulary.print();
    updateUserInterface();
    updateSelectsWithWords();

    initForms();
    initOptionInputs();

    initComponents();
    initResults();
}

document.addEventListener('DOMContentLoaded', initApp);