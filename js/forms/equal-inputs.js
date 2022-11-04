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
        const value = input.value.trim();
        if (!value) {
            setInvalidFeedback(input, "Введіть " + ((input.name === "word") ? "слово!" : "переклад!"));
        } else if(value.includes(",")) {
            setInvalidFeedback(input, (input.name === "word")
                ? "Слово не може містити кому!"
                : "Переклад не може містити кому. Записуйте кожен переклад в окремому полі!");
        } else if (valueOccurence[value] > 1) {
            setInvalidFeedback(input, ((wordInput.value === value) ? "Слово та переклад" : "Переклади") + " співпадають!");
        } else {
            input.setCustomValidity("");
        }
    }
}