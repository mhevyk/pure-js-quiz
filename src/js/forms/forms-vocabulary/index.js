import initGroupActionForms from './group-actions';
import initRecordActionForms from './record-actions';
import initVocabularyActionForms from './vocabulary-actions';
import initFileImport from './import';

function initVocabularyForms() {
    initRecordActionForms();
    initVocabularyActionForms();
    initFileImport();
    initGroupActionForms();
}

export default initVocabularyForms;

