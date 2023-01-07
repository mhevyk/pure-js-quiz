function changeButtonStyle(button, {text, replaceClasses}) {
    button.textContent = text;
    button.classList.replace(replaceClasses.from, replaceClasses.to);
}

export { changeButtonStyle };