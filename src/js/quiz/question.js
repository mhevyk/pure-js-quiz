import { getRandomArrayItem } from '../utils';

export default class Question {
    #text;
    #answers;

    static variants = {
        'quess-word': (word, translates) => ({
            innerHTML: `Відтворіть слово по перекладах <b class="text-accent">${translates.join(', ')}</b>:`,
            answers: [word]
        }),
        'guess-translate': (word, translates) => ({
            innerHTML: `Введіть один з перекладів слова <b class="text-accent">${word}</b>:`,
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

    getText = () => {
        return this.#text;
    };

    checkAnswer = (answer) => {
        return this.#answers.includes(answer);
    };

    getAnswers = () => {
        return this.#answers.join(', ');
    };
}