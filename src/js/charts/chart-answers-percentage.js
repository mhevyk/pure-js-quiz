
import Chart from 'chart.js/auto';
import { genericChartDoughtnutWithDatalabels, genericChartOnlyDoughnut } from './chart-config';

function createPercentageChart(data, options = {}) {
    const canvas = document.createElement('canvas');

    const { isDataLabels = false } = options;
    const labels = ['правильні відповіді', 'неправильні відповіді'];

    const chartConfig = isDataLabels
        ? genericChartDoughtnutWithDatalabels(data, labels)
        : genericChartOnlyDoughnut(data);

    return new Chart(canvas, chartConfig);
}

export { createPercentageChart };