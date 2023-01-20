import { initFormAddSingleWord } from './record-add';
import { initAddTranslate } from './add-translate';
import { initDeleteTranslate } from './delete-translate';

function initRecordAddForm() {
    initFormAddSingleWord();
    initAddTranslate();
    initDeleteTranslate();
}

export default initRecordAddForm;