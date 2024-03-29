const defaultOptions = {
    questionGuessType: true,
    showGroups: true,
    isAnswerInstantlyChecked: false
};

function initOptions() {
    const optionsData = localStorage.getItem('optionsAppData');
    return optionsData ? JSON.parse(optionsData) : defaultOptions;
}

export const options = initOptions();

function initOptionInputs() {
    const optionsInputs = document.querySelectorAll('[data-option]');
    optionsInputs.forEach(input => {
        const optionName = input.dataset.option;
        const optionValue = options[optionName];
        options[optionName] = optionValue;

        switch(input.type) {
            case 'checkbox':
                input.checked = optionValue;
                break;
        }
    });
}

function saveOptions() {
    const optionsDataToSave = JSON.stringify(options);
    localStorage.setItem('optionsAppData', optionsDataToSave);
}

export {
    initOptionInputs,
    saveOptions
};