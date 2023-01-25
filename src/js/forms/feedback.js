export const FEEDBACKS_COMPARE_INPUTS_ADD_ONE = {
    EMPTY_INPUT: (condition) => 'Введіть ' + (condition ? 'слово!' : 'переклад!'),
    CONTAINS_COMMA: (condition) => condition
        ? 'Слово не може містити кому!'
        : 'Переклад не може містити кому. Записуйте кожен переклад в окремому полі!',
    SAME_INPUT_VALUES: (condition) => (condition ? 'Слово та переклад' : 'Переклади') + ' співпадають!'
};

export const FEEDBACKS_ADD_GROUP = {
    EMPTY_INPUT: 'Введіть назву розділу!',
    GROUP_ALREADY_EXISTS: (group) => `Розділ <b>${group}</b> вже існує!`
};

export const FEEDBACKS_FILE_UPLOADING = {
    LOAD_CANCELED: 'Завантаження файлів відмінено!',
    SUCCESSFULL_LOAD: (validFilesCount, generalFilesCount) => `Успішно завантажено ${validFilesCount} з ${generalFilesCount} файлів! Перегляньте деталі у випадаючому списку нижче!`,
    TEMPLATE_MISMATCH_ERROR: 'Жоден із завантажених файлів не відповідає <span class="link" data-page-button="vocabulary-group-import-template">шаблону</span>!'
};

export const FEEDBACKS_FORM_DELETE_ONE = {
    INVALID_INPUT: 'Введіть коректний порядковий номер або слово!',
    TOO_SMALL_GROUP_INDEX: 'Номер групи має бути більшим за 0!',
    TOO_SMALL_WORD_INDEX: 'Порядковий номер слова має бути більшим за 0!',
    GROUP_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> розділів, а введено розділ <b>${typedIndex}</b>!`,
    WORD_INDEX_OUT_OF_GROUP_RANGE: (groupIndex, rangeLimit, typedIndex) => `У розділі <b>${groupIndex}</b> тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
    WORD_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,
    WORD_FOUND: ({word, translations}) => `Знайдено слово <b>${word}</b> з перекладами <b>${translations.join(', ')}</b>!`,
    WORD_NOT_FOUND: 'Такого слова немає у словнику!'
};

const setValidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {
    input.setCustomValidity('');
    if (feedback) {
        containerThatIncludesFeedback.querySelector('.valid').innerHTML = feedback;
    }
};

const setInvalidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {
    input.setCustomValidity(feedback);
    if (feedback) {
        containerThatIncludesFeedback.querySelector('.invalid').innerHTML = feedback;
    }
};

const resetFeedbacks = (form, feedbackSelector = '[data-default-feedback]') => {
    const feedbacks = form.querySelectorAll(feedbackSelector);
    feedbacks.forEach(feedback => feedback.textContent = feedback.dataset.defaultFeedback);
};

export {
    setValidFeedback,
    setInvalidFeedback,
    resetFeedbacks
};