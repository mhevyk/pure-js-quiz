Array.prototype.unique = function () {
    return [...new Set(this)];
};

function shuffle(array) {
	return [...array].sort(() => 0.5 - Math.random());
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

function getValueFromSelect(select) {
    return select.options[select.selectedIndex].value;
}

function setValidFeedback(input, feedback, containerThatIncludesFeedback = input.parentElement) {
    input.setCustomValidity("");
    containerThatIncludesFeedback.querySelector(".valid").innerHTML = feedback;
}

function setInvalidFeedback(input, feedback, containerThatIncludesFeedback = input.parentElement) {
    input.setCustomValidity(feedback);
    containerThatIncludesFeedback.querySelector(".invalid").innerHTML = feedback;
}

function resetFeedbacks(form, feedbackSelector = "[data-default-feedback]") {
    const feedbacks = form.querySelectorAll(feedbackSelector);
    feedbacks.forEach(feedback => feedback.textContent = feedback.dataset.defaultFeedback);
}

function resetForm(form) {
    form.classList.remove("validated");
    form.reset();
    resetFeedbacks(form);
}

function confirmDecorator({header = "", body = "", submitBtn = "ОК", cancelBtn = "Скасувати"}, onDialogSubmitClick) {
    const dialog = new Dialog();
    dialog.header(header);
    dialog.body(body);
    dialog.submitBtn(submitBtn);
    dialog.cancelBtn(cancelBtn);

    dialog.open();
    dialog.addEventListener("submit", () => {
        onDialogSubmitClick();
        dialog.close();
    });
}

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

function parseFileName(filename) {
    const dotIndex = filename.lastIndexOf(".");
    return {
        rawName: filename.substring(0, dotIndex),
        extension: filename.substring(dotIndex + 1, filename.length)
    };
}