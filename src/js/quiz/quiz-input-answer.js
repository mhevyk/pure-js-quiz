import ProgressQuiz from './progress-quiz';
import DetailedInfoCollector from './detailed-info-collector';
import Quiz from './quiz';
import { resetInput } from '../utils';
import { addQuizResultItemToStorage } from '../results/result-item';

export default class QuizInputAnswer extends ProgressQuiz {
    #collector;

    constructor(options) {
        super(options);

        this.form.onsubmit = this.nextQuestion.bind(this);
        this.questionContainer = this.form.querySelector('[data-question]');
        this.userAnswerInput = this.form.querySelector('[data-answer]');
        this.previousQuestion = super.nextQuestion({ skipProgressIncrement: true });

        resetInput(this.userAnswerInput);
        setTimeout(() => this.userAnswerInput.focus());
        this.#showQuestionTextToUser();

        this.#collector = new DetailedInfoCollector(this);
    }

    nextQuestion() {
        const answerFromUser = this.userAnswerInput.value;
        const isAnswerCorrect = this.previousQuestion.checkAnswer(answerFromUser);

        if (isAnswerCorrect) {
            this.correctAnswersCount++;
        }
        
        this.#collector.saveQuestionDetails(this.previousQuestion, answerFromUser);

        const question = super.nextQuestion();
        this.previousQuestion = question;

        if (question) {
            this.#showQuestionTextToUser();
            resetInput(this.userAnswerInput);
            this.userAnswerInput.focus();
        }
    }

    showResult() {
        super.showResult();
        const quizDetails = this.#collector.getQuizDetails();
        addQuizResultItemToStorage(quizDetails);
        Quiz.quizId++;
    }

    #showQuestionTextToUser() {
        this.questionContainer.innerHTML = this.previousQuestion.getText();
    }
}