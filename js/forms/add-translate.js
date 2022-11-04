(function () {
    const addTranslateButton = document.querySelector("#add-translate");
    const translatesContainer = document.querySelector(
        ".form__add-single-word .translates__additional"
    );

    function addTranslate() {
        const translateHTML = `
            <label class="label row" data-delete-index="${COUNTERS.translateIdCounter}">
                <div class="input-delete__container">
                    <i class="input-delete fa fa-trash" aria-hidden="true" title="Видалити переклад" data-delete-index="${COUNTERS.translateIdCounter}"></i>
                </div>
                <input type="text" name="translate" placeholder="Переклад" maxlength="40" required>
                <div class="feedbacks small-description">
                    <div class="feedback valid" aria-live="polite">Переклад введено правильно!</div>
                    <div class="feedback invalid" data-default-feedback="Введіть переклад!">Введіть переклад!</div>
                </div>
            </label>
        `;
        translatesContainer.insertAdjacentHTML("beforeend", translateHTML);
        COUNTERS.translateIdCounter++;
        updateTranslatesCount();
    }

    addTranslateButton.addEventListener("click", addTranslate);
})();