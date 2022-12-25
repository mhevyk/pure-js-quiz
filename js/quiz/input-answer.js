(function () {
    const form = document.querySelector(".form__quiz-input-answer");
    const progressBar = form.querySelector('.progress');
    const answerInput = form.answer;
    const questionContainer = form.querySelector(".question__text");
    const submitButton = form.querySelector("button[type='submit']");

    let quiz, question;

    function initProgressBar(questionsCount) {
        progressBar.value = 1;
        progressBar.max = questionsCount;
    }

    function initNextButton() {
        submitButton.classList.add("group__button-secondary");
        submitButton.classList.remove("group__button-primary");
        submitButton.textContent = "Наступне питання";
    }

    function convertNextButtonToFinishButton() {
        submitButton.classList.remove("group__button-secondary");
        submitButton.classList.add("group__button-primary");
        submitButton.textContent = "Завершити спробу";
    }

    function initQuiz(questionsCount) {
        quiz = new Quiz(questionsCount, form);
        Quiz.printForm(form);
        const voc = new Vocabulary();
        if (voc.data.length) {
            initProgressBar(questionsCount);
            question = quiz.nextQuestion();
            console.log(question);
            questionContainer.innerHTML = question.text;
            initNextButton();
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const questionsCount = 5;
        initQuiz(questionsCount);
    });

    function checkAnswer(question) {
        const userAnswer = answerInput.value;

        const isAnswerRight = question.answers.includes(userAnswer);
        if (isAnswerRight) {
            quiz.rightAnswersCount++;
        }
    }

    function goToNextQuestion() {
        if (progressBar.value + 1 === progressBar.max) {
            convertNextButtonToFinishButton();
        }

        checkAnswer(question);

        question = quiz.nextQuestion();
        if (question) {
            questionContainer.innerHTML = question.text;
            resetTextInput(answerInput);
            answerInput.focus();
        } else {
            form.removeEventListener("submit", goToNextQuestion);
            return quiz.showResult();
        }

        progressBar.value++;
    }
    
    form.addEventListener("submit", goToNextQuestion);
})();