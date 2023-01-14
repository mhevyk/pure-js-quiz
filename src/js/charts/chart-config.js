import ChartDataLabels from 'chartjs-plugin-datalabels';

export const genericChartOnlyDoughnut = (data, chartColors) => ({
    type: 'doughnut',
    data: {
        datasets: [{
            data,
            borderWidth: 0,
            backgroundColor: chartColors
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
        }
    }
});

export const genericChartDoughtnutWithDatalabels = (data, labels, chartColors) => ({
    type: 'doughnut',
    plugins: [ChartDataLabels],
    data: {
        datasets: [{
            data,
            borderWidth: 0,
            backgroundColor: chartColors,
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
                        color: 'white'
                    }
                },
                // formatter: (value) => {
                //     return `${value}%`;
                // }
            },
            legend: {
                display: true,
                align: 'start',
                position: 'bottom'
            }
        },
    }
});