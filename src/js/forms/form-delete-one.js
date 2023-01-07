import { vocabulary } from '../vocabulary';
import { setValidFeedback, setInvalidFeedback, FEEDBACKS_FORM_DELETE_ONE } from './feedback';
import {
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid
} from '../utils';
import { DIALOG_CONTENT_TEMPLATE_DELETE_ONE } from '../storage';

const initFormDeleteOne = () => {
    const form = document.querySelector('.form__delete-one');
    const tokenInput = form.searchToken;

    let wordToDelete;

    const patterns = {
        //###
        positionWithoutUnit: /[0123456789]+/,
        //###.##
        positionWithUnit: /(\d+)\.(\d+)/
    };

    const validatePositionWithUnit = (token) => {
        const {
            TOO_SMALL_GROUP_INDEX,
            TOO_SMALL_WORD_INDEX,
            GROUP_INDEX_OUT_OF_RANGE,
            WORD_INDEX_OUT_OF_GROUP_RANGE,
            WORD_FOUND
        } = FEEDBACKS_FORM_DELETE_ONE;
        const [groupIndex, wordIndex] = token.split('.').map(Number);

        if (groupIndex <= 0) {
            return setInvalidFeedback(tokenInput, TOO_SMALL_GROUP_INDEX);
        }

        if (wordIndex <= 0) {
            return setInvalidFeedback(tokenInput, TOO_SMALL_WORD_INDEX);
        }

        if (groupIndex > vocabulary.groups.length) {
            return setInvalidFeedback(tokenInput, GROUP_INDEX_OUT_OF_RANGE(vocabulary.groups.length, groupIndex));
        }
        const group = vocabulary.groups[groupIndex - 1];
        const groupContent = vocabulary.getGroupContent(group);
        if (wordIndex > groupContent.length) {
            return setInvalidFeedback(tokenInput, WORD_INDEX_OUT_OF_GROUP_RANGE(groupIndex, groupContent.length, wordIndex));
        }
        const record = groupContent[wordIndex - 1];
        setValidFeedback(tokenInput, WORD_FOUND(record));
        wordToDelete = record.word;
    };

    const validatePositionWithoutUnit = (token) => {
        const { INVALID_INPUT, TOO_SMALL_WORD_INDEX, WORD_INDEX_OUT_OF_RANGE, WORD_FOUND } = FEEDBACKS_FORM_DELETE_ONE;
        const wordIndex = Number(token);

        if (isNaN(wordIndex)) {
            return setInvalidFeedback(tokenInput, INVALID_INPUT);
        }

        if (wordIndex <= 0) {
            return setInvalidFeedback(tokenInput, TOO_SMALL_WORD_INDEX);
        }

        const allWords = vocabulary.data;

        if (wordIndex > allWords.length) {
            return setInvalidFeedback(tokenInput, WORD_INDEX_OUT_OF_RANGE(allWords.length, wordIndex));
        }

        const record = allWords[wordIndex - 1];

        setValidFeedback(tokenInput, WORD_FOUND(record));
        wordToDelete = record.word;
    };

    const validateWordToken = (token) => {
        const { WORD_NOT_FOUND, WORD_FOUND } = FEEDBACKS_FORM_DELETE_ONE;
        const wordIndex = vocabulary.indexOf(token);

        if (wordIndex === -1) {
            return setInvalidFeedback(tokenInput, WORD_NOT_FOUND);
        }

        const record = vocabulary.data[wordIndex];

        setValidFeedback(tokenInput, WORD_FOUND(record));
        wordToDelete = record.word;
    };

    const validateDeleteToken = () => {
        const token = tokenInput.value.toLowerCase().trim();

        if (!token) {
            setInvalidFeedback(tokenInput, 'Введіть критерій для пошуку!');
        } else if (patterns.positionWithUnit.test(token)) {
            validatePositionWithUnit(token);
        } else if (patterns.positionWithoutUnit.test(token)) {
            validatePositionWithoutUnit(token);
        } else {
            validateWordToken(token);
        }
    };

    const deleteRecord = () => {
        submitAfterDialogConfirm(DIALOG_CONTENT_TEMPLATE_DELETE_ONE(wordToDelete), () => {
            vocabulary.delete(wordToDelete);
            vocabulary.print();
            vocabulary.save();
            resetForm(form);
        });
    };

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, deleteRecord);
    };

    form.addEventListener('input', validateDeleteToken);
    form.addEventListener('submit', formSubmitHandler);
};

export { initFormDeleteOne };