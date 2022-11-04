(function() {
    const form = document.querySelector(".form__delete-group");

    function deleteGroup(event) {
        event.preventDefault();
        if (!form.checkValidity()) return;
        
        const group = getValueFromSelect(form.groups);

        const dialogContent = {
            header: `Видалення розділу`,
            submitBtn: "Видалити",
            cancelBtn: "Скасувати",
            body: `<span class="text-primary">Назва розділу:</span> ${group}`,
        };

        confirmDecorator(dialogContent, () => {
            const voc = new Vocabulary();
            voc.removeGroup(group);
            voc.print();
            resetForm(form);
            updateSelectsWithGroups();
        });
    }

    form.addEventListener("submit", deleteGroup);
})();