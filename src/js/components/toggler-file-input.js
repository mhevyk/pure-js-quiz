/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class TogglerFileInput extends FileInput {
    constructor(input, label) {
        super(input, label);
        this.#createUploadedFilesContainer();
    }

    #createUploadedFilesContainer = () => {
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

    reset = (errorMessage) => {
        this.uploadedFilesContainer.innerHTML = '';
        this.uploadedFilesCountContainer.textContent = 0;
        this.toggler.hide();
        super.reset(errorMessage);
    }

    incrementFilesCount = () => {
        const prevFilesCount = Number(this.uploadedFilesCountContainer.textContent);
        this.uploadedFilesCountContainer.textContent = prevFilesCount + 1;
    }

    appendValidFile = (file, count) => {
        this.uploadedFilesContainer.innerHTML += `
            <small class='uploaded__file success'>
                <i class='icon fa-solid fa-file'></i>
                Слова з файлу <b>${file.name}</b> готові до додавання у розділ! (Кількість слів: <b>${count}</b>)
            </small>`;
        this.incrementFilesCount();
    }

    appendInvalidFile = (file, error) => {
        this.uploadedFilesContainer.innerHTML += `
            <small class='uploaded__file fail'>
                <i class='icon fa fa-times' aria-hidden='true'></i>
                Файл <b>${file.name}</b> не був завантажений через помилку: ${error}
            </small>`;
        this.incrementFilesCount();
    }
}