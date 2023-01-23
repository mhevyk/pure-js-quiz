import { createPercentageChart } from './charts/chart-answers-percentage';
import { quizResultList } from '../storage';

let resultItemId = 0;

function countRightAndWrongAnswers(questions) {
    const questionsCount = questions.length;
    const rightAnswersCount = questions.reduce((result, question) => result + question.isAnswerCorrect, 0);
    const wrongAnswersCount = questionsCount - rightAnswersCount;
    return [rightAnswersCount, wrongAnswersCount];
}

function createResultItem(resultInfo, index) {
    const { name, questions } = resultInfo;
    const { canvas } = createPercentageChart(countRightAndWrongAnswers(questions));

    const wrapper = document.createElement('div');
    wrapper.classList.add('result__item');

    const canvasWrapper = document.createElement('div');
    canvasWrapper.classList.add('item__chart-container');
    canvasWrapper.appendChild(canvas);

    const resultItemDescription = `
        <div class="item__short-description">
            <span class="item__name">${name}</span>
            <small
                class="link text-accent"
                data-page-button="quiz-details"
                data-details-id="${index}"
            >
                Детальніше...
            </small>
        </div>
    `;

    wrapper.insertAdjacentHTML('afterbegin', resultItemDescription);
    wrapper.appendChild(canvasWrapper);

    return wrapper;
}

function appendResultItem(item) {
    const resultContainer = document.querySelector('[data-quiz-result-list]');
    const placeholder = resultContainer.querySelector('.placeholder');
    placeholder?.remove();
    
    const resultItem = createResultItem(item, resultItemId);
    resultItemId++;
    resultContainer.append(resultItem);
}

function addQuizResultItemToStorage(item) {
    quizResultList.push(item);
    appendResultItem(item);
}

export {
    countRightAndWrongAnswers,
    createResultItem,
    appendResultItem,
    addQuizResultItemToStorage
};