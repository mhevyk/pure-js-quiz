class FileInput {
    constructor(input, label) {
        this.input = input;
        this.label = label;

        this.setInvalid();
    }

    setValid(message = "Все добре!") {
        setValidFeedback(this.input, message, this.label.nextElementSibling);
        this.label.classList.add("valid");
        this.label.classList.remove("invalid");
    }
    
    setInvalid(errorMessage = "Завантажте текстовий файл!") {
        setInvalidFeedback(this.input, errorMessage, this.label.nextElementSibling);
        this.label.classList.remove("valid");
        this.label.classList.add("invalid");
    }

    reset(errorMessage) {
        this.input.value = null;
        this.setInvalid(errorMessage);
    }
}