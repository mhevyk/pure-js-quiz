import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { getCSSRootVariable } from '../../utils';

Chart.defaults.color = getCSSRootVariable('secondary-color');

const backgroundColors = [
    getCSSRootVariable('highlight-success-bg') || 'green',
    getCSSRootVariable('highlight-fail-bg') || 'red'
];

export const createDoughnutChartConfig = (data) => ({
    type: 'doughnut',
    data: {
        datasets: [{
            data,
            borderWidth: 0,
            backgroundColor: backgroundColors
        }]
    },
    options: {
        plugins: {
            tooltip: {
                enabled: false
            },
        },
        layout: {
            padding: {
                top: -10,
                bottom: -10
            }
        },
        offset: 2
    }
});

export const createDatalabelsDoughnutChartConfig = (data, labels) => ({
    type: 'doughnut',
    plugins: [ChartDataLabels],
    data: {
        datasets: [{
            data,
            borderWidth: 0,
            backgroundColor: backgroundColors,
        }],
        labels
    },
    options: {
        plugins: {
            tooltip: {
                enabled: false
            },
            datalabels: {
                labels: {
                    value: {
                        color: getCSSRootVariable('white-color')
                    }
                }
            },
            legend: {
                display: true,
                align: 'center',
                position: 'bottom',
                labels: {
                    padding: 20
                }
            }
        },
        responsive: true,
        offset: 5
    },
});