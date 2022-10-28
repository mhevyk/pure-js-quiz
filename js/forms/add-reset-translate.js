(function () {
    const addTranslateButton = document.querySelector("#add-translate");
    const resetTranslatesButton = document.querySelector(
        "#add-translate-reset"
    );

    const translatesContainer = document.querySelector(
        ".form__add-single-word .translates__additional"
    );

    let translateId = 0;

    function addTranslate() {
        const translateHTML = `
            <label class="label row" data-delete-index="${translateId}">
                <input type="text" name="translate" placeholder="Переклад" required>
                <div class="input-delete__container">
                    <i class="input-delete fa fa-trash" aria-hidden="true" title="Видалити переклад" data-delete-index="${translateId}"></i>
                </div>
            </label>
        `;
        translatesContainer.insertAdjacentHTML("beforeend", translateHTML);
        translateId++;
        updateTranslatesCount();
    }

    function resetTranslates() {
        const dialog = new Dialog();
        dialog.content({
            header: "Скидання перекладів",
            submitBtn: "Так",
            body: `
                Справді скинути переклади?
                <p class="small-description"> Всі переклади крім першого будуть видалені, а вміст першого буде очищено</p>
            `,
            cancelBtn: "Скасувати"
        });

        dialog.open();
        dialog.addEventListener("submit", () => {
            const firstTranslateInput = document.querySelector(
                ".form__add-single-word [name='translate']"
            );
            resetTextInput(firstTranslateInput);

            translateId = 0;
            removeContainerChildren(translatesContainer);
            updateTranslatesCount(1);
            dialog.close();
        });
    }

    addTranslateButton.addEventListener("click", addTranslate);
    resetTranslatesButton.addEventListener("click", resetTranslates);
})();