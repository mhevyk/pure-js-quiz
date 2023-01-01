/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function* questionGenerator(questionsCount) {
    const voc = new Vocabulary();
    const sortedQuestions = shuffle(voc.data);
    const limitedQuestions = sortedQuestions.slice(0, questionsCount);
    for (const question of limitedQuestions) {
        yield question;
    }
}

/* options = {
    mixQuestionType: true - generates question to guess word or translate if true or only translate if false
} */
class Quiz {
    static whatToGuess = ['word', 'translate'];

    constructor(questionsCount, options = { mixQuestionType: true }) {
        this.questionsCount = questionsCount;
        this.questions = questionGenerator(questionsCount);
        this.options = options;
        this.rightAnswersCount = 0;
    }

    #createQuestionToAskTranslates = (word, translates) => {
        return {
            text: `Введіть один з перекладів слова <b>${word}</b>:`,
            answers: translates
        };
    }

    #createQuestionToAskWord = (word, translates) => {
        return {
            text: `Відтворіть слово по перекладах <b>${translates.join(', ')}</b>:`,
            answers: [word]
        };
    }

    nextQuestion = () => {
        const next = this.questions.next();
        if (next.done) {
            return null;
        }

        const { mixQuestionType } = this.options;
        
        const whatToGuessIndex = mixQuestionType ? Math.floor(Math.random() * 2) : 0;

        const whatToGuess = Quiz.whatToGuess[whatToGuessIndex];
        const { word, translates } = next.value;

        switch (whatToGuess) {
        case 'word': {
            return this.#createQuestionToAskTranslates(word, translates);
        }
        case 'translate': {
            return this.#createQuestionToAskWord(word, translates);
        }
        }
    }

    showResult = () => {
        const dialog = new Dialog();
        const { cancelButton } = dialog.dialogItems.buttons;

        const closeHandler = () => new PageNavigator().goToPreviousPage();

        dialog.addEventListener('close', closeHandler);

        cancelButton.style.display = 'none';
        
        const questionsCount = this.questionsCount;

        const isResultGood = this.rightAnswersCount > (questionsCount / 2);
        const resultFeedback = `<span class="text-${isResultGood ? 'success' : 'fail'}">${isResultGood ? 'вдало' : 'невдало'}</span>`;

        const dialogContent = {
            header: 'Результат тестування',
            body: `
                <p>Тестування завершено ${resultFeedback}, результат: <span class='text-primary'>${this.rightAnswersCount}/${questionsCount}</span>!
                <p><small class='link'>Переглянути результат тестування</small></p>
            `,
            submitBtn: 'Добре',
        };

        confirmDecorator(dialogContent, () => {
            dialog.close();
            dialog.removeEventListener('close', closeHandler);
            setTimeout(() => cancelButton.style.display = 'block', 500);
        });
    }
}