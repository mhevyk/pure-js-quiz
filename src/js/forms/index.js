import { initForms } from './form';
import { initAddTranslate } from './add-translate';
import { initDeleteTranslate } from './delete-translate';
import { initDragndrop } from './dragndrop';
import { initAddGroupForm } from './form-add-group';
import { initFormAddSingleWord } from './form-add-single-word';
import { initFormDeleteGroup } from './form-delete-group';
import { initFormDeleteOne } from './form-delete-one';
import { initFormImportTxt } from './form-import-txt';
import { initVocabularyClear } from './form-vocabulary-clear';

function initFormComponents() {
    initForms();
    initAddTranslate();
    initDeleteTranslate();
    initDragndrop();
    initAddGroupForm();
    initFormAddSingleWord();
    initFormDeleteGroup();
    initFormDeleteOne();
    initFormImportTxt();
    initVocabularyClear();
}

export { initFormComponents };

