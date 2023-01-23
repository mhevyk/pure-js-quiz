import showQuizDetails from '../quiz-details';

const resultContainer = document.querySelector('[data-quiz-result-list]');

function fillInDetailedInfoPage(event) {
    const detailsId = Number(event.target.dataset?.detailsId);
    if (isNaN(detailsId)) {
        return;
    }

    showQuizDetails(detailsId);  
}

function initCharts() {
    resultContainer.addEventListener('click', fillInDetailedInfoPage);
}

export { initCharts };
