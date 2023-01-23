import FileInput from './file-input';
import Toggler from '../popups/toggler';
import {
    FILE_UPLOAD_SUCCESS_TEMPLATE,
    FILE_UPLOAD_FAILURE_TEMPLATE
} from '../storage';

export default class TogglerFileInput extends FileInput {
    constructor(input, label) {
        super(input, label);
        this.#createUploadedFilesContainer();
    }

    incrementFilesCount() {
        const countContainer = this.uploadedFilesCountContainer;
        const prevFilesCount = Number(countContainer.textContent);
        countContainer.textContent = prevFilesCount + 1;
    }

    appendValidFile ({ name }, count) {
        this.uploadedFilesContainer.innerHTML += FILE_UPLOAD_SUCCESS_TEMPLATE(name, count);
        this.incrementFilesCount();
    }

    appendInvalidFile({ name }, error) {
        this.uploadedFilesContainer.innerHTML += FILE_UPLOAD_FAILURE_TEMPLATE(name, error);
        this.incrementFilesCount();
    }

    reset(errorMessage) {
        this.uploadedFilesContainer.innerHTML = '';
        this.uploadedFilesCountContainer.textContent = 0;
        this.toggler.hide();
        super.reset(errorMessage);
    }

    #createUploadedFilesContainer() {
        const lastInputContainer = this.label.nextElementSibling;
        const wrapper = document.createElement('div');
        wrapper.classList.add('uploaded-files', 'toggler', 'hidden');

        const titleButton = document.createElement('button');
        titleButton.type = 'button';
        titleButton.classList.add('title', 'uploaded-files__title');
        
        const countContainer = document.createElement('span');
        countContainer.classList.add('uploaded-files__count');
        countContainer.textContent = 0;

        titleButton.append(countContainer);

        countContainer.insertAdjacentHTML('beforebegin', 'Завантажені файли (');
        countContainer.insertAdjacentHTML('afterend', ') <i class="caret fas fa-angle-down"></i>');

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content', 'uploaded-files__info');

        wrapper.append(titleButton);
        wrapper.append(contentContainer);

        lastInputContainer.after(wrapper);

        this.uploadedFilesContainer = contentContainer;
        this.uploadedFilesCountContainer = countContainer;
        this.toggler = new Toggler(wrapper);
        this.toggler.title.addEventListener('click', () => this.toggler.slideToggle());
    }
}