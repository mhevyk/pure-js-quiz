import { appendResultItem, countRightAndWrongAnswers } from '../result-item';
import { quizResultList } from '../../storage';
import { createPercentageChart } from './chart-answers-percentage';

const detailedInfoPage = document.querySelector('[data-page=results-detailed-info]');
const resultContainer = document.querySelector('.result__container');
const canvas = detailedInfoPage.querySelector('#results-detailed-info__chart');

const tableRecordTemplate = ({ name, userAnswer, correctAnswer }) => {
    const isAnswerRight = userAnswer === correctAnswer;
    return `
        <div class="table__record">
            <div class="table__item">
                ${name}
            </div>
            <div class="table__item table__item-index">
                <i class="fa-solid ${isAnswerRight ? 'fa-circle-check text-success' : 'fa-times-circle text-fail'}"></i>
            </div>
            <div class="table__item">${userAnswer}</div>
            <div class="table__item">${correctAnswer}</div>
        </div>
    `;
};

function printQuestions(questions) {
    const tableContent = questions.reduce((result, question) => result + tableRecordTemplate(question), '');
    const tableContainer = document.querySelector('.table [data-content=questions]');
    tableContainer.innerHTML = tableContent;
}

function fillInDetailedInfoPage(event) {
    const detailedInfoIndex = Number(event.target.dataset?.detailedInfoIndex);
    if (isNaN(detailedInfoIndex)) {
        return;
    }

    const { name, questions } = quizResultList[detailedInfoIndex];
    const chartData = countRightAndWrongAnswers(questions);
    const chart = createPercentageChart(chartData, { isDataLabels: true });

    detailedInfoPage.setAttribute('data-title', name);

    canvas.innerHTML = '';
    canvas.appendChild(chart.canvas);
    printQuestions(questions);
}

function initCharts() {
    quizResultList.forEach(item => appendResultItem(item));
    resultContainer.addEventListener('click', fillInDetailedInfoPage);
}

export { initCharts };
