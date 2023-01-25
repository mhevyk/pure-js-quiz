import {
    setInvalidFeedback,
    setValidFeedback,
    FEEDBACKS_COMPARE_INPUTS_ADD_ONE
} from '../../../feedback';

function countInputValuesOccurence(inputsArray) {
    const inputValuesList = inputsArray.map(input => input.value);
    const nonEmptyInputs = inputValuesList.filter(Boolean);
    return nonEmptyInputs.reduce((occurenceTable, current) => {
        occurenceTable[current] = (occurenceTable[current] + 1) || 1;
        return occurenceTable;
    }, {});
}

const { EMPTY_INPUT, CONTAINS_COMMA, SAME_INPUT_VALUES } = FEEDBACKS_COMPARE_INPUTS_ADD_ONE;

function validateInput(input, occurence) {
    const value = input.value.trim();
    const wordInput = input.form.word;
    const isWord = input.name === 'word';

    if (!value) {
        setInvalidFeedback(input, EMPTY_INPUT(isWord));
    } else if (value.includes(',')) {
        setInvalidFeedback(input, CONTAINS_COMMA(isWord));
    } else if (occurence > 1) {
        setInvalidFeedback(input, SAME_INPUT_VALUES(wordInput.value === value));
    } else {
        setValidFeedback(input);
    }
}

function validateFormAddInputs(form) {
    const wordInput = form.word;
    const translationInputs = form.querySelectorAll('[name="translation"]');
    const allInputs = [wordInput, ...translationInputs];

    const valueOccurence = countInputValuesOccurence(allInputs);
    allInputs.forEach(input => validateInput(input, valueOccurence[input.value]));
}

export { validateFormAddInputs };