(function () {
    const form = document.querySelector(".form__import-txt");
    const resetButton = form.querySelector("#import-txt-file-reset");
    const fileInput = form.fileInput;
    const fileInputLabel = form.querySelector(".file-input-label");
    const uploadedFilesContainer = form.querySelector(".uploaded-files__info");
    const uploadedFilesCountContainer = document.querySelector(".uploaded-files__count");
    const validRecords = [];

    function markFileSectionValid(message = "Все добре!") {
        setValidFeedback(fileInput, message, fileInputLabel.nextElementSibling);
        fileInputLabel.classList.add("valid");
        fileInputLabel.classList.remove("invalid");
    }

    function markFileSectionInvalid(errorMessage = "Завантажте текстовий файл!") {
        setInvalidFeedback(fileInput, errorMessage, fileInputLabel.nextElementSibling);
        fileInputLabel.classList.remove("valid");
        fileInputLabel.classList.add("invalid");
    }

    markFileSectionInvalid();

    function resetFileInput(errorText) {
        uploadedFilesCountContainer.textContent = 0;
        new Toggler(form.querySelector(".toggler")).hide();
        fileInput.value = null;
        uploadedFilesContainer.innerHTML = "";
        validRecords.length = 0;
        markFileSectionInvalid(errorText);
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
                    .then(() => {
                        voc.print();
                    })
                    .finally(() => {
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
                if (!line.includes(separator)) {
                    reject(`Немає роздільника "${separator}" у рядку ${lineIndex + 1}`);
                }
                const [wordText, translatesText] = line.split(separator);

                const word = wordText.trim().replaceAll(",", "");
                if (!word) {
                    reject(`Відсутнє слово у рядку ${lineIndex + 1}!`);
                }

                const trimmedTranslatesText = translatesText.trim();
                if (!trimmedTranslatesText) {
                    reject(`Відсутні переклади у рядку ${lineIndex + 1}`);
                }

                const translates = executeTranslatesFromString(trimmedTranslatesText);

                if (translates.includes(word)) {
                    reject(`Слово та один з перекладів співпадають у рядку ${lineIndex + 1}`);
                }

                if (translates.unique().length !== translates.length) {
                    reject(`Переклади співпадають у рядку ${lineIndex + 1}`);
                }

                return { word, translates };
            });
            resolve(records);
        });
    }

    function closeBeforeLoading() {
        new Toggler(form.querySelector(".toggler")).hide();
    }

    function showSuccesfullyLoadedFileToUser(file, count) {
        uploadedFilesContainer.innerHTML += `
            <div class="uploaded__file success small-description">
                <i class="icon fa-solid fa-file"></i>
                Слова з файлу <b>${file.name}</b> готові до додавання у розділ! (Кількість слів: <b>${count}</b>)
            </div>`;
    }

    function showFileLoadingError(file, error) {
        uploadedFilesContainer.innerHTML += `
            <div class="uploaded__file fail small-description">
                <i class="icon fa fa-times" aria-hidden="true"></i>
                Файл <b>${file.name}</b> не був завантажений через помилку: ${error}
            </div>`;
    }

    async function readFilesAsync(files) {
        let validFilesCount = 0;
        const separator = getValueFromSelect(form.separators);
        for (const file of files) {
            try {
                const data = await readFileAsync(file);
                const lines = splitToLinesWithText(data);
                const records = await createRecordsFromLines(lines, separator);
                validRecords.push(...records);
                showSuccesfullyLoadedFileToUser(file, records.length);
                validFilesCount++;
            } catch (error) {
                showFileLoadingError(file, error);
            } finally {
                const prevFilesCount = Number(uploadedFilesCountContainer.textContent);
                uploadedFilesCountContainer.textContent = prevFilesCount + 1;
            }
        }
        return validFilesCount;
    }

    fileInput.addEventListener("change", event => {
        console.log("change")
        const files = [...event.target.files];
        //cancel was clicked and no files were uploaded
        if (!files.length) {
            resetFileInput("Завантаження файлів відмінено!");
            return;
        }
        readFilesAsync(files)
            .then(validFilesCount => {
                closeBeforeLoading();
                if (validRecords.length > 0) {
                    markFileSectionValid(`Успішно завантажено ${validFilesCount} з ${files.length} файлів! Перегляньте деталі у випадаючому списку нижче!`);
                } else {
                    markFileSectionInvalid(`Жоден із завантажених файлів не відповідає
                        <span class="page-open-button link" data-page="vocabulary-group-import-template">шаблону</span>!`
                    );
                    new PageNavigator().update();
                }
            });
    });

    resetButton.addEventListener("click", resetFileInputConfirm);
    form.addEventListener("submit", loadWordsFromTextFile);
})();