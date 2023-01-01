/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class FileInput {
    constructor(input, label) {
        this.input = input;
        this.label = label;

        this.setInvalid();
    }

    setValid = (message = 'Все добре!') => {
        setValidFeedback(this.input, message, this.label.nextElementSibling);
        this.label.classList.add('valid');
        this.label.classList.remove('invalid');
    }
    
    setInvalid = (errorMessage = 'Завантажте текстовий файл!') => {
        setInvalidFeedback(this.input, errorMessage, this.label.nextElementSibling);
        this.label.classList.remove('valid');
        this.label.classList.add('invalid');
    }

    reset = (errorMessage) => {
        resetInput(this.input);
        this.setInvalid(errorMessage);
    }

    resetConfirm = (callback) => {
        const dialogContent = {
            header: 'Видалення завантажених файлів',
            submitBtn: 'Так',
            body: `
                Справді видалити всі завантажені файли?
            `,
            cancelBtn: 'Скасувати'
        };
        confirmDecorator(dialogContent, callback);
    }
}