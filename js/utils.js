Array.prototype.unique = function () {
    return [...new Set(this)];
};

function updateTranslatesCount(value) {
    const translatesCountContainer = document.querySelector(
        ".form__add-single-word .translates__count"
    );
    const translates = document.querySelectorAll(
        ".form__add-single-word [name='translate']"
    );
    translatesCountContainer.textContent = value ?? translates.length;
}

function resetTextInput(input) {
    input.value = "";
}

function removeContainerChildren(container) {
    container.innerHTML = "";
}