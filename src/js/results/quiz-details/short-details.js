import { quizResultList } from '../../storage';

const detailsPage = document.querySelector('[data-quiz-details]');

function printQuizInfo(contentSelector, content) {
    const container = detailsPage.querySelector(`[data-content="${contentSelector}"]`);
    container.innerText = content;
}

function printShortDetails(detailsId) {
    const { name, mode, questions, group } = quizResultList[detailsId];

    detailsPage.setAttribute('data-title', name);
    printQuizInfo('mode', mode);
    printQuizInfo('group', group);
    printQuizInfo('questions-count', questions.length);
}

export { printShortDetails };