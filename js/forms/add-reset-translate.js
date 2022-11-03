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
                <div class="input-delete__container">
                    <i class="input-delete fa fa-trash" aria-hidden="true" title="Видалити переклад" data-delete-index="${translateId}"></i>
                </div>
                <input type="text" name="translate" placeholder="Переклад" maxlength="40" required>
                <div class="feedbacks small-description">
                    <div class="feedback valid" aria-live="polite">Переклад введено правильно!</div>
                    <div class="feedback invalid" data-default-feedback="Введіть переклад!">Введіть переклад!</div>
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
            const form = document.querySelector(".form__add-single-word");
            const firstTranslateInput = form.querySelector(
                "[name='translate']"
            );
            resetTextInput(firstTranslateInput);

            resetFeedbacks(form, "[data-reset]");

            translateId = 0;
            removeContainerChildren(translatesContainer);
            updateTranslatesCount(1);
            dialog.close();
        });
    }

    addTranslateButton.addEventListener("click", addTranslate);
    resetTranslatesButton.addEventListener("click", resetTranslates);
})();