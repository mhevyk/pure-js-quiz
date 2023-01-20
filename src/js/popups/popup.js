export default class Popup {
    constructor(container, type) {
        this.container = container.parentElement;
        this.type = type;
    }

    isOpen() {
        return this.container.classList.contains('open');
    }

    open() {
        const body = document.body;
        body.classList.add(`${this.type}-overlay-open`);
  
        if (!this.isOpen()) {
            //this.container.parentElement.classList.add('open');
            this.container.classList.add('open');
        }
    }
  
    close() {
        const body = document.body;
        body.classList.remove(`${this.type}-overlay-open`);
  
        if (this.isOpen()) {
            //this.container.parentElement.classList.remove('open');
            this.container.classList.remove('open');
        }
    }

    toggle() {
        this.isOpen() ? this.close() : this.open();
    }
}