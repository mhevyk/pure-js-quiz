(function () {
    const form = document.querySelector(".form__add-group");
    const groupInput = form.group;
    const voc = new Vocabulary();

    function validateExistingGroup(){
        const group = groupInput.value;
        if (!group.trim()) {
            setInvalidFeedback(groupInput, `Введіть назву розділу!`);
        } else if (voc.groups.includes(group)) {
            setInvalidFeedback(groupInput, `Розділ <b>${group}</b> вже існує!`);
        } else {
            groupInput.setCustomValidity("");
        }
    }

    function addGroup(event) {
        event.preventDefault();
        const group = groupInput.value.trim();
        voc.addGroup(group);

        resetForm(form);
    }

    form.addEventListener("input", validateExistingGroup);
    form.addEventListener("submit", addGroup);
})();