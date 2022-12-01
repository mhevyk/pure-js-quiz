(function () {
    const form = document.querySelector(".form__add-single-word");

    function addRecord(event) {
        event.preventDefault();
        if (!form.checkValidity()) return;

        const wordInput = form.word;
        const translateInputs = form.querySelectorAll("[name='translate']");
        const groupSelect = form.groups;

        const word = wordInput.value.trim();
        const translates = Array.from(translateInputs, translateInput => translateInput.value.trim());
        const group = getValueFromSelect(groupSelect).trim();

        const dialogContent = {
            header: `Додавання слова`,
            submitBtn: "Додати",
            cancelBtn: "Скасувати",
            body: `
                <p><span class="text-primary">Слово:</span> ${word}</p>
                <p><span class="text-primary">Переклади:</span> ${translates.join(", ")}</p>
                <p><span class="text-primary">Розділ:</span> ${group}</p>
            `,
        };

        confirmDecorator(dialogContent, () => {
            const voc = new Vocabulary();
            voc.addOne({word, translates, group});
            voc.print();
            voc.save();
            resetForm(form);
        });
    }

    function handleOnlyInputs(event) {
        if (event.target.tagName !== "INPUT") return;
        validateFormAddInputs(form);
    }

    form.addEventListener("input", handleOnlyInputs);
    form.addEventListener("submit", addRecord);  
})();