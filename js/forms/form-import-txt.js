(function () {
    const form = document.querySelector(".form__import-txt");

    const fileInput = form.fileInput;
    const fileInputLabel = form.querySelector(".file-input-label");
    const fileInputWrapper = new TogglerFileInput(fileInput, fileInputLabel);

    const validRecords = [];

    function resetFileInput(errorText) {
        validRecords.length = 0;
        fileInputWrapper.reset(errorText);
    }

    async function loadWordsFromTextFile() {
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

    async function readFilesAsync(files) {
        let validFilesCount = 0;
        const separator = getValueFromSelect(form.separators);
        for (const file of files) {
            try {
                const {extension} = parseFileName(file.name);
                if (extension !== "txt") {
                    throw fileUploadingErrors.WRONG_FILE_EXTENSION;
                }

                const data = await readFileAsync(file);
                if (data.includes("***")) {
                    throw fileUploadingErrors.TEMPLATE_LOAD;
                }

                const lines = splitToLinesWithText(data);
                const records = await createRecordsFromLines(lines, separator);
                validRecords.push(...records);
                fileInputWrapper.appendValidFile(file, records.length);
                validFilesCount++;
            } catch (error) {
                console.log(error)
                fileInputWrapper.appendInvalidFile(file, error);
            }
        }
        return validFilesCount;
    }

    fileInput.addEventListener("change", event => {
        const files = [...event.target.files];
        //cancel was clicked and no files were uploaded
        if (!files.length) {
            resetFileInput(fileUploadingFeedbacks.LOAD_CANCELED);
            return;
        }
        readFilesAsync(files)
            .then(validFilesCount => {
                fileInputWrapper.toggler.hide();
                if (validRecords.length > 0) {
                    fileInputWrapper.setValid(fileUploadingFeedbacks.SUCCESSFULL_LOAD(validFilesCount, files.length));
                } else {
                    fileInputWrapper.setInvalid(fileUploadingFeedbacks.TEMPLATE_MISMATCH_ERROR);
                    new PageNavigator().update();
                }
            })
            .finally(() => fileInputWrapper.toggler.show());
    });

    const resetButton = form.querySelector("#import-txt-file-reset");
    resetButton.addEventListener("click", () => fileInputWrapper.resetConfirm(resetFileInput));

    form.addEventListener("submit", loadWordsFromTextFile);
})();