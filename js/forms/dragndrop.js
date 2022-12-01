(function () {
    const fileInputLabels = document.querySelectorAll(".file-input-label");

    ["dragenter", "dragover"].forEach(eventName => {
        fileInputLabels.forEach(label => label.addEventListener(eventName, () => highlight(label)));
    });

    ["dragleave", "drop"].forEach(eventName => {
        fileInputLabels.forEach(label => label.addEventListener(eventName, () => removeHighlight(label)));
    });

    function highlight(label) {
        label.classList.add("dragged-over");
    }

    function removeHighlight(label) {
        label.classList.remove("dragged-over");
    }
})();