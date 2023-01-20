import { getRandomArrayItem } from '../utils';

export default class Question {
    #text;
    #answers;

    static variants = {
        'quess-word': (word, translates) => ({
            text: `Відтворіть слово по перекладах <b>${translates.join(', ')}</b>:`,
            answers: [word]
        }),
        'guess-translate': (word, translates) => ({
            text: `Введіть один з перекладів слова <b>${word}</b>:`,
            answers: translates
        })
    };

    constructor(type, record = {}) {
        const { word, translates } = record;
        const types = Object.keys(Question.variants);

        const variant = types.includes(type) ? type : getRandomArrayItem(types);
        const variantTemplate = Question.variants[variant];
        
        const { text, answers } = variantTemplate(word, translates);
        this.#text = text;
        this.#answers = answers;
    }

    getText() {
        return this.#text;
    }

    checkAnswer(answer) {
        return this.#answers.includes(answer);
    }
}