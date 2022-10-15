class Dialog {
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
    constructor(selector, openOnCreate = true) {
      this.container = document.querySelector(selector);

      openOnCreate && this.open();

      this.closeButton = this.container.querySelector("[role='close']");
      this.cancelButton = this.container.querySelector("[role='cancel']");
      this.submitButton = this.container.querySelector("[role='submit']");

      this.headerSection = this.container.querySelector(".dialog__header h2");
      this.bodySection = this.container.querySelector(".dialog__body");
  
      this.closeButton.addEventListener("click", this.close.bind(this));
      this.cancelButton.addEventListener("click", this.close.bind(this));
      this.submitButton.addEventListener("click", Dialog.dispatchCustomEvent.bind(this, this.container, "submit"));
    }
  
    //syntactic sugar to simplify adding event listeners directly to dialog window
    addEventListener(...props) {
      this.container.addEventListener(...props);
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
    setDisableState(button, disabled = true) {
      const buttons = [this.closeButton, this.cancelButton, this.submitButton];
      if (buttons.includes(button)) {
        button.disabled = disabled;
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
        this.container.classList.add("open");
      }
    }
    close() {
      Dialog.dispatchCustomEvent(this.container, "close");
      const body = document.body;
      body.classList.remove("dialog-open");
  
      if (this.isOpen()) {
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

  (function () {
    const dialog = new Dialog(".dialog", false);

    const openDialogButton = document.querySelector("#dialog-open");
    openDialogButton.addEventListener("click", () => {
      dialog.open();
    });
  })();