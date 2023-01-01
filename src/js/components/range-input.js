(() => {
    const rangeInputs = document.querySelectorAll('.range-input');

    const inputChangeHandler = (event) => {
        const rangeInput = event.target;
        const rangeOutput = rangeInput.nextElementSibling;
        rangeOutput.textContent = rangeInput.value;
    }

    const initRangeInput = (input) => {
        input.addEventListener('input', inputChangeHandler)
    }

    rangeInputs.forEach(input => initRangeInput(input));
})();