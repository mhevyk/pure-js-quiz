import { downloadTextTemplate } from './text';

function initTemplates() {
    const downloadButton = document.querySelector('#download-txt-template');
    downloadButton.addEventListener('click', downloadTextTemplate);
}

export default initTemplates;