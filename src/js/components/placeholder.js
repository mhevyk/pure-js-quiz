import { vocabularyContainer } from '../vocabulary';
import { FORM_QUIZ_INPUT_ANSWER } from '../forms/form';

const placeholders = [
    //quiz-input-answer placeholder
    {
        show: () => {
            FORM_QUIZ_INPUT_ANSWER.classList.remove('open');

            const placeholder = FORM_QUIZ_INPUT_ANSWER.parentElement.querySelector('.placeholder');
            placeholder.classList.remove('hide');
        },
        hide: () => {
            FORM_QUIZ_INPUT_ANSWER.classList.add('open');

            const placeholder = FORM_QUIZ_INPUT_ANSWER.parentElement.querySelector('.placeholder');
            placeholder.classList.add('hide');
        }
    },
    //vocabulary placeholder
    {
        show: () => {
            vocabularyContainer.innerHTML = `
                <div class='placeholder vocabulary__placeholder'>
                    Додайте слова до словника, щоб почати їх вивчення!
                </div>
            `;
        },
        hide: () => {
            vocabularyContainer.innerHTML = '';
        }
    }
];

function updatePlaceholders(status) {
    for (const placeholder of placeholders) {
        placeholder[status]();
    }
}

export { updatePlaceholders };