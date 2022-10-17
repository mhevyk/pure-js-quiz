(function () {
    const deleteInputButtonList = document.querySelectorAll(".input-delete");

    const dialog = new Dialog();

    function deleteTranslateContainer(clickedElementContainer) {
        const inputWrapper = clickedElementContainer.parentElement;
        const labelWithInputWrapper = inputWrapper.parentElement;
        labelWithInputWrapper.remove();
    }

    deleteInputButtonList.forEach(button => {
        button.addEventListener("click", event => {
            const clickedElementContainer = event.target.parentElement;
            const inputValue = clickedElementContainer.previousElementSibling.value;

            dialog.content({
                header: "Видалення перекладу",
                submitBtn: "Так",
                body: `Справді видалити переклад<b>${inputValue ? ` ${inputValue}` : ``}</b>?`,
                cancelBtn: "Скасувати"
            });

            dialog.open();
            dialog.addEventListener("submit", () => {
                deleteTranslateContainer(clickedElementContainer);
                dialog.close();
            });
        });
    });
})();