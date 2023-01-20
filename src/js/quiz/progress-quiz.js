import Quiz from './quiz';
import { initProgressBar, incrementProgressBarValue } from '../components/progress-bar';

export default class ProgressQuiz extends Quiz {
    constructor(options) {
        super(options);

        this.progressBar = this.form.querySelector('.progress');
        initProgressBar(this.progressBar, this.questionsCount);
    }

    nextQuestion(options = {}) {
        const result = super.nextQuestion();
        const { skipProgressIncrement = false } = options;

        if (!skipProgressIncrement) {
            incrementProgressBarValue(this.progressBar);
        }

        return result;
    }
}