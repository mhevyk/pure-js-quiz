(function () {
    const forms = document.querySelectorAll(".form");
    forms.forEach(form => {
        const submitButton = form.querySelector("[type='submit']");
        submitButton.addEventListener("click", markFormValidated.bind(null, form));
    })
})();