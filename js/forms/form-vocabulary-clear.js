(function () {
    const form = document.querySelector(".form__vocabulary-clear");

    function clearVocabulary() {
        if (!form.checkValidity()) return;

        const dialogContent = {
            header: `Очищення вмісту словника`,
            submitBtn: "Очистити",
            cancelBtn: "Скасувати",
            body: `Справді очистити словник?`,
        };

        confirmDecorator(dialogContent, () => {
            const voc = new Vocabulary();
            voc.data.length && voc.clear();
        });
    }

    form.addEventListener("submit", clearVocabulary);
})();