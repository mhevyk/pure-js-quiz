import { setValidFeedback, setInvalidFeedback } from '../forms/feedback';
import { resetInput, submitAfterDialogConfirm } from '../utils';
import { DIALOG_CONTENT_RESET_FILE_INPUT } from '../storage';

export default class FileInput {
    constructor(input, label) {
        this.input = input;
        this.label = label;

        this.setInvalid();
    }

    setValid(feedback = 'Все добре!') {
        setValidFeedback(this.input, feedback, this.label.nextElementSibling);
        this.label.classList.replace('invalid', 'valid');
    }
    
    setInvalid(feedback = 'Завантажте текстовий файл!') {
        setInvalidFeedback(this.input, feedback, this.label.nextElementSibling);
        this.label.classList.replace('valid', 'invalid');
    }

    reset(feedback) {
        resetInput(this.input);
        this.setInvalid(feedback);
    }

    resetConfirm(callback) {
        submitAfterDialogConfirm(DIALOG_CONTENT_RESET_FILE_INPUT, callback);
    }
}