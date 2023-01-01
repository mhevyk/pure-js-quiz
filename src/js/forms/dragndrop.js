(() => {
    const draggableEvents = ['dragenter', 'dragover'];
    const droppableEvents = ['dragleave', 'drop'];

    const highlight = (label) => label.classList.add('dragged-over');
    const unhighlight = (label) => label.classList.remove('dragged-over');

    const initLabels = (eventName, highlightCallback) => {
        const fileInputLabels = document.querySelectorAll('.file-input-label');
        const eventHandler = (label) => highlightCallback(label);
        
        fileInputLabels.forEach(label => label.addEventListener(eventName, eventHandler));
    }

    draggableEvents.forEach(eventName => initLabels(eventName, highlight));
    droppableEvents.forEach(eventName => initLabels(eventName, unhighlight));
})();