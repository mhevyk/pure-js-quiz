(function () {
    const form = document.querySelector(".form__add-group");
    const groupInput = form.group;
    const voc = new Vocabulary();

    function validateExistingGroup(){
        const group = groupInput.value.trim();
        if (!group) {
            setInvalidFeedback(groupInput, `Введіть назву розділу!`);
        } else if (voc.groups.includes(group)) {
            setInvalidFeedback(groupInput, `Розділ <b>${group}</b> вже існує!`);
        } else {
            groupInput.setCustomValidity("");
        }
    }

    function addGroup() {
        if (!form.checkValidity()) return;
        
        const group = groupInput.value.trim();

        const dialogContent = {
            header: `Додавання розділу`,
            submitBtn: "Додати",
            cancelBtn: "Скасувати",
            body: `<span class="text-primary">Назва розділу:</span> ${group}`,
        };

        confirmDecorator(dialogContent, () => {
            voc.addGroup(group);
            voc.save();
            resetForm(form);
            updateSelectsWithGroups();
        });
    }

    form.addEventListener("input", validateExistingGroup);
    form.addEventListener("submit", addGroup);
})();