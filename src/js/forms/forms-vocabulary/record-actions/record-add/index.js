import { initFormAddSingleWord } from './record-add';
import { initAddtranslation } from './add-translation';
import { initDeletetranslation } from './delete-translation';

function initRecordAddForm() {
    initFormAddSingleWord();
    initAddtranslation();
    initDeletetranslation();
}

export default initRecordAddForm;