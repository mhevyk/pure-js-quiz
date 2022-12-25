(function () {
    const form = document.querySelector(".form__delete-one");
    const tokenInput = form.searchToken;
    const voc = new Vocabulary();

    let wordToDelete;

    const feedbacks = {
        INVALID_INPUT: `Введіть коректний порядковий номер або слово!`,
        TOO_SMALL_GROUP_INDEX: `Номер групи має бути більшим за 0!`,
        TOO_SMALL_WORD_INDEX: `Порядковий номер слова має бути більшим за 0!`,
        GROUP_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> розділів, а введено розділ <b>${typedIndex}</b>!`,
        WORD_INDEX_OUT_OF_GROUP_RANGE: (groupIndex, rangeLimit, typedIndex) => `У розділі <b>${groupIndex}</b> тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
        WORD_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
        WORD_FOUND: ({word, translates}) => `Знайдено слово <b>${word}</b> з перекладами <b>${translates.join(", ")}</b>!`,
        WORD_NOT_FOUND: `Такого слова немає у словнику!`
    };

    const patterns = {
        positionWithoutUnit: /[0123456789]+/, //###
        positionWithUnit: /(\d+)\.(\d+)/ //###.##
    };

    function validatePositionWithUnit(token) {
        const [groupIndex, wordIndex] = token.split(".").map(Number);
        if (groupIndex <= 0) {
            setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_GROUP_INDEX);
            return;
        }

        if (wordIndex <= 0) {
            setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_WORD_INDEX);
            return;
        }

        if (groupIndex > voc.groups.length) {
            setInvalidFeedback(tokenInput, feedbacks.GROUP_INDEX_OUT_OF_RANGE(voc.groups.length, groupIndex));
            return;
        }
        const group = voc.groups[groupIndex - 1];
        const groupContent = voc.getGroupContent(group);
        if (wordIndex > groupContent.length) {
            setInvalidFeedback(tokenInput, feedbacks.WORD_INDEX_OUT_OF_GROUP_RANGE(groupIndex, groupContent.length, wordIndex));
            return;
        }
        const record = groupContent[wordIndex - 1];
        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

    function validatePositionWithoutUnit(token) {
        const wordIndex = Number(token);

        if (isNaN(wordIndex)) {
            setInvalidFeedback(tokenInput, feedbacks.INVALID_INPUT);
            return;
        }

        if (wordIndex <= 0) {
            setInvalidFeedback(tokenInput, feedbacks.TOO_SMALL_WORD_INDEX);
            return;
        }

        const allWords = voc.data;

        if (wordIndex > allWords.length) {
            setInvalidFeedback(tokenInput, feedbacks.WORD_INDEX_OUT_OF_RANGE(allWords.length, wordIndex));
            return;
        }

        const record = allWords[wordIndex - 1];

        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

    function validateWordToken(token) {
        const wordIndex = voc.indexOf(token);

        if (wordIndex === -1) {
            setInvalidFeedback(tokenInput, feedbacks.WORD_NOT_FOUND);
            return;
        }

        const record = voc.data[wordIndex];

        setValidFeedback(tokenInput, feedbacks.WORD_FOUND(record));
        wordToDelete = record.word;
    }

    function validateDeleteToken(){
        const token = tokenInput.value.toLowerCase().trim();

        if (!token) {
            setInvalidFeedback(tokenInput, `Введіть критерій для пошуку!`);
        } else if (patterns.positionWithUnit.test(token)) {
            validatePositionWithUnit(token);
        } else if (patterns.positionWithoutUnit.test(token)) {
            validatePositionWithoutUnit(token);
        } else {
            validateWordToken(token);
        }
    }

    function deleteRecord() {
        if (!form.checkValidity()) return;

        const dialogContent = {
            header: `Видалення слова`,
            submitBtn: "Видалити",
            cancelBtn: "Скасувати",
            body: `<span class="text-primary">Слово:</span> ${wordToDelete}`,
        };

        confirmDecorator(dialogContent, () => {
            voc.delete(wordToDelete);
            voc.print();
            voc.save();
            resetForm(form);
        });
    }

    form.addEventListener("input", validateDeleteToken);
    form.addEventListener("submit", deleteRecord);
})();