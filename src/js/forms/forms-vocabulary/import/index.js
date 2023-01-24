import initTemplates from './templates';
import { initFormImportTxt } from './form-import-txt';
import { initDragndrop } from './dragndrop';

function initFileImport() {
    initDragndrop();
    initFormImportTxt();
    initTemplates();
}

export default initFileImport;