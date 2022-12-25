(function () {
    const forms = document.querySelectorAll(".form");
    const formsToValidate = document.querySelectorAll(".form.to-validate");

    function markValidated(form) {
        form.addEventListener("submit", event => event.target.classList.add("validated"));
    }

    forms.forEach(form => {
        form.addEventListener("submit", event => event.preventDefault());
    });
    formsToValidate.forEach(markValidated);
})();