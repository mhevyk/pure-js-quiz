/* eslint-disable no-unused-vars */
class Toggler {
    constructor(container) {
        this.container = container;
        this.title = this.container.querySelector('.title');
        this.content = this.container.querySelector('.content');
        this.content.style.height = 0;
    }

    hide = () => {
        this.container.classList.add('hidden');
        this.slideUp();
    }

    show = () => {
        this.container.classList.remove('hidden');
    }

    isOpen = () => {
        return this.container.classList.contains('open');
    }

    slideToggle = () => {
        this.isOpen() ? this.slideUp() : this.slideDown();
    }

    #calculateHeightToSlide = () => {
        const defaultHeight = 0;
        const children = this.content.children;
        const count = children.length;
        if (!count) {
            return defaultHeight;
        }
        const firstSize = children[0].offsetHeight;
        return firstSize * count;
    }

    #calculateDuration = () => {
        const defaultDuration = 300;
        const heightToSlide = this.#calculateHeightToSlide();
        const speedUpCoefitient = heightToSlide / (this.content.children.length + 1);
        return defaultDuration + speedUpCoefitient;
    }

    slideDown = () => {
        const children = this.content.children;
        if (!children.length) {
            return;
        }

        this.container.classList.add('open');
        const heightToSlide = this.#calculateHeightToSlide() + 'px';
        this.content.style.height = heightToSlide;
        this.content.animate([
            {height: 0},
            {height: heightToSlide}
        ], {
            duration: this.#calculateDuration()
        });
    }

    slideUp = () => {
        this.container.classList.remove('open');
        this.content.style.height = 0;
        this.content.animate([
            {height: this.#calculateHeightToSlide() + 'px'},
            {height: 0},
        ], {
            duration: this.#calculateDuration()
        });
    }
}