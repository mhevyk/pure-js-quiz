import { debounce } from '../../utils';

const draggableEvents = ['dragenter', 'dragover'];
const droppableEvents = ['dragleave', 'drop'];

function highlight() {
    this.classList.add('dragged-over');
}

function unhighlight() {
    this.classList.remove('dragged-over');
}

function initLabels(eventName, highlightCallback) {
    const fileInputLabels = document.querySelectorAll('.file-input-label');
    
    fileInputLabels.forEach(label => {
        label.addEventListener(eventName, debounce(highlightCallback, 100));
    });
}

function initDragndrop() {
    draggableEvents.forEach(eventName => initLabels(eventName, highlight));
    droppableEvents.forEach(eventName => initLabels(eventName, unhighlight));
}

export { initDragndrop };