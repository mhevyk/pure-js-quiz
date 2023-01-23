import { quizResultList } from '../../storage';

const detailsPage = document.querySelector('[data-quiz-details-questions]');

const tableRecordTemplate = ({ name, userAnswer, correctAnswer, isAnswerCorrect }) => {
    return `
        <div class="table__record">
            <div class="table__item">
                <span>
                    ${name}
                </span>
            </div>
            <div class="table__item table__item-index">
                <i class="fa-solid ${isAnswerCorrect ? 'fa-circle-check text-success' : 'fa-times-circle text-fail'}"></i>
            </div>
            <div class="table__item text-muted">${userAnswer}</div>
            <div class="table__item">${correctAnswer}</div>
        </div>
    `;
};

function printQuestionsTable(detailsId) {
    const { questions } = quizResultList[detailsId];

    const tableContent = questions.reduce((result, question) => result + tableRecordTemplate(question), '');
    const tableContainer = detailsPage.querySelector('[data-content=questions]');
    tableContainer.innerHTML = tableContent;
}

export { printQuestionsTable };