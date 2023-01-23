import { getRandomArrayItem } from '../utils';

export default class Question {
    #text;
    #answers;

    static variants = {
        'quess-word': (word, translates) => ({
            innerHTML: `Відтворіть слово по перекладах <span class="text-accent">${translates.join(', ')}</span>:`,
            answers: [word]
        }),
        'guess-translate': (word, translates) => ({
            innerHTML: `Введіть один з перекладів слова <span class="text-accent">${word}</span>:`,
            answers: translates
        })
    };

    constructor(type, record = {}) {
        const { word, translates } = record;
        const types = Object.keys(Question.variants);

        const variant = types.includes(type) ? type : getRandomArrayItem(types);
        const templateVariant = Question.variants[variant];
        
        const { innerHTML, answers } = templateVariant(word, translates);
        this.#text = innerHTML;
        this.#answers = answers;
    }

    getTextWithFormat = () => {
        return this.#text;
    };

    getText = () => {
        return this.getTextWithFormat().replace(/(<b>)|(<\/b>)/g, '');
    };

    checkAnswer = (answer) => {
        return this.#answers.includes(answer);
    };

    getAnswers = () => {
        return this.#answers.join(', ');
    };
}