class Dialog {
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
  constructor(selector = ".dialog") {
      if (Dialog.#instance) {
          return Dialog.#instance;
      }
      this.container = document.querySelector(selector);
 
      this.closeButton = this.container.querySelector("[data-role='close']");
      this.cancelButton = this.container.querySelector("[data-role='cancel']");
      this.submitButton = this.container.querySelector("[data-role='submit']");

      this.headerSection = this.container.querySelector(".dialog__header h2");
      this.bodySection = this.container.querySelector(".dialog__body");

      this.closeButton.addEventListener("click", this.close.bind(this));
      this.cancelButton.addEventListener("click", this.close.bind(this));
      this.submitButton.addEventListener(
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
      Dialog.#eventListenersList.forEach(({name, fn}) => {
          this.container.removeEventListener(name, fn);
      });
      Dialog.#eventListenersList = [];
  }

  //setters to change innerHTML or textContent of some part of dialog
  header(text) {
      this.headerSection.innerHTML = text;
  }
  body(text) {
      this.bodySection.innerHTML = text;
  }
  submitBtn(text) {
      this.submitButton.textContent = text;
  }
  cancelBtn(text) {
      this.cancelButton.textContent = text;
  }

  //methods to disable or enable dialog buttons
  setDisableState(button, state = true) {
      const buttons = [
          this.closeButton,
          this.cancelButton,
          this.submitButton,
      ];
      if (buttons.includes(button)) {
          button.disabled = state;
      }
  }

  setOpenState(button, state = false) {
    const buttons = [
        this.closeButton,
        this.cancelButton,
        this.submitButton,
    ];
    if (buttons.includes(button)) {
        state ? button.removeAttribute("hidden") : button.setAttribute("hidden", true);
    }
}

  //methods to operate the state of modal
  isOpen() {
      return this.container.classList.contains("open");
  }
  open() {
      Dialog.#dispatchCustomEvent(this.container, "open");

      const body = document.body;
      body.classList.add("dialog-open");

      if (!this.isOpen()) {
          this.container.parentElement.classList.add("open");
          this.container.classList.add("open");
      }
  }

  close() {
      Dialog.#dispatchCustomEvent(this.container, "close");
      const body = document.body;
      body.classList.remove("dialog-open");

      this.resetEventListeners();

      if (this.isOpen()) {
          this.container.parentElement.classList.remove("open");
          this.container.classList.remove("open");
      }
  }
}
