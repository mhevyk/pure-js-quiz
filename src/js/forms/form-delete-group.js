/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__delete-group');

    const deleteGroup = () => {
        const group = getValueFromSelect(form.groups);

        const dialogContent = {
            header: 'Видалення розділу',
            submitBtn: 'Видалити',
            cancelBtn: 'Скасувати',
            body: `<span class='text-primary'>Назва розділу:</span> ${group}`,
        };

        confirmDecorator(dialogContent, () => {
            const voc = new Vocabulary();
            voc.removeGroup(group);
            voc.print();
            voc.save();
            resetForm(form);
            updateUserInterface();
        });
    }

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, deleteGroup);
    }

    form.addEventListener('submit', formSubmitHandler);
})();