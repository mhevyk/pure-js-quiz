import ProgressQuiz from './progress-quiz';
import { resetInput } from '../utils';

export default class QuizInputAnswer extends ProgressQuiz {
    constructor(options) {
        super(options);

        this.form.onsubmit = this.nextQuestion.bind(this);
        this.questionContainer = this.form.querySelector('[data-question]');
        this.userAnswerInput = this.form.querySelector('[data-answer]');
        this.previousQuestion = super.nextQuestion({ skipProgressIncrement: true });

        resetInput(this.userAnswerInput);
        setTimeout(() => this.userAnswerInput.focus());
        this.#showQuestionTextToUser();
    }

    nextQuestion() {
        const answerFromUser = this.userAnswerInput.value;
        // const isAnswerCorrect = this.#checkAnswer(answerFromUser, this.previousQuestion);
        const isAnswerCorrect = this.previousQuestion.checkAnswer(answerFromUser);

        if (isAnswerCorrect) {
            this.correctAnswersCount++;
        }

        const question = super.nextQuestion();
        this.previousQuestion = question;

        if (question) {
            this.#showQuestionTextToUser();
            resetInput(this.userAnswerInput);
            this.userAnswerInput.focus();
        }
    }

    #showQuestionTextToUser() {
        this.questionContainer.innerHTML = this.previousQuestion.getText();
    }
}