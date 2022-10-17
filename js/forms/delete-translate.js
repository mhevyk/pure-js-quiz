(function () {
    const deleteInputButtonList = document.querySelectorAll(".input-delete");

    function deleteTranslateContainer(clickedElementContainer) {
        const inputWrapper = clickedElementContainer.parentElement;
        const labelWithInputWrapper = inputWrapper.parentElement;
        labelWithInputWrapper.remove();
    }

    deleteInputButtonList.forEach(button => {
        button.addEventListener("click", event => {
            const clickedElementContainer = event.target.parentElement;
            const inputValue = clickedElementContainer.previousElementSibling.value;

            const dialog = new Dialog();

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