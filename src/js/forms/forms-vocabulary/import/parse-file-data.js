import { filterUnique } from '../../../utils';
import { ERRORS_FILE_UPLOADING } from '../../../storage';

function splitToLinesWithText(fileContent) {
    const fileContentWithoutCarriageReturn = fileContent.replace(/\r/g, '');
    const rawLines = fileContentWithoutCarriageReturn.split('\n');
    const nonEmptyLines = rawLines.filter(line => line.trim());
    return nonEmptyLines;
}

function executetranslationsFromString(text) {
    const separatedtranslations = text.split(',');
    const trimmedtranslations = separatedtranslations.map(translation => translation.trim());
    return trimmedtranslations.filter(Boolean);
}

function createRecordsFromLines(lines, separator = ':') {
    return new Promise((resolve, reject) => {
        const records = lines.map((line, lineIndex) => {
            const row = lineIndex + 1;
            if (!line.includes(separator)) {
                reject(ERRORS_FILE_UPLOADING.NO_SEPARATOR_IN_ROW(separator, row));
            }
            const [wordText, translationsText] = line.split(separator);

            const word = wordText.trim().replaceAll(',', '');
            if (!word) {
                reject(ERRORS_FILE_UPLOADING.NO_WORD_IN_ROW(row));
            }

            const trimmedtranslationsText = translationsText.trim();
            if (!trimmedtranslationsText) {
                reject(ERRORS_FILE_UPLOADING.NO_translationS_IN_ROW(row));
            }

            const translations = executetranslationsFromString(trimmedtranslationsText);

            if (translations.includes(word)) {
                reject(ERRORS_FILE_UPLOADING.WORD_AND_translation_ARE_SAME(row));
            }

            if (filterUnique(translations).length !== translations.length) {
                reject(ERRORS_FILE_UPLOADING.translationS_ARE_SAME(row));
            }

            return { word, translations };
        });
        resolve(records);
    });
}

export {
    splitToLinesWithText,
    createRecordsFromLines
};