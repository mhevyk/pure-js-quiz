/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__add-single-word');
    const additionalTranslatesContainer = document.querySelector('.translates__container');

    const deleteTranslate = (deleteIndex) => {
        const translateContainerToDelete = document.querySelector(
            `[data-delete-index='${deleteIndex}']`
        );
        translateContainerToDelete.remove();
        updateTranslatesCount();
    }

    const showDeleteConfirm = (event) => {
        const dialogContent = {
            header: 'Видалення перекладу',
            submitBtn: 'Так',
            body: 'Справді видалити переклад?',
            cancelBtn: 'Скасувати'
        };

        confirmDecorator(dialogContent, () => {
            deleteTranslate(event.target.dataset.deleteIndex);
            validateFormAddInputs(form);
        });
    }

    const deleteTranslateHandler = (event) => {
        if (event.target.classList.contains('input-delete')) {
            showDeleteConfirm(event);
        }
    }

    additionalTranslatesContainer.addEventListener('click', deleteTranslateHandler);
})();
