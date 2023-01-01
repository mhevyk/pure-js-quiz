/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__vocabulary-clear');

    const clearVocabulary = () => {
        const dialogContent = {
            header: 'Очищення вмісту словника',
            submitBtn: 'Очистити',
            cancelBtn: 'Скасувати',
            body: 'Справді очистити словник?',
        };

        confirmDecorator(dialogContent, () => {
            const voc = new Vocabulary();
            voc.data.length && voc.clear();
        });
    }

    const formSubmitHandler = (event) => {
        const form = event.target;
        handleSubmitIfFormValid(form, clearVocabulary);
    }

    form.addEventListener('submit', formSubmitHandler);
})();