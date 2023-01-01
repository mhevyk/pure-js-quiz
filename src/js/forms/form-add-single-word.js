/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__add-single-word');

    const addRecord = () => {
        const wordInput = form.word;
        const translateInputs = form.querySelectorAll('[name="translate"]');
        const groupSelect = form.groups;

        const word = wordInput.value.trim();
        const translates = Array.from(translateInputs, translateInput => translateInput.value.trim());
        const group = getValueFromSelect(groupSelect).trim();

        const dialogContent = {
            header: 'Додавання слова',
            submitBtn: 'Додати',
            cancelBtn: 'Скасувати',
            body: `
                <p><span class='text-primary'>Слово:</span> ${word}</p>
                <p><span class='text-primary'>Переклади:</span> ${translates.join(', ')}</p>
                <p><span class='text-primary'>Розділ:</span> ${group}</p>
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

    const handleOnlyInputs = (event) => {
        if (event.target.tagName === 'INPUT') {
            validateFormAddInputs(form);
        }
    }

    const handleFormSubmit = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, addRecord);
    }

    form.addEventListener('input', handleOnlyInputs);
    form.addEventListener('submit', handleFormSubmit);  
})();