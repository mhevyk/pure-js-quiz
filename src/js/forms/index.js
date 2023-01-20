import { initForms } from './form';
import initGroupActionForms from './group-actions';
import initRecordActionForms from './record-actions';
import initVocabularyActionForms from './vocabulary-actions';
import initFileImport from './import';

function initFormComponents() {
    initForms();
    initRecordActionForms();
    initVocabularyActionForms();
    initFileImport();
    initGroupActionForms();
}

export { initFormComponents };

