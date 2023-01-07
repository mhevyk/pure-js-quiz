import { debounce } from '../utils';

const scrollUpArrow = document.querySelector('.arrow__up');

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
    document.addEventListener('scroll', debounce(scrollHandler, 150));
}

export { initScrollTopArrow };