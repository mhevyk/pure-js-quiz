import Popup from './popup';

function getByRole(container, role) {
    return container.querySelector(`[data-role="${role}"]`);
}

class Dialog extends Popup {
    static #eventListenersList = [];
    static #events = {
        open: new CustomEvent('open'),
        close: new CustomEvent('close'),
        submit: new CustomEvent('submit')
    };

    //method to invoke custom event
    static #dispatchCustomEvent(container, customEventName) {
        if (!Dialog.#events[customEventName]) {
            return;
        }

        const customEvent = Dialog.#events[customEventName];
        container.dispatchEvent(customEvent);
    }
    
    constructor(container) {
        super(container, 'dialog');

        const boundGetByRole = getByRole.bind(null, this.container);

        this.dialogItems = {
            closeButton: boundGetByRole('close'),
            cancelButton: boundGetByRole('cancel'),
            submitButton: boundGetByRole('submit'),
            headerSection: boundGetByRole('header'),
            bodySection: boundGetByRole('body')
        };

        const { closeButton, cancelButton, submitButton } = this.dialogItems;

        [closeButton, cancelButton].forEach(button => button.addEventListener('click', this.close.bind(this)));
        submitButton.addEventListener(
            'click',
            Dialog.#dispatchCustomEvent.bind(this, this.container, 'submit')
        );
    }

    //syntactic sugar to simplify adding event listeners directly to dialog window
    addEventListener(...props) {
        const [name, handler] = props;
        Dialog.#eventListenersList.push({ name, handler });
        this.container.addEventListener(...props);
    }

    removeEventListener(...props) {
        this.container.removeEventListener(...props);
    }

    clearEventListeners() {
        Dialog.#eventListenersList.forEach((item) => {
            const { name, handler } = item;
            this.removeEventListener(name, handler);
        });
        Dialog.#eventListenersList = [];
    }

    //setters to change innerHTML or textContent of some part of dialog
    header(text) {
        return this.#changeContent('headerSection', text);
    }

    body(text) {
        return this.#changeContent('bodySection', text);
    }

    submitBtn(text) {
        return this.#changeContent('submitButton', text);
    }

    cancelBtn(text) {
        return this.#changeContent('cancelButton', text);
    }

    //methods to operate the state of modal
    open() {
        Dialog.#dispatchCustomEvent(this.container, 'open');
        super.open();
    }
    
    close() {
        Dialog.#dispatchCustomEvent(this.container, 'close');
        this.clearEventListeners();
        super.close();
    }

    #changeContent(sectionName, text) {
        const section = this.dialogItems[sectionName];
        section.innerHTML = text;
        return this;
    }
}

const dialogContainer = document.querySelector('.dialog');
export const dialog = new Dialog(dialogContainer);