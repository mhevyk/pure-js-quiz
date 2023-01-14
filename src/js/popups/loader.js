import Popup from './popup';

class Loader extends Popup {
    constructor(container) {
        super(container, 'loader');
    }
}

const loaderContainer = document.querySelector('.loader');
export const loader = new Loader(loaderContainer);