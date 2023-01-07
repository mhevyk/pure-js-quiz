
const draggableEvents = ['dragenter', 'dragover'];
const droppableEvents = ['dragleave', 'drop'];

function highlight(label) {
    label.classList.add('dragged-over');
}

function unhighlight(label) {
    label.classList.remove('dragged-over');
}

function initLabels(eventName, highlightCallback) {
    const fileInputLabels = document.querySelectorAll('.file-input-label');
    const eventHandler = (label) => highlightCallback(label);
    
    fileInputLabels.forEach(label => label.addEventListener(eventName, eventHandler));
}

function initDragndrop() {
    draggableEvents.forEach(eventName => initLabels(eventName, highlight));
    droppableEvents.forEach(eventName => initLabels(eventName, unhighlight));
}

export { initDragndrop };