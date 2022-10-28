(function () {
    function deleteTranslate(deleteIndex) {
        const translateContainerToDelete = document.querySelector(
            `[data-delete-index='${deleteIndex}']`
        );
        translateContainerToDelete.remove();
        updateTranslatesCount();
    }

    document.querySelector(".translates").addEventListener("click", (event) => {
        const clicked = event.target;
        if (!clicked.classList.contains("input-delete")) return;

        const dialog = new Dialog();

        const deletedTranslateIndex = +clicked.dataset.deleteIndex;

        dialog.content({
            header: "Видалення перекладу",
            submitBtn: "Так",
            body: `Справді видалити переклад?`,
            cancelBtn: "Скасувати"
        });

        dialog.open();
        dialog.addEventListener("submit", () => {
            deleteTranslate(deletedTranslateIndex);
            dialog.close();
        });
    });
})();
