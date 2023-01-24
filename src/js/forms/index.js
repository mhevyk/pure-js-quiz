import { initFormsValidation } from './form';
import initQuizForms from './forms-quiz';
import initVocabularyForms from './forms-vocabulary';

function initForms() {
    initFormsValidation();
    initQuizForms();
    initVocabularyForms();
}

export { initForms };