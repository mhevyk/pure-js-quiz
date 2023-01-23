import { vocabulary } from '../vocabulary';
import { getRandomInteger } from '../utils';

/* all ranges */
function inputChangeHandler(event) {
    const rangeInput = event.target;
    const rangeOutput = rangeInput.nextElementSibling;
    rangeOutput.textContent = rangeInput.value;
}

function initRangeInput(input) {
    input.addEventListener('input', inputChangeHandler);
}

function initAllRangeInputs () {
    const rangeInputs = document.querySelectorAll('.range-input');
    rangeInputs.forEach(input => initRangeInput(input));
}

/* range, which limit depends on vocabulary size  */
const quizInputAnswerRange = document.querySelector('[data-range=vocabulary]');

function updateVocabularyRange(recordsCount, value) {
    const output = quizInputAnswerRange.nextElementSibling;
    const max = recordsCount || vocabulary.recordsCount;
    const rangeValue = value || getRandomInteger(max / 3, 1);

    quizInputAnswerRange.max = max;
    quizInputAnswerRange.value = rangeValue;
    output.textContent = rangeValue;
}

export {
    initAllRangeInputs,
    updateVocabularyRange
};