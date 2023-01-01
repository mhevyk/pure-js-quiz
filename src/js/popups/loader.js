/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Loader extends Popup {
    static #instance = false;
    constructor(container = document.querySelector('.loader')) {
        super(container, 'loader');
        if (Loader.#instance) {
            return Loader.#instance;
        }
  
        Loader.#instance = this;
    }
}