/* eslint-disable no-undef */
(() => {
    const form = document.querySelector('.form__quiz-input-answer');
    const progressBar = form.querySelector('.progress');
    const answerInput = form.answer;
    const questionContainer = form.querySelector('.question__text');
    const submitButton = form.querySelector('button[type="submit"]');
    const quizStartButton = document.querySelector('#quiz-input-answer-start');

    let quiz, question;

    const incrementProgressValue = () => {
        const { value, max } = progressBar;
        const newValue = value + 1;
        const percentage = (newValue / max) * 100;
        progressBar.value = newValue;
        progressBar.style.setProperty('--value', `${percentage}%`);
    }

    const initProgressBar = (questionsCount) => {
        progressBar.value = 0;
        progressBar.style.setProperty('--value', '0%');
        progressBar.max = questionsCount;
    }

    const initNextButton = () => {
        submitButton.classList.add('button__secondary');
        submitButton.classList.remove('button__primary');
        submitButton.textContent = 'Наступне питання';
    }

    const convertNextButtonToFinishButton = () => {
        submitButton.classList.remove('button__secondary');
        submitButton.classList.add('button__primary');
        submitButton.textContent = 'Завершити спробу';
    }

    const initQuiz = (questionsCount) => {
        quiz = new Quiz(questionsCount, form);
        question = quiz.nextQuestion();
        questionContainer.innerHTML = question.text;
        initNextButton();
    }

    quizStartButton.addEventListener('click', () => {
        const voc = new Vocabulary();
        if (voc.data.length) {
            resetInput(answerInput);
            const range = document.querySelector('#quiz-input-answer-words-count');
            const questionsCount = Number(range.value);
            initQuiz(questionsCount);
            form.addEventListener('submit', goToNextQuestion);
            setTimeout(() => answerInput.focus());

            initProgressBar(questionsCount);
            setTimeout(incrementProgressValue, 100);
        }
    });

    const checkAnswer = (question) => {
        const userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            return;
        }

        const isAnswerRight = question.answers.includes(userAnswer);
        if (isAnswerRight) {
            quiz.rightAnswersCount++;
        }
    }

    const goToNextQuestion = () => {
        if (!question) {
            return;
        }

        if (progressBar.value + 1 === progressBar.max) {
            convertNextButtonToFinishButton();
        }

        checkAnswer(question);

        question = quiz.nextQuestion();
        if (question) {
            questionContainer.innerHTML = question.text;
            resetInput(answerInput);
            answerInput.focus();
        } else {
            form.removeEventListener('submit', goToNextQuestion);
            return quiz.showResult();
        }

        incrementProgressValue();
    }
})();