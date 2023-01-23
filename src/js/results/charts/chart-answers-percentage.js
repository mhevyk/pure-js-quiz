
import Chart from 'chart.js/auto';
import {
    createDatalabelsDoughnutChartConfig,
    createDoughnutChartConfig
} from './chart-config';

function createPercentageChart(data, options = {}) {
    const canvas = document.createElement('canvas');
    const labels = ['правильні відповіді', 'неправильні відповіді'];
    const { isDataLabels = false } = options;

    const chartConfig = isDataLabels
        ? createDatalabelsDoughnutChartConfig(data, labels)
        : createDoughnutChartConfig(data);

    return new Chart(canvas, chartConfig);
}

export { createPercentageChart };