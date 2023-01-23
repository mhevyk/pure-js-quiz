import QuizInputAnswer from './quiz-input-answer';
import { modeTypes } from './quiz';
import { vocabulary } from '../vocabulary';
import { getValueFromSelect } from '../utils';

const form = document.querySelector('.form__quiz-input-answer');
const quizStartButton = document.querySelector('#quiz-input-answer-start');
const groupSelect = document.querySelector('.form__quiz-input-answer-options').groups;
const range = document.querySelector('#quiz-input-answer-words-count');

function initQuiz() {
    if (vocabulary.isEmpty()) {
        return;
    }

    const questionsCount = Number(range.value) || 1;
    
    const group = getValueFromSelect(groupSelect);
    const quizOptions = {
        mode: modeTypes.inputAnswer,
        group,
        form,
        questionsCount
    };

    new QuizInputAnswer(quizOptions);
}

function initQuizInputAnswer() {
    quizStartButton.addEventListener('click', initQuiz);
}

export { initQuizInputAnswer };