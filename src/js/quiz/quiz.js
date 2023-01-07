import { vocabulary } from '../vocabulary';
import Dialog from '../popups/dialog';
import { pageNavigator } from '../navigation/page-navigator';
import { submitAfterDialogConfirm, shuffle } from '../utils';
import { DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH } from '../storage';

function* questionGenerator(questionsCount) {
    const sortedQuestions = shuffle(vocabulary.data);
    const limitedQuestions = sortedQuestions.slice(0, questionsCount);
    for (const question of limitedQuestions) {
        yield question;
    }
}

/* options = {
    mixQuestionType: true - generates question to guess word or translate if true or only translate if false
} */
export default class Quiz {
    static whatToGuess = ['word', 'translate'];

    constructor(questionsCount, options = { mixQuestionType: true }) {
        this.questionsCount = questionsCount;
        this.questions = questionGenerator(questionsCount);
        this.options = options;
        this.rightAnswersCount = 0;
    }

    nextQuestion() {
        const next = this.questions.next();
        if (next.done) {
            return null;
        }

        const { mixQuestionType } = this.options;
        
        const whatToGuessIndex = mixQuestionType ? Math.floor(Math.random() * 2) : 0;

        const whatToGuess = Quiz.whatToGuess[whatToGuessIndex];
        const { word, translates } = next.value;

        switch (whatToGuess) {
            case 'word':
                return this.#createQuestionToAskTranslates(word, translates);
            case 'translate':
                return this.#createQuestionToAskWord(word, translates);
        }
    }

    showResult() {
        const dialog = new Dialog();
        const { cancelButton } = dialog.dialogItems.buttons;
        const closeHandler = () => pageNavigator.goToPreviousPage();

        dialog.addEventListener('close', closeHandler);

        cancelButton.style.display = 'none';

        submitAfterDialogConfirm(DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH(this.rightAnswersCount, this.questionsCount), () => {
            dialog.close();
            dialog.removeEventListener('close', closeHandler);
            setTimeout(() => cancelButton.style.display = 'block', 500);
        });
    }

    #createQuestionToAskTranslates(word, translates) {
        return {
            text: `Введіть один з перекладів слова <b>${word}</b>:`,
            answers: translates
        };
    }

    #createQuestionToAskWord(word, translates) {
        return {
            text: `Відтворіть слово по перекладах <b>${translates.join(', ')}</b>:`,
            answers: [word]
        };
    }
}