import { initFormImportTxt } from './form-import-txt';
import { initDragndrop } from './dragndrop';
import { initTemplates } from './templates';

function initFileImport() {
    initDragndrop();
    initFormImportTxt();
    initTemplates();
}

export default initFileImport;