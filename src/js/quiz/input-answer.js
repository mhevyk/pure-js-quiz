import QuizInputAnswer from './quiz-input-answer';
import { modeTypes } from '../storage';
import { vocabulary } from '../vocabulary';
import { getValueFromSelect } from '../utils';
import { FORM_QUIZ_INPUT_ANSWER } from '../forms/form';

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
        form: FORM_QUIZ_INPUT_ANSWER,
        questionsCount
    };

    new QuizInputAnswer(quizOptions);
}

function initQuizInputAnswer() {
    quizStartButton.addEventListener('click', initQuiz);
}

export { initQuizInputAnswer };