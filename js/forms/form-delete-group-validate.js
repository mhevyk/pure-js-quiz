(function() {
    const form = document.querySelector(".form__delete-group");

    function deleteGroup(event) {
        event.preventDefault();
        const groupSelect = form.groups;
        const group = getValueFromSelect(groupSelect).trim();
        
        if (!group) return;

        const dialog = new Dialog();
        dialog.content({
            header: `Видалення розділу`,
            submitBtn: "Видалити",
            cancelBtn: "Скасувати",
            body: `
                <span class="text-primary">Назва розділу:</span> ${group}
            `,
        });

        dialog.open();
        dialog.addEventListener("submit", () => {
            const voc = new Vocabulary();
            voc.removeGroup(group);
            voc.print();
            resetForm(form);
            updateSelectsWithGroups();
            dialog.close();
        });
    }

    form.addEventListener("submit", deleteGroup);
})();