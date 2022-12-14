import TogglerFileInput from '../components/toggler-file-input';
import Loader from '../popups/loader';
import { vocabulary } from '../vocabulary';
import { createRecordsFromLines, splitToLinesWithText } from './parse-file-data';
import { ERRORS_FILE_UPLOADING, DIALOG_CONTENT_TEMPLATE_IMPORT } from '../storage';
import { FEEDBACKS_FILE_UPLOADING } from './feedback';
import { updateUserInterface } from '../update-user-interface';
import {
    getValueFromSelect,
    submitAfterDialogConfirm,
    resetForm,
    handleSubmitIfFormValid,
    parseFileName,
    readFileAsync
} from '../utils';

const initFormImportTxt = () => {
    const form = document.querySelector('.form__import-txt');

    const fileInput = form.fileInput;
    const fileInputLabel = form.querySelector('.file-input-label');
    const fileInputWrapper = new TogglerFileInput(fileInput, fileInputLabel);

    const validRecords = [];

    const resetFileInput = (errorText) => {
        validRecords.length = 0;
        fileInputWrapper.reset(errorText);
    };

    const loadWordsFromTextFile = async () => {
        const group = getValueFromSelect(form.groups);
        const dialogContent = DIALOG_CONTENT_TEMPLATE_IMPORT(group, validRecords.length);

        submitAfterDialogConfirm(dialogContent, () => {
            const loader = new Loader();
            loader.open();

            setTimeout(() => {
                const records = validRecords.map(record => ({ ...record, group }));

                vocabulary.addManyAsync(records)
                    .then(() => vocabulary.print())
                    .finally(() => {
                        vocabulary.save();
                        loader.close();
                    });
                resetForm(form);
                resetFileInput();
                updateUserInterface();
            }, 500);
        });
    };

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, loadWordsFromTextFile);
    };

    const readFilesAsync = async (files) => {
        let validFilesCount = 0;
        const separator = getValueFromSelect(form.separators);
        for (const file of files) {
            try {
                const {extension} = parseFileName(file.name);
                if (extension !== 'txt') {
                    throw ERRORS_FILE_UPLOADING.WRONG_FILE_EXTENSION;
                }

                const data = await readFileAsync(file);
                if (!data.trim()) {
                    throw ERRORS_FILE_UPLOADING.EMPTY_FILE;
                }
                if (data.includes('***')) {
                    throw ERRORS_FILE_UPLOADING.TEMPLATE_LOAD;
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
    };

    fileInput.addEventListener('change', event => {
        const files = [...event.target.files];
        //cancel was clicked and no files were uploaded
        if (!files.length) {
            resetFileInput(FEEDBACKS_FILE_UPLOADING.LOAD_CANCELED);
            return;
        }
        readFilesAsync(files)
            .then(validFilesCount => {
                fileInputWrapper.toggler.hide();
                if (validRecords.length > 0) {
                    fileInputWrapper.setValid(FEEDBACKS_FILE_UPLOADING.SUCCESSFULL_LOAD(validFilesCount, files.length));
                } else {
                    fileInputWrapper.setInvalid(FEEDBACKS_FILE_UPLOADING.TEMPLATE_MISMATCH_ERROR);
                }
            })
            .finally(() => fileInputWrapper.toggler.show());
    });

    const resetButton = form.querySelector('#import-txt-file-reset');
    resetButton.addEventListener('click', () => fileInputWrapper.resetConfirm(resetFileInput));

    form.addEventListener('submit', formSubmitHandler);
};

export { initFormImportTxt };