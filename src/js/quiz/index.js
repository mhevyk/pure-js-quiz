import { initQuizInputAnswer } from './input-answer';
import { initPreparationOptions } from './preparation-options';

function initQuiz() {
    initPreparationOptions();
    initQuizInputAnswer();
}

export { initQuiz };