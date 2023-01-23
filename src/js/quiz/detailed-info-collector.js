export default class DetailedInfoCollector {
    #questionDetailsList = [];
    #quiz;

    constructor(quiz) {
        this.#quiz = quiz;
    }

    saveQuestionDetails(question, answerFromUser) {
        const { getText, getAnswers, checkAnswer } = question;
        const questionDetails = {
            name: getText(),
            userAnswer: answerFromUser || '(не введено)',
            correctAnswer: getAnswers(),
            isAnswerCorrect: checkAnswer(answerFromUser)
        };

        this.#questionDetailsList.push(questionDetails);
    }

    getQuizDetails() {
        const { getName, getMode, getGroup, options } = this.#quiz;
        return {
            name: getName(),
            mode: getMode(),
            group: getGroup() || 'Всі розділи',
            questions: this.#questionDetailsList,
            options
        };
    }
}