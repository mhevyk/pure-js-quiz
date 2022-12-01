(function () {
    const form = document.querySelector(".form__import-txt");

    const fileInput = form.fileInput;
    const fileInputLabel = form.querySelector(".file-input-label");
    const fileInputWrapper = new TogglerFileInput(fileInput, fileInputLabel);

    const uploading_errors = {
        TEMPLATE_LOAD: `Завантаження шаблону! Видаліть рядки із символами "***"!`,
        NO_SEPARATOR_IN_ROW: (separator, row) => `Немає роздільника "${separator}" в рядку ${row}`,
        NO_WORD_IN_ROW: (row) => `Відсутнє слово в рядку ${row}!`,
        NO_TRANSLATES_IN_ROW: (row) => `Відсутні переклади в рядку ${row}`,
        WORD_AND_TRANSLATE_ARE_SAME: (row) => `Слово та один з перекладів співпадають в рядку ${row}`,
        TRANSLATES_ARE_SAME: (row) => `Переклади співпадають в рядку ${row}`,
        WRONG_FILE_EXTENSION: `Файл не має розширення <b>.txt</b>!`,
    };

    const feedbacks = {
        LOAD_CANCELED: `Завантаження файлів відмінено!`,
        SUCCESSFULL_LOAD: (validFilesCount, generalFilesCount) => `Успішно завантажено ${validFilesCount} з ${generalFilesCount} файлів! Перегляньте деталі у випадаючому списку нижче!`,
        TEMPLATE_MISMATCH_ERROR: `Жоден із завантажених файлів не відповідає <span class="page-open-button link" data-page="vocabulary-group-import-template">шаблону</span>!`
    }

    const validRecords = [];

    function resetFileInput(errorText) {
        validRecords.length = 0;
        fileInputWrapper.reset(errorText);
    }

    function resetFileInputConfirm() {
        const dialogContent = {
            header: "Видалення завантажених файлів",
            submitBtn: "Так",
            body: `
                Справді видалити всі завантажені файли?
            `,
            cancelBtn: "Скасувати"
        };
        confirmDecorator(dialogContent, resetFileInput);
    }

    async function loadWordsFromTextFile(event) {
        event.preventDefault();
        if (!form.checkValidity()) return;

        const group = getValueFromSelect(form.groups);

        const dialogContent = {
            header: `Додавання слів до розділу`,
            submitBtn: "Додати",
            cancelBtn: "Скасувати",
            body: `
                <p><span class="text-primary">Розділ:</span> ${group}</p>
                <p><span class="text-primary">Кількість слів:</span> ${validRecords.length}</p>
            `,
        };

        confirmDecorator(dialogContent, () => {
            const loader = new Loader();
            loader.open();

            setTimeout(() => {
                const voc = new Vocabulary();
                const records = validRecords.map(record => ({ ...record, group }));

                voc.addManyAsync(records)
                    .then(() => voc.print())
                    .finally(() => {
                        voc.save();
                        loader.close();
                    });
                resetForm(form);
                resetFileInput();
            }, 500);
        });
    }

    function splitToLinesWithText(fileContent) {
        return fileContent
            .replace(/\r/g, "")
            .split("\n")
            .filter(line => line.trim())
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

    async function readFilesAsync(files) {
        let validFilesCount = 0;
        const separator = getValueFromSelect(form.separators);
        for (const file of files) {
            try {
                const fileExtension = file.name.split(".").pop();
                if (fileExtension !== "txt") {
                    throw uploading_errors.WRONG_FILE_EXTENSION;
                }

                const data = await readFileAsync(file);
                if (data.includes("***")) {
                    throw uploading_errors.TEMPLATE_LOAD;
                }

                const lines = splitToLinesWithText(data);
                const records = await createRecordsFromLines(lines, separator);
                validRecords.push(...records);
                fileInputWrapper.appendValidFile(file, records.length);
                validFilesCount++;
            } catch (error) {
                fileInputWrapper.appendInvalidFile(file, error);
            }
        }
        return validFilesCount;
    }

    fileInput.addEventListener("change", event => {
        const files = [...event.target.files];
        //cancel was clicked and no files were uploaded
        if (!files.length) {
            resetFileInput(feedbacks.LOAD_CANCELED);
            return;
        }
        readFilesAsync(files)
            .then(validFilesCount => {
                fileInputWrapper.toggler.hide();
                if (validRecords.length > 0) {
                    fileInputWrapper.setValid(feedbacks.SUCCESSFULL_LOAD(validFilesCount, files.length));
                } else {
                    fileInputWrapper.setInvalid(feedbacks.TEMPLATE_MISMATCH_ERROR);
                    new PageNavigator().update();
                }
            })
            .finally(() => fileInputWrapper.toggler.show());
    });

    const resetButton = form.querySelector("#import-txt-file-reset");
    resetButton.addEventListener("click", resetFileInputConfirm);

    form.addEventListener("submit", loadWordsFromTextFile);
})();