function countValueOccurence(inputsArray) {
    return inputsArray
        .filter(a => a.value)
        .reduce((obj, current) => {
            const value = current.value;
            obj[value] = (obj?.[value] + 1) || 1;
            return obj;
        },
    {});
}

function validateFormAddInputs(form) {
    const wordInput = form.word;
    const translateInputs = form.querySelectorAll("[name='translate']");
    const allInputs = [wordInput, ...translateInputs];

    const valueOccurence = countValueOccurence(allInputs);

    for (const input of allInputs) {
        if (!input.value.trim()) {
            setInvalidFeedback(input, "Введіть " + ((input.name === "word") ? "слово!" : "переклад!"));
        }
        else if (valueOccurence[input.value] > 1) {
            setInvalidFeedback(input, ((wordInput.value === input.value) ? "Слово та переклад" : "Переклади") + " співпадають!");
        } else {
            input.setCustomValidity("");
        }
    }
}