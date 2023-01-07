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
    const value = Number(event.target.value);
    options.questionsCount = value;
    saveOptions();
}

function initVocabularyRange() {
    quizInputAnswerRange.addEventListener('input', vocabularyRangeChangeHandler);
}

function updateVocabularyRange(value) {
    const output = quizInputAnswerRange.nextElementSibling;
    const { recordsCount } = vocabulary;
    const rangeValue = value || Math.ceil(recordsCount / 5);

    quizInputAnswerRange.max = recordsCount;
    quizInputAnswerRange.value = rangeValue;
    output.textContent = rangeValue;
}

export {
    initAllRangeInputs,
    initVocabularyRange,
    updateVocabularyRange
};