document.addEventListener("DOMContentLoaded", () => {
    const voc = new Vocabulary();
    voc.load();
    voc.print();
    updateSelectsWithGroups();
});