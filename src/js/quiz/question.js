import { getRandomArrayItem } from '../utils';

export default class Question {
    #text;
    #answers;

    static variants = {
        'quess-word': (word, translations) => ({
            innerHTML: `Відтворіть слово по перекладах <b class="text-accent">${translations.join(', ')}</b>:`,
            answers: [word]
        }),
        'guess-translation': (word, translations) => ({
            innerHTML: `Введіть один з перекладів слова <b class="text-accent">${word}</b>:`,
            answers: translations
        })
    };

    constructor(type, record = {}) {
        const { word, translations } = record;
        const types = Object.keys(Question.variants);

        const variant = types.includes(type) ? type : getRandomArrayItem(types);
        const templateVariant = Question.variants[variant];
        
        const { innerHTML, answers } = templateVariant(word, translations);
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