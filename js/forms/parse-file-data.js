const fileUploadingErrors = {
    TEMPLATE_LOAD: `Завантаження шаблону! Видаліть рядки із символами "***"!`,
    NO_SEPARATOR_IN_ROW: (separator, row) => `Немає роздільника "${separator}" в рядку ${row}`,
    NO_WORD_IN_ROW: (row) => `Відсутнє слово в рядку ${row}!`,
    NO_TRANSLATES_IN_ROW: (row) => `Відсутні переклади в рядку ${row}`,
    WORD_AND_TRANSLATE_ARE_SAME: (row) => `Слово та один з перекладів співпадають в рядку ${row}`,
    TRANSLATES_ARE_SAME: (row) => `Переклади співпадають в рядку ${row}`,
    WRONG_FILE_EXTENSION: `Файл не має розширення <b>.txt</b>!`,
};

const fileUploadingFeedbacks = {
    LOAD_CANCELED: `Завантаження файлів відмінено!`,
    SUCCESSFULL_LOAD: (validFilesCount, generalFilesCount) => `Успішно завантажено ${validFilesCount} з ${generalFilesCount} файлів! Перегляньте деталі у випадаючому списку нижче!`,
    TEMPLATE_MISMATCH_ERROR: `Жоден із завантажених файлів не відповідає <span class="page-open-button link" data-page="vocabulary-group-import-template">шаблону</span>!`
}

function splitToLinesWithText(fileContent) {
    return fileContent
        .replace(/\r/g, "")
        .split("\n")
        .filter(line => line.trim());
}

function executeTranslatesFromString(text) {
    const separatedTranslates = text.split(",");
    const trimmedTranslates = separatedTranslates.map(translate => translate.trim());
    return trimmedTranslates.filter(Boolean);
}

function createRecordsFromLines(lines, separator = ":") {
    return new Promise((resolve, reject) => {
        const records = lines.map((line, lineIndex) => {
            const row = lineIndex + 1;
            if (!line.includes(separator)) {
                reject(uploading_errors.NO_SEPARATOR_IN_ROW(separator, row));
            }
            const [wordText, translatesText] = line.split(separator);

            const word = wordText.trim().replaceAll(",", "");
            if (!word) {
                reject(uploading_errors.NO_WORD_IN_ROW(row));
            }

            const trimmedTranslatesText = translatesText.trim();
            if (!trimmedTranslatesText) {
                reject(uploading_errors.NO_TRANSLATES_IN_ROW(row));
            }

            const translates = executeTranslatesFromString(trimmedTranslatesText);

            if (translates.includes(word)) {
                reject(uploading_errors.WORD_AND_TRANSLATE_ARE_SAME(row));
            }

            if (translates.unique().length !== translates.length) {
                reject(uploading_errors.TRANSLATES_ARE_SAME(row));
            }

            return { word, translates };
        });
        resolve(records);
    });
}