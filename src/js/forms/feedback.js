/* eslint-disable no-unused-vars */
const setValidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {
    input.setCustomValidity('');
    containerThatIncludesFeedback.querySelector('.valid').innerHTML = feedback;
}

const setInvalidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {
    input.setCustomValidity(feedback);
    containerThatIncludesFeedback.querySelector('.invalid').innerHTML = feedback;
}

const resetFeedbacks = (form, feedbackSelector = '[data-default-feedback]') => {
    const feedbacks = form.querySelectorAll(feedbackSelector);
    feedbacks.forEach(feedback => feedback.textContent = feedback.dataset.defaultFeedback);
}