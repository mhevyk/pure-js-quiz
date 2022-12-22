(function () {
    const form = document.querySelector(".form__quiz-input-answer");
    const progressBar = form.querySelector('.progress');

    function goToNextQuestion(event) {
        event.preventDefault();
        progressBar.value += 1;
    }

    form.addEventListener("submit", goToNextQuestion);
})();