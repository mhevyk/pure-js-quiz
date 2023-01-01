(() => {
    const checkboxes = document.querySelectorAll('.option-checkbox');
    const checkedCheckboxIcon = '<i class="fa fa-check" aria-hidden="true"></i>';

    const toggleCheckedState = (checkbox) => {
        const label = checkbox.nextElementSibling;
        label.classList.toggle('active');
    }

    const checkboxChangeHandler = (event) => {
        toggleCheckedState(event.target);
    }

    const initCheckbox = (checkbox) => {
        checkbox.addEventListener('change', checkboxChangeHandler);
        if (checkbox.checked) {
            toggleCheckedState(checkbox);
        }

        const label = checkbox.nextElementSibling;
        label.innerHTML = checkedCheckboxIcon;
    }

    checkboxes.forEach(checkbox => initCheckbox(checkbox));
})();