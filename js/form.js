(function () {
    const clearFormButtons = document.querySelectorAll(".input__clear");

    function clearInput(event) {
        const clickedElement = event.target;
        const input = clickedElement.parentElement.previousElementSibling;
        input.value = "";
    }

    function markRequired() {
        const inputs = document.querySelectorAll(".form__group [required]");
        inputs.forEach(input => {
            input.parentElement.previousElementSibling?.classList.add("input-required");
        });
    }

    markRequired();

    clearFormButtons.forEach(button => {
        button.addEventListener("click", clearInput);
    });
})();