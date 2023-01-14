import { vocabulary } from '../vocabulary';
import Quiz from './quiz';
import { getValueFromSelect, resetInput } from '../utils';
import { options } from '../options';
import { changeButtonStyle } from '../components/button';
import { CSS_CLASSES } from '../storage';
import {
    initProgressBar,
    incrementProgressBarValue
} from '../components/progress-bar';

const initQuizInputAnswer = () => {
    const form = document.querySelector('.form__quiz-input-answer');
    const progressBar = form.querySelector('.progress');
    const answerInput = form.answer;
    const questionContainer = form.querySelector('[data-question-text]');
    const quizStartButton = document.querySelector('#quiz-input-answer-start');
    const submitButton = form.querySelector('[type=submit]');
    const groupSelect = document.querySelector('.form__quiz-input-answer-options').groups;

    const prapareToGameOver = changeButtonStyle.bind(null, submitButton, {
        text: 'Завершити спробу',
        replaceClasses: { from: CSS_CLASSES.buttonSecondary, to: CSS_CLASSES.buttonPrimary }
    });

    let quiz, question;

    const initQuiz = (group, questionsCount, options) => {
        quiz = new Quiz(group, questionsCount, options);
        question = quiz.nextQuestion();
        questionContainer.innerHTML = question.text;

        changeButtonStyle(submitButton, {
            text: 'Наступне питання',
            replaceClasses: { from: CSS_CLASSES.buttonPrimary, to: CSS_CLASSES.buttonSecondary }
        });
        if (questionsCount === 1) {
            prapareToGameOver();
        }
    };

    quizStartButton.addEventListener('click', () => {
        if (vocabulary.data.length) {
            resetInput(answerInput);
            const { range, mixQuestionType } = options;
            const questionsCount = range.value || 1;
            
            const group = getValueFromSelect(groupSelect);
            initQuiz(group, questionsCount, { mixQuestionType });

            form.addEventListener('submit', goToNextQuestion);
            initProgressBar(progressBar, questionsCount);

            setTimeout(() => answerInput.focus());
            setTimeout(() => incrementProgressBarValue(progressBar), 100);
        }
    });

    const checkAnswer = (question) => {
        const userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            return;
        }

        const isAnswerRight = question.answers.includes(userAnswer);
        if (isAnswerRight) {
            quiz.rightAnswersCount++;
        }
    };

    const goToNextQuestion = () => {
        if (progressBar.value + 1 === progressBar.max) {
            prapareToGameOver();
        }

        checkAnswer(question);

        question = quiz.nextQuestion();
        if (question) {
            questionContainer.innerHTML = question.text;
            resetInput(answerInput);
            answerInput.focus();
        } else {
            form.removeEventListener('submit', goToNextQuestion);
            return quiz.showResult();
        }

        incrementProgressBarValue(progressBar);
    };
};

export { initQuizInputAnswer };