function addColorValidateHandler(form) {
    form.addEventListener('submit', event => event.target.classList.add('validated'));
}

function addPreventDefaultHandler(form) {
    form.addEventListener('submit', event => event.preventDefault());
}

function initForms() {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        const { colorValidate } = form.dataset;
        if (colorValidate !== undefined) {
            addColorValidateHandler(form);
        }
        addPreventDefaultHandler(form);
    });
}

export { initForms };