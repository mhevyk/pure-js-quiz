import { appendResultItem } from '../results/result-item';
import { quizResultList } from '../storage';

function initCharts() {
    quizResultList.forEach(item => appendResultItem(item));
    // const chart1 = createPercentageChart('#percentage-chart-1', [3, 9]);
    // const chart2 = createPercentageChart('#percentage-chart-2', [5, 10]);
    // const chart3 = createPercentageChart('#percentage-chart-3', [7, 10]);
    // const chartBigger = createPercentageChart('#chart-bigger', [3, 10], { isDataLabels: true });
}

export { initCharts };
