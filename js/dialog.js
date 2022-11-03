class Dialog {
  static #eventListenersList = [];
  //dialog custom events
  static events = {
      open: new CustomEvent("open"),
      close: new CustomEvent("close"),
      submit: new CustomEvent("submit"),
  };
  //method to invoke custom event
  static dispatchCustomEvent(container, customEventName) {
      if (customEventName in Dialog.events) {
          container.dispatchEvent(Dialog.events[customEventName]);
      }
  }
  constructor(selector = ".dialog") {
      if (Dialog._instance) {
          return Dialog._instance;
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
          Dialog.dispatchCustomEvent.bind(this, this.container, "submit")
      );

      Dialog._instance = this;
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
      Dialog.#eventListenersList.forEach(listener => {
          this.container.removeEventListener(listener.name, listener.fn);
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

  content({header: headerContent, body: bodyContent, submitBtn: submitBtnContent, cancelBtn: cancelBtnContent}) {
      this.header(headerContent ?? "");
      this.body(bodyContent ?? "");
      this.submitBtn(submitBtnContent ?? "");
      this.cancelBtn(cancelBtnContent ?? "");
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
        !state ? button.setAttribute("hidden", true) : button.removeAttribute("hidden");
    }
}

  //methods to operate the state of modal
  isOpen() {
      return this.container.classList.contains("open");
  }
  open() {
      Dialog.dispatchCustomEvent(this.container, "open");

      const body = document.body;
      body.classList.add("dialog-open");

      if (!this.isOpen()) {
          this.container.parentElement.classList.add("open");
          this.container.classList.add("open");
      }
  }

  close() {
      Dialog.dispatchCustomEvent(this.container, "close");
      const body = document.body;
      body.classList.remove("dialog-open");

      this.resetEventListeners();

      if (this.isOpen()) {
          this.container.parentElement.classList.remove("open");
          this.container.classList.remove("open");
      }
  }

  //methods to highlight modal using green and red colors
  highlight(success = true) {
      const highlightClass = `highlight-${success ? "success" : "fail"}`;
      const body = document.body;

      body.classList.toggle(highlightClass);
      this.container.classList.toggle(highlightClass);
  }

  removeHighlight() {
      document.body.classList.remove("highlight-success", "highlight-fail");
      this.container.classList.remove("highlight-success", "highlight-fail");
  }
}
