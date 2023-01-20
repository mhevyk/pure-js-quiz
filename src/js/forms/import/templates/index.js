import { downloadTextTemplate } from './text';

const initTemplates = () => {
    const downloadButton = document.querySelector('#download-txt-template');
    
    downloadButton.addEventListener('click', downloadTextTemplate);
};

export { initTemplates };