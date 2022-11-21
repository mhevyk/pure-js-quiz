class Dialog extends Popup {
    static #instance;
    static #eventListenersList = [];
    //dialog custom events
    static #events = {
        open: new CustomEvent("open"),
        close: new CustomEvent("close"),
        submit: new CustomEvent("submit"),
    };
    //method to invoke custom event
    static #dispatchCustomEvent(container, customEventName) {
        if (customEventName in Dialog.#events) {
            container.dispatchEvent(Dialog.#events[customEventName]);
        }
    }
    constructor(container = document.querySelector(".dialog")) {
        super(container, "dialog");
        if (Dialog.#instance) {
            return Dialog.#instance;
        }

        this.dialogItems = {
            buttons: {
                closeButton: this.container.querySelector("[data-role='close']"),
                cancelButton: this.container.querySelector("[data-role='cancel']"),
                submitButton: this.container.querySelector("[data-role='submit']")
            },
            headerSection: this.container.querySelector(".dialog__header h2"),
            bodySection: this.container.querySelector(".dialog__body")
        };

        const { closeButton, cancelButton, submitButton } = this.dialogItems.buttons;

        closeButton.addEventListener("click", this.close.bind(this));
        cancelButton.addEventListener("click", this.close.bind(this));
        submitButton.addEventListener(
            "click",
            Dialog.#dispatchCustomEvent.bind(this, this.container, "submit")
        );

        Dialog.#instance = this;
    }

    //syntactic sugar to simplify adding event listeners directly to dialog window
    addEventListener(...props) {
        Dialog.#eventListenersList.push({
            name: props[0],
            fn: props[1],
        });
        this.container.addEventListener(...props);
    }

    resetEventListeners() {
        Dialog.#eventListenersList.forEach(({ name, fn }) => {
            this.container.removeEventListener(name, fn);
        });
        Dialog.#eventListenersList = [];
    }

    //setters to change innerHTML or textContent of some part of dialog
    header(text) {
        const { headerSection } = this.dialogItems;
        headerSection.innerHTML = text;
    }
    body(text) {
        const { bodySection } = this.dialogItems;
        bodySection.innerHTML = text;
    }
    submitBtn(text) {
        const { submitButton } = this.dialogItems.buttons;
        submitButton.textContent = text;
    }
    cancelBtn(text) {
        const { cancelButton } = this.dialogItems.buttons;
        cancelButton.textContent = text;
    }

    //methods to operate the state of modal
    open() {
        Dialog.#dispatchCustomEvent(this.container, "open");
        super.open();
    }
    close() {
        Dialog.#dispatchCustomEvent(this.container, "close");
        this.resetEventListeners();
        super.close();
    }
}
