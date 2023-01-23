const animationConfig = {
    duration: 300,
    initialHeight: 0
};

export default class Toggler {
    constructor(container) {
        this.container = container;
        this.title = this.container.querySelector('.title');
        this.content = this.container.querySelector('.content');
        this.content.style.height = animationConfig.initialHeight;
    }

    hide() {
        this.container.classList.add('hidden');
        this.slideUp();
    }

    show() {
        this.container.classList.remove('hidden');
    }

    isOpen() {
        return this.container.classList.contains('open');
    }

    slideToggle() {
        this.isOpen() ? this.slideUp() : this.slideDown();
    }

    slideDown() {
        const children = this.content.children;
        if (!children.length) {
            return;
        }

        this.container.classList.add('open');
        const heightToSlide = `${this.#calculateHeightToSlide()}px`;
        this.content.style.height = heightToSlide;
        this.content.animate([
            { height: animationConfig.initialHeight },
            { height: heightToSlide }
        ], {
            duration: this.#calculateDuration()
        });
    }

    slideUp() {
        this.container.classList.remove('open');
        this.content.style.height = animationConfig.initialHeight;
        this.content.animate([
            { height: `${this.#calculateHeightToSlide()}px` },
            { height: animationConfig.initialHeight },
        ], {
            duration: this.#calculateDuration()
        });
    }

    #calculateHeightToSlide() {
        const children = this.content.children;
        const count = children.length;
        if (!count) {
            return animationConfig.initialHeight;
        }
        const firstSize = children[0].offsetHeight;
        return firstSize * count;
    }

    #calculateDuration() {
        const heightToSlide = this.#calculateHeightToSlide();
        const speedUpCoefitient = heightToSlide / (this.content.children.length + 1);
        return animationConfig.duration + speedUpCoefitient;
    }
}