import { vocabulary } from '../vocabulary';
import { options, saveOptions } from '../options';

/* all ranges */
function inputChangeHandler (event) {
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

function vocabularyRangeChangeHandler(event) {
    const range = event.target;
    options.range.value = Number(range.value);
    options.range.max = Number(range.max);
    saveOptions();
}

function initVocabularyRange() {
    quizInputAnswerRange.addEventListener('input', vocabularyRangeChangeHandler);
}

function updateVocabularyRange(recordsCount, value) {
    const output = quizInputAnswerRange.nextElementSibling;
    const max = recordsCount || vocabulary.recordsCount;
    const rangeValue = value || Math.ceil(max / 5);

    quizInputAnswerRange.max = max;
    quizInputAnswerRange.value = rangeValue;
    output.textContent = rangeValue;
}

export {
    initAllRangeInputs,
    initVocabularyRange,
    updateVocabularyRange
};