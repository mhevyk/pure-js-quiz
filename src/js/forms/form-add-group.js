/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__add-group');
    const groupInput = form.group;
    const voc = new Vocabulary();

    const validateExistingGroup = () => {
        const group = groupInput.value.trim();
        if (!group) {
            setInvalidFeedback(groupInput, 'Введіть назву розділу!');
        } else if (voc.groups.includes(group)) {
            setInvalidFeedback(groupInput, `Розділ <b>${group}</b> вже існує!`);
        } else {
            groupInput.setCustomValidity('');
        }
    }

    const addGroup = () => {
        const group = groupInput.value.trim();

        const dialogContent = {
            header: 'Додавання розділу',
            submitBtn: 'Додати',
            cancelBtn: 'Скасувати',
            body: `<span class='text-primary'>Назва розділу:</span> ${group}`,
        };

        confirmDecorator(dialogContent, () => {
            voc.addGroup(group);
            voc.save();
            resetForm(form);
            updateUserInterface();
        });
    }

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, addGroup);
    }

    form.addEventListener('input', validateExistingGroup);
    form.addEventListener('submit', formSubmitHandler);
})();