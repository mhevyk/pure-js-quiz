(function () {
    const form = document.querySelector(".form__add-single-word");
    const additionalTranslatesContainer = document.querySelector(".translates");

    function deleteTranslate(deleteIndex) {
        const translateContainerToDelete = document.querySelector(
            `[data-delete-index='${deleteIndex}']`
        );
        translateContainerToDelete.remove();
        updateTranslatesCount();
    }

    function showDeleteConfirm(event) {
        const dialogContent = {
            header: "Видалення перекладу",
            submitBtn: "Так",
            body: `Справді видалити переклад?`,
            cancelBtn: "Скасувати"
        };

        confirmDecorator(dialogContent, () => {
            deleteTranslate(event.target.dataset.deleteIndex);
            validateFormAddInputs(form);
        });
    }

    function handleOnlyDeleteButtons(event) {
        if (!event.target.classList.contains("input-delete")) return;
        showDeleteConfirm(event);
    }

    additionalTranslatesContainer.addEventListener("click", handleOnlyDeleteButtons);
})();
