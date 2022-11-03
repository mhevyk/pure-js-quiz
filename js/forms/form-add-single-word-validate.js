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

        const dialog = new Dialog();
        dialog.content({
            header: `Додавання слова`,
            submitBtn: "Додати",
            cancelBtn: "Скасувати",
            body: `
                <p><span class="text-primary">Слово:</span> ${word}</p>
                <p><span class="text-primary">Переклади:</span> ${translates.join(", ")}</p>
                <p><span class="text-primary">Розділ:</span> ${group}</p>
            `,
        });

        dialog.open();
        dialog.addEventListener("submit", () => {
            const voc = new Vocabulary();
            voc.add({word, translates, group});
            voc.print();
            resetForm(form);
            dialog.close();
        });
    }

    form.addEventListener("input", validateInputsWithSameValue);
    form.addEventListener("submit", addRecord);
    
})();