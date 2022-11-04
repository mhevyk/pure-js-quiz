(function () {
    const forms = document.querySelectorAll(".form");

    function markValidated(form) {
        const submitButton = form.querySelector("[type='submit']");
        submitButton.addEventListener("click", () => form.classList.add("validated"));
    }

    forms.forEach(markValidated);
})();