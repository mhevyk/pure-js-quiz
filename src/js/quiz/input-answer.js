import { vocabulary } from '../vocabulary';
import Quiz from './quiz';
import { resetInput } from '../utils';
import { options } from '../options';
import {
    initProgressBar,
    incrementProgressBarValue
} from '../components/progress-bar';
import { changeButtonStyle } from '../components/button';
import { CSS_CLASSES } from '../storage';

const initQuizInputAnswer = () => {
    const form = document.querySelector('.form__quiz-input-answer');
    const progressBar = form.querySelector('.progress');
    const answerInput = form.answer;
    const questionContainer = form.querySelector('.question__text');
    const quizStartButton = document.querySelector('#quiz-input-answer-start');
    const submitButton = form.querySelector('[type=submit]');

    const prapareToGameOver = changeButtonStyle.bind(null, submitButton, {
        text: 'Завершити спробу',
        replaceClasses: { from: CSS_CLASSES.buttonSecondary, to: CSS_CLASSES.buttonPrimary }
    });

    let quiz, question;

    const initQuiz = (questionsCount, options) => {
        quiz = new Quiz(questionsCount, options);
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
            const { questionsCount, mixQuestionType } = options;
            initQuiz(questionsCount, { mixQuestionType });

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