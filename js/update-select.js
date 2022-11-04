function createOptions(array, defaultOptionText) {
    const defaultOption = `<option value="" selected disabled>${defaultOptionText}</option>`;
    const optionsWithValue = array.map(item => `<option value="${item}">${item}</option>`);
    return defaultOption + optionsWithValue;
}

function updateSelectsWithGroups() {
    const selects = document.querySelectorAll(".select[data-content='groups']");
    const voc = new Vocabulary();
    const selectContent = createOptions(voc.groups, "Виберіть розділ");
    selects.forEach(select => select.innerHTML = selectContent);
}