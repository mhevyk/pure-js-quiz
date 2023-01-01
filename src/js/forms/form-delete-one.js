/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__delete-one');
    const tokenInput = form.searchToken;
    const voc = new Vocabulary();

    let wordToDelete;

    const feedbacks = {
        INVALID_INPUT: 'Введіть коректний порядковий номер або слово!',
        TOO_SMALL_GROUP_INDEX: 'Номер групи має бути більшим за 0!',
        TOO_SMALL_WORD_INDEX: 'Порядковий номер слова має бути більшим за 0!',
        GROUP_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> розділів, а введено розділ <b>${typedIndex}</b>!`,
        WORD_INDEX_OUT_OF_GROUP_RANGE: (groupIndex, rangeLimit, typedIndex) => `У розділі <b>${groupIndex}</b> тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
        WORD_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
        WORD_FOUND: ({word, translates}) => `Знайдено слово <b>${word}</b> з перекладами <b>${translates.join(', ')}</b>!`,
        WORD_NOT_FOUND: 'Такого слова немає у словнику!'
    };

    const patterns = {
        //###
        positionWithoutUnit: /[0123456789]+/,
        //###.##
        positionWithUnit: /(\d+)\.(\d+)/
    };

    const validatePositionWithUnit = (token) => {
        const [groupIndex, wordIndex] = token.split('.').map(Number);
        if (groupIndex <= 0) {
            return setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_GROUP_INDEX);
        }

        if (wordIndex <= 0) {
            return setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_WORD_INDEX);
        }

        if (groupIndex > voc.groups.length) {
            return setInvalidFeedback(tokenInput, feedbacks.GROUP_INDEX_OUT_OF_RANGE(voc.groups.length, groupIndex));
        }
        const group = voc.groups[groupIndex - 1];
        const groupContent = voc.getGroupContent(group);
        if (wordIndex > groupContent.length) {
            return setInvalidFeedback(tokenInput, feedbacks.WORD_INDEX_OUT_OF_GROUP_RANGE(groupIndex, groupContent.length, wordIndex));
        }
        const record = groupContent[wordIndex - 1];
        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

    const validatePositionWithoutUnit = (token) => {
        const wordIndex = Number(token);

        if (isNaN(wordIndex)) {
            return setInvalidFeedback(tokenInput, feedbacks.INVALID_INPUT);
        }

        if (wordIndex <= 0) {
            return setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_WORD_INDEX);
        }

        const allWords = voc.data;

        if (wordIndex > allWords.length) {
            return setInvalidFeedback(tokenInput, feedbacks.WORD_INDEX_OUT_OF_RANGE(allWords.length, wordIndex));
        }

        const record = allWords[wordIndex - 1];

        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

    const validateWordToken = (token) => {
        const wordIndex = voc.indexOf(token);

        if (wordIndex === -1) {
            return setInvalidFeedback(tokenInput, feedbacks.WORD_NOT_FOUND);
        }

        const record = voc.data[wordIndex];

        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

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
    }

    const deleteRecord = () => {
        const dialogContent = {
            header: 'Видалення слова',
            submitBtn: 'Видалити',
            cancelBtn: 'Скасувати',
            body: `<span class='text-primary'>Слово:</span> ${wordToDelete}`,
        };

        confirmDecorator(dialogContent, () => {
            voc.delete(wordToDelete);
            voc.print();
            voc.save();
            resetForm(form);
        });
    }

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, deleteRecord);
    }

    form.addEventListener('input', validateDeleteToken);
    form.addEventListener('submit', formSubmitHandler);
})();