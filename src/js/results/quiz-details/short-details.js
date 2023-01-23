import { quizResultList } from '../../storage';

const detailsListPage = document.querySelector('[data-quiz-details]');
const shortDetailsPage = document.querySelector('[data-quiz-details-short]');

function printQuizInfo(contentSelector, content) {
    const container = shortDetailsPage.querySelector(`[data-content="${contentSelector}"]`);
    container.innerText = content;
}

function printShortDetails(detailsId) {
    const { name, mode, questions, group } = quizResultList[detailsId];

    detailsListPage.setAttribute('data-title', name);
    printQuizInfo('mode', mode);
    printQuizInfo('group', group);
    printQuizInfo('questions-count', questions.length);
}

export { printShortDetails };