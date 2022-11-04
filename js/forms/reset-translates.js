(function () {
    const resetTranslatesButton = document.querySelector(
        "#add-translate-reset"
    );
    const translatesContainer = document.querySelector(
        ".form__add-single-word .translates__additional"
    );

    function resetTranslates() {
        const dialogContent = {
            header: "Скидання перекладів",
            submitBtn: "Так",
            body: `
                Справді скинути переклади?
                <p class="small-description"> Всі переклади крім першого будуть видалені, а вміст першого буде очищено</p>
            `,
            cancelBtn: "Скасувати"
        };
        confirmDecorator(dialogContent, () => {
            const form = document.querySelector(".form__add-single-word");
            const firstTranslateInput = form.querySelector(
                "[name='translate']"
            );
            resetTextInput(firstTranslateInput);
            resetFeedbacks(form, "[data-reset]");

            COUNTERS.translateIdCounter
            removeContainerChildren(translatesContainer);
            updateTranslatesCount(1);
        });
    }

    resetTranslatesButton.addEventListener("click", resetTranslates);
})();