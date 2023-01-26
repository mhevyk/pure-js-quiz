import { debounce } from '../utils';

function addHighlight(input, isAnswerCorrect) {
    input.parentElement.classList.add(`answer-${isAnswerCorrect ? 'correct' : 'wrong'}`);
}

function clearHighlight(input) {
    input.parentElement.classList.remove('answer-correct', 'answer-wrong');
}

const highlight = debounce((input, isAnswerCorrect) => {
    addHighlight(input, isAnswerCorrect);
    setTimeout(() => clearHighlight(input), 1000);
}, 200);

export { highlight, clearHighlight };