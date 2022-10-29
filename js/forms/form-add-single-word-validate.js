(function () {
    const form = document.querySelector(".form__add-single-word");

    function countValueOccurence(inputsArray) {
        return inputsArray.reduce((obj, current) => {
            const value = current.value;
            if (value) {
                obj[value] = obj[value] ? (obj[value] + 1) : 1;
            }
            return obj;
        }, {});
    }

    function validateInputsWithSameValue(event) {
        const currentInput = event.target;
        if (currentInput.tagName !== "INPUT") return;

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

    function addRecord(event) {
        event.preventDefault();

        const wordInput = form.word;
        const translateInputs = form.querySelectorAll("[name='translate']");
        const groupSelect = form.groups;

        const word = wordInput.value.trim();
        const translates = Array.from(translateInputs, translateInput => translateInput.value.trim());
        const group = getValueFromSelect(groupSelect).trim();

        const voc = new Vocabulary();
        voc.add({word, translates, group});
        voc.printTo(document.querySelector(".vocabulary"));

        const dialog = new Dialog();
        dialog.content({
            header: `<span class="text-success">Слово успішно додано!`,
            submitBtn: "ОК",
            body: `
                <p><b>Слово: </b>${word}</p>
                <p><b>Переклади: </b>${translates.join(", ")}</p>
                <p><b>Розділ: </b>${group}</p>
            `,
        });

        dialog.setOpenState(dialog.cancelButton, false);
        dialog.highlight(true);

        dialog.open();
        dialog.addEventListener("submit", dialog.close.bind(dialog));
        dialog.addEventListener("close", () => {
            dialog.removeHighlight();
            dialog.setOpenState(dialog.cancelButton, true);
        });

        resetForm(form);
    }

    form.addEventListener("input", validateInputsWithSameValue);
    form.addEventListener("submit", addRecord);
    
})();