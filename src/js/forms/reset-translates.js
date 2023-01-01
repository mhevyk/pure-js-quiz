/* eslint-disable no-undef */
(() => {
    const resetTranslatesButton = document.querySelector(
        '#add-translate-reset'
    );
    const translatesContainer = document.querySelector(
        '.form__add-single-word .additional__translates-container'
    );

    const resetTranslates = () => {
        const dialogContent = {
            header: 'Скидання перекладів',
            submitBtn: 'Так',
            body: `
                Справді скинути переклади?
                <small>Всі переклади крім першого будуть видалені, а вміст першого буде очищено</small>
            `,
            cancelBtn: 'Скасувати'
        };
        confirmDecorator(dialogContent, () => {
            const form = document.querySelector('.form__add-single-word');
            const firstTranslateInput = form.querySelector(
                '[name="translate"]'
            );
            resetInput(firstTranslateInput);
            resetFeedbacks(form, '[data-reset]');

            COUNTERS.translateIdCounter = 0;
            removeContainerChildren(translatesContainer);
            updateTranslatesCount(1);
        });
    }

    resetTranslatesButton.addEventListener('click', resetTranslates);
})();