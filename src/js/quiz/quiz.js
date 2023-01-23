import Question from './question';
import { submitAfterDialogConfirm } from '../utils';
import { dialog } from '../popups/dialog';
import { options } from '../options';
import { FORM_QUIZ_INPUT_ANSWER_OPTIONS } from '../forms/form';
import { DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH, modeTypes } from '../storage';
import questionGenerator from './question-generator';

import {
    enableGoBackConfirm,
    disableGoBackConfirm,
    exitQuiz
} from './exit-quiz';

import {
    convertSecondaryButtonToPrimary,
    convertPrimaryButtonToSecondary
} from '../components/button';

export default class Quiz {
    #mode;
    #group;
    static #quizId = 0;

    constructor({ mode = modeTypes.inputAnswer, group, questionsCount, form }) {
        Quiz.#quizId++;
        this.#group = group;
        this.#mode = mode;
        this.form = form;
        this.submitButton = form.querySelector('[type=submit]');

        if (questionsCount === 1) {
            convertSecondaryButtonToPrimary(this.submitButton);
        } else {
            convertPrimaryButtonToSecondary(this.submitButton);
        }

        this.questionsCount = questionsCount;
        this.questions = questionGenerator(group, questionsCount);
        this.correctAnswersCount = 0;
        this.answeredQuestionsCount = 0;

        this.options = {
            questionGuessType: options.questionGuessType ? '' : 'guess-translate'
        };

        enableGoBackConfirm();
    }

    getName() {
        return `Опитування ${Quiz.#quizId}`;
    }

    #getNextName() {
        return `Опитування ${Quiz.#quizId + 1}`;
    }

    getMode = () => {
        return this.#mode;
    };

    getGroup = () => {
        return this.#group;
    };

    nextQuestion() {
        const { value: record, done: isQuizFinished } = this.questions.next();
        if (isQuizFinished) {
            return this.showResult();
        }

        //transform submit button to inform user, that he is answering last question
        if (this.answeredQuestionsCount === this.questionsCount - 1) {
            convertSecondaryButtonToPrimary(this.submitButton);
        }

        this.answeredQuestionsCount++;
        
        return new Question(this.options.questionGuessType, record);
    }

    showResult() {
        FORM_QUIZ_INPUT_ANSWER_OPTIONS.resultName.value = this.#getNextName();

        dialog.hideCancelButtonTillDialogClose(disableGoBackConfirm);
        this.form.onsubmit = null;

        const dialogContent = DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH(this.correctAnswersCount, this.questionsCount);
        submitAfterDialogConfirm(dialogContent, exitQuiz);
    }
}