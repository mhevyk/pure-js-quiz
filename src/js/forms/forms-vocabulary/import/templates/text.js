import { FORM_FILE_IMPORT } from '../../../form';
import {
    getValueFromSelect,
    downloadTextFile,
    fetchTextFile
} from '../../../../utils';

const replaceTemplateSeparator = (text) => {
    const separator = getValueFromSelect(FORM_FILE_IMPORT.separators);
    return {
        separator,
        text: text.replaceAll('&', separator)
    };
};

const downloadTextTemplate = async () => {
    const templateText = await fetchTextFile('import-templates/text.txt');

    const { text, separator } = replaceTemplateSeparator(templateText);

    const templateTextWithDescription = 
        `*** Це шаблон коректного словника з вибраним роздільником ${separator}\n`
        + '*** Якщо хочете завантажити цей шаблон у словник, то видаліть текст із зірочками на початку\n'
        + `*** [слово] ${separator} [переклад1], [переклад2], ...\n`
        + `${text}`;
    
    downloadTextFile('template', templateTextWithDescription);
};

export { downloadTextTemplate };