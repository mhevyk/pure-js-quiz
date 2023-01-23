import { quizResultList } from '../../storage';
import { createPercentageChart } from '../charts/chart-answers-percentage';
import { countRightAndWrongAnswers } from '../result-item';

const canvas = document.querySelector('#quiz-details__chart');

function printDataLabelsChart(detailsId) {
    const { questions } = quizResultList[detailsId];
    const chartData = countRightAndWrongAnswers(questions);
    const chart = createPercentageChart(chartData, { isDataLabels: true });

    canvas.innerHTML = '';
    canvas.appendChild(chart.canvas);
}

export { printDataLabelsChart };