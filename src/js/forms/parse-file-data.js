import { filterUnique } from '../utils';
import { ERRORS_FILE_UPLOADING } from '../storage';

function splitToLinesWithText(fileContent) {
    const fileContentWithoutCarriageReturn = fileContent.replace(/\r/g, '');
    const rawLines = fileContentWithoutCarriageReturn.split('\n');
    const nonEmptyLines = rawLines.filter(line => line.trim());
    return nonEmptyLines;
}

function executeTranslatesFromString(text) {
    const separatedTranslates = text.split(',');
    const trimmedTranslates = separatedTranslates.map(translate => translate.trim());
    return trimmedTranslates.filter(Boolean);
}

function createRecordsFromLines(lines, separator = ':') {
    return new Promise((resolve, reject) => {
        const records = lines.map((line, lineIndex) => {
            const row = lineIndex + 1;
            if (!line.includes(separator)) {
                reject(ERRORS_FILE_UPLOADING.NO_SEPARATOR_IN_ROW(separator, row));
            }
            const [wordText, translatesText] = line.split(separator);

            const word = wordText.trim().replaceAll(',', '');
            if (!word) {
                reject(ERRORS_FILE_UPLOADING.NO_WORD_IN_ROW(row));
            }

            const trimmedTranslatesText = translatesText.trim();
            if (!trimmedTranslatesText) {
                reject(ERRORS_FILE_UPLOADING.NO_TRANSLATES_IN_ROW(row));
            }

            const translates = executeTranslatesFromString(trimmedTranslatesText);

            if (translates.includes(word)) {
                reject(ERRORS_FILE_UPLOADING.WORD_AND_TRANSLATE_ARE_SAME(row));
            }

            if (filterUnique(translates).length !== translates.length) {
                reject(ERRORS_FILE_UPLOADING.TRANSLATES_ARE_SAME(row));
            }

            return { word, translates };
        });
        resolve(records);
    });
}

export {
    splitToLinesWithText,
    createRecordsFromLines
};