import Popup from './popup';

const loaderContainer = document.querySelector('.loader');

export default class Loader extends Popup {
    static #instance;
    
    constructor(container = loaderContainer) {
        super(container, 'loader');
        if (Loader.#instance) {
            return Loader.#instance;
        }
  
        Loader.#instance = this;
    }
}