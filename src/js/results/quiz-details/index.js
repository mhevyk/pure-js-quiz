import { printQuestionsTable } from './questions-table';
import { printShortDetails } from './short-details';
import { printDataLabelsChart } from './datalabels-chart';

function showQuizDetails(detailsId) {
    printQuestionsTable(detailsId);
    printShortDetails(detailsId);
    printDataLabelsChart(detailsId);
}

export default showQuizDetails;