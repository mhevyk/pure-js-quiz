import { vocabulary } from '../vocabulary';
import { dialog } from '../popups/dialog';
import {
    pageNavigator,
    backButton,
    config as navigateConfig
} from '../navigation/page-navigator';
import { submitAfterDialogConfirm, shuffle } from '../utils';
import {
    DIALOG_CONTENT_EXIT_QUIZ,
    DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH
} from '../storage';
import { setQuizPrimary, setQuizSecondary } from '../components/button';
import Question from './question';
import { options } from '../options';

function* questionGenerator(group, questionsCount) {
    const groupContent = vocabulary.getGroupContent(group);
    const shuffledQuestions = shuffle(groupContent);

    for (let i = 0; i < questionsCount; i++) {
        yield shuffledQuestions[i];
    }
}

function enableGoBackConfirm() {
    navigateConfig.canGoBack = false;
    backButton.addEventListener('click', confirmQuizExit);
}

function disableGoBackConfirm() {
    navigateConfig.canGoBack = true;
    backButton.removeEventListener('click', confirmQuizExit);
}

function exitQuiz() {
    disableGoBackConfirm();
    pageNavigator.goToPreviousPage();
}

function confirmQuizExit() {
    submitAfterDialogConfirm(DIALOG_CONTENT_EXIT_QUIZ, () => {
        exitQuiz();
    });
}

export default class Quiz {
    constructor({ group, questionsCount, form }) {
        this.form = form;
        this.submitButton = form.querySelector('[type=submit]');

        if (questionsCount === 1) {
            setQuizPrimary(this.submitButton);
        } else {
            setQuizSecondary(this.submitButton);
        }

        this.questionsCount = questionsCount;
        this.questions = questionGenerator(group, questionsCount);
        this.correctAnswersCount = 0;
        this.answeredQuestionsCount = 0;

        this.options = {
            questionGuessType: options.questionGuessType ? 'guess-translate' : ''
        };

        enableGoBackConfirm();
    }

    nextQuestion() {
        const { value: record, done: isQuizFinished } = this.questions.next();
        if (isQuizFinished) {
            return this.showResult();
        }

        //transform submit button to inform user, that he is answering last question
        if (this.answeredQuestionsCount === this.questionsCount - 1) {
            setQuizPrimary(this.submitButton);
        }

        this.answeredQuestionsCount++;
        
        return new Question(this.options.questionGuessType, record);
    }

    showResult() {
        dialog.hideCancelButtonTillDialogClose(exitQuiz);
        this.form.onsubmit = null;

        const dialogContent = DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH(this.correctAnswersCount, this.questionsCount);
        submitAfterDialogConfirm(dialogContent, null);
    }
}