(() => {
    const radioInputs = document.querySelectorAll('.option-radio');
    const checkedRadioIcon = '<i class="fa fa-circle" aria-hidden="true"></i>';

    const resetAllRadios = () => {
        radioInputs.forEach(radioInput => {
            const label = radioInput.nextElementSibling;
            label.classList.remove('active');
            label.innerHTML = '';
        });
    }
    
    const toggleChecked = (radioInput) => {
        resetAllRadios();
        const label = radioInput.nextElementSibling;
        label.classList.toggle('active');
        label.innerHTML = label.innerHTML.trim() ? '' : checkedRadioIcon;
    }

    const changeHandler = (event) => {
        const radioInput = event.target;
        toggleChecked(radioInput);
    }

    radioInputs.forEach(radioInput => {
        radioInput.addEventListener('change', changeHandler);
        if (radioInput.checked) {
            toggleChecked(radioInput);
        }
    });
})();