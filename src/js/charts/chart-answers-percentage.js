
import Chart from 'chart.js/auto';
import { genericChartDoughtnutWithDatalabels, genericChartOnlyDoughnut } from './chart-config';
import { getCSSRootVariable } from '../utils';

const chartColors = [
    getCSSRootVariable('highlight-success-color'),
    getCSSRootVariable('highlight-fail-color')
];

function createPercentageChart(data, options = {}) {
    const canvas = document.createElement('canvas');

    const { isDataLabels = false } = options;
    const labels = ['Правильні відповіді', 'Неправильні відповіді'];

    const chartConfig = isDataLabels
        ? genericChartDoughtnutWithDatalabels(data, labels, chartColors)
        : genericChartOnlyDoughnut(data, chartColors);

    return new Chart(canvas, chartConfig);
}

export { createPercentageChart };