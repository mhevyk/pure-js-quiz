import { debounce } from '../utils';

const scrollUpArrow = document.querySelector('[data-arrow-up]');

function arrowUpClickHandler() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollHandler() {
    const currentScroll = window.scrollY;
    if (currentScroll >= 300) {
        scrollUpArrow.classList.add('open');
    } else {
        scrollUpArrow.classList.remove('open');
    }
}

function initScrollTopArrow() {
    scrollUpArrow.addEventListener('click', arrowUpClickHandler);
    document.addEventListener('scroll', debounce(scrollHandler, 120));
}

export { initScrollTopArrow };