(() => {
    const forms = document.querySelectorAll('.form');

    const addColorValidateHandler = (form) => {
        form.addEventListener('submit', event => event.target.classList.add('validated'));
    }

    const addPreventDefaultHandler = (form) => {
        form.addEventListener('submit', event => event.preventDefault());
    }


    forms.forEach(form => {
        const { colorValidate } = form.dataset;
        if (colorValidate !== undefined) {
            addColorValidateHandler(form);
        }
        addPreventDefaultHandler(form);
    });
})();