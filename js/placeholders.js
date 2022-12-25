const placeholders = [
    {
        show: () => {
            const form = document.querySelector(".form__quiz-input-answer");
            form.classList.remove("open");

            const placeholder = form.parentElement.querySelector(".placeholder");
            placeholder.classList.remove("hide");
        },
        hide: () => {
            const form = document.querySelector(".form__quiz-input-answer");
            form.classList.add("open");

            const placeholder = form.parentElement.querySelector(".placeholder");
            placeholder.classList.add("hide");
        }
    }
];

function updatePlaceholders(status) {
    for (const placeholder of placeholders) {
        placeholder[status]();
    }
}