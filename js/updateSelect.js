function updateSelectsWithGroups() {
    const selects = document.querySelectorAll(".select[data-content='groups']");
    const voc = new Vocabulary();
    const groups = voc.groups;
    const defaultOption = `<option value="" selected disabled>Виберіть розділ</option>`;
    const optionsList = groups.map(group => `<option value="${group}">${group}</option>`);
    const selectContent = defaultOption + optionsList;
    selects.forEach(select => select.innerHTML = selectContent);
}