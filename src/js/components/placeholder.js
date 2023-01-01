/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const placeholders = [
    //quiz-input-answer placeholder
    {
        show: () => {
            const form = document.querySelector('.form__quiz-input-answer');
            form.classList.remove('open');

            const placeholder = form.parentElement.querySelector('.placeholder');
            placeholder.classList.remove('hide');
        },
        hide: () => {
            const form = document.querySelector('.form__quiz-input-answer');
            form.classList.add('open');

            const placeholder = form.parentElement.querySelector('.placeholder');
            placeholder.classList.add('hide');
        }
    },
    //vocabulary placeholder
    {
        show: () => {
            const voc = new Vocabulary();
            voc.container.innerHTML = `<div class='placeholder vocabulary__placeholder'>
                Додайте слова до словника, щоб почати їх вивчення!
            </div>`
        },
        hide: () => {
            const voc = new Vocabulary();
            voc.container.innerHTML = '';
        }
    }
];

const updatePlaceholders = (status) => {
    for (const placeholder of placeholders) {
        placeholder[status]();
    }
}