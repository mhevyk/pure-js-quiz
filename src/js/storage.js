export const formAddOneTranslates = {
    id: 1,
    count: 1
};

// property for progress fill in firefox browser
export const PROGRESS_BAR_VALUE = '--value';

export const ERRORS_FILE_UPLOADING = {
    TEMPLATE_LOAD: 'Завантаження шаблону! Видаліть рядки із символами "***"!',
    NO_SEPARATOR_IN_ROW: (separator, row) => `Немає роздільника '${separator}' в рядку ${row}`,
    NO_WORD_IN_ROW: (row) => `Відсутнє слово в рядку ${row}!`,
    NO_TRANSLATES_IN_ROW: (row) => `Відсутні переклади в рядку ${row}`,
    WORD_AND_TRANSLATE_ARE_SAME: (row) => `Слово та один з перекладів співпадають в рядку ${row}`,
    TRANSLATES_ARE_SAME: (row) => `Переклади співпадають в рядку ${row}`,
    WRONG_FILE_EXTENSION: 'Файл не має розширення <b>.txt</b>!',
    EMPTY_FILE: 'Вміст файлу порожній!'
};

export const CSS_CLASSES = {
    buttonPrimary: 'button__primary',
    buttonSecondary: 'button__secondary'
};

export const DIALOG_CONTENT_DELETE_TRANSLATE = {
    header: 'Видалення перекладу',
    submitBtn: 'Так',
    body: 'Справді видалити переклад?',
    cancelBtn: 'Скасувати'
};

export const DIALOG_CONTENT_RESET_FILE_INPUT = {
    header: 'Видалення завантажених файлів',
    submitBtn: 'Так',
    body: 'Справді видалити всі завантажені файли?',
    cancelBtn: 'Скасувати'
};

export const DIALOG_CONTENT_RESET_TRANSLATES = {
    header: 'Скидання перекладів',
    submitBtn: 'Так',
    body: `
        Справді скинути переклади?
        <small>Всі переклади крім першого будуть видалені, а вміст першого буде очищено</small>
    `,
    cancelBtn: 'Скасувати'
};

export const DIALOG_CONTENT_CLEAR_VOCABULARY = {
    header: 'Очищення вмісту словника',
    submitBtn: 'Очистити',
    cancelBtn: 'Скасувати',
    body: 'Справді очистити словник?',
};

export const DIALOG_CONTENT_EXIT_APP = {
    header: 'Вихід з програми',
    body: 'Справді вийти із програми?',
    submitBtn: 'Так',
    cancelBtn: 'Скасувати'
};

export const DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD = (word, translates, group) => ({
    header: 'Додавання слова',
    submitBtn: 'Додати',
    cancelBtn: 'Скасувати',
    body: `
        <p><span class='text-primary'>Слово:</span> ${word}</p>
        <p><span class='text-primary'>Переклади:</span> ${translates.join(', ')}</p>
        <p><span class='text-primary'>Розділ:</span> ${group}</p>
    `,
});

export const DIALOG_CONTENT_TEMPLATE_ADD_GROUP = (group) => ({
    header: 'Додавання розділу',
    submitBtn: 'Додати',
    cancelBtn: 'Скасувати',
    body: `<span class='text-primary'>Назва розділу:</span> ${group}`,
});

export const DIALOG_CONTENT_TEMPLATE_DELETE_GROUP = (group) => ({
    header: 'Видалення розділу',
    submitBtn: 'Видалити',
    cancelBtn: 'Скасувати',
    body: `<span class='text-primary'>Назва розділу:</span> ${group}`,
});

export const DIALOG_CONTENT_TEMPLATE_IMPORT = (group, wordsToLoadCount) => ({
    header: 'Додавання слів до розділу',
    submitBtn: 'Додати',
    cancelBtn: 'Скасувати',
    body: `
        <p><span class='text-primary'>Розділ:</span> ${group}</p>
        <p><span class='text-primary'>Кількість слів:</span> ${wordsToLoadCount}</p>
    `
});

export const DIALOG_CONTENT_TEMPLATE_DELETE_ONE = (word) => ({
    header: 'Видалення слова',
    submitBtn: 'Видалити',
    cancelBtn: 'Скасувати',
    body: `<span class='text-primary'>Слово:</span> ${word}`,
});

export const DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH = (rightAnswersCount, questionsCount) => {
    const isResultGood = rightAnswersCount > (questionsCount / 2);
    const resultFeedback = `<span class="text-${isResultGood ? 'success' : 'fail'}">${isResultGood ? 'вдало' : 'невдало'}</span>`;

    return {
        header: 'Результат тестування',
        body: `
            <p>Тестування завершено ${resultFeedback},
            результат: <span class='text-primary'>${rightAnswersCount}/${questionsCount}</span>!
            <p><small class='link'>Переглянути результат тестування</small></p>
        `,
        submitBtn: 'Добре',
    };
};