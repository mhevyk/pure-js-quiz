import initTemplates from './templates';
import { initFormImportTxt } from './import-text-file';
import { initDragndrop } from './dragndrop';

function initFileImport() {
    initDragndrop();
    initFormImportTxt();
    initTemplates();
}

export default initFileImport;