import QuizInputAnswer from '../../quiz/quiz-input-answer';
import { updateVocabularyRange } from '../../components/range-input';
import { vocabulary } from '../../vocabulary';
import { setInvalidFeedback, setValidFeedback } from '../feedback';
import { modeTypes } from '../../storage';
import { pageNavigator } from '../../navigation/page-navigator';
import {
    FORM_QUIZ_INPUT_ANSWER,
    FORM_QUIZ_INPUT_ANSWER_OPTIONS
} from '../form';
import {
    handleSubmitIfFormValid,
    getValueFromSelect
} from '../../utils';

const groupSelect = FORM_QUIZ_INPUT_ANSWER_OPTIONS.groups;

function validateGroupContent(groupContent) {
    if (groupContent.length === 0) {
        setInvalidFeedback(groupSelect, 'Вибраний розділ не містить жодного слова!');
    } else {
        setValidFeedback(groupSelect);
    }
}

function groupChangeHandler() {
    const group = getValueFromSelect(groupSelect);
    const groupContent = vocabulary.getGroupContent(group);
    validateGroupContent(groupContent);
    updateVocabularyRange(groupContent.length);
}

function initQuiz() {
    if (vocabulary.isEmpty()) {
        return setInvalidFeedback(groupSelect, 'Словник порожній!');
    }

    const range = document.querySelector('#quiz-input-answer-words-count');
    const questionsCount = Number(range.value) || 1;
    const group = getValueFromSelect(groupSelect);
    
    const quizOptions = {
        mode: modeTypes.inputAnswer,
        group,
        form: FORM_QUIZ_INPUT_ANSWER,
        questionsCount
    };

    new QuizInputAnswer(quizOptions);

    pageNavigator.goToPage('quiz-input-answer');
}

function formSubmitHandler(event) {
    handleSubmitIfFormValid(event.target, initQuiz);
}

function initFormQuizInputAnswerOptions() {
    groupSelect.addEventListener('change', groupChangeHandler);
    FORM_QUIZ_INPUT_ANSWER_OPTIONS.addEventListener('submit', formSubmitHandler);
}

export { initFormQuizInputAnswerOptions };