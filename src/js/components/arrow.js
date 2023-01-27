import { scrollPage } from '../utils';
import { pageNavigator } from '../navigation/page-navigator';

const arrowsPanel = document.querySelector('.nav__panel');
export const backArrows = document.querySelectorAll('[data-arrow-back]');

function arrowUpClickHandler() {
    scrollPage('top', { behavior: 'smooth' });
}

function arrowDownClickHandler() {
    scrollPage('bottom', { behavior: 'smooth' });
}

function arrowBackClickHandler() {
    pageNavigator.goToPreviousPage();
}

function scrollHandler() {
    const currentScroll = window.scrollY;
    if (currentScroll >= 300) {
        arrowsPanel.classList.remove('hidden');
    } else {
        arrowsPanel.classList.add('hidden');
    }
}

function initBackArrows() {
    backArrows.forEach(arrow => {
        arrow.addEventListener('click', arrowBackClickHandler);
    });
}

function initArrows() {
    const scrollUpArrow = document.querySelector('[data-arrow-up]');
    const downArrow = document.querySelector('[data-arrow-down]');
    
    scrollUpArrow.addEventListener('click', arrowUpClickHandler);
    downArrow.addEventListener('click', arrowDownClickHandler);
    document.addEventListener('scroll', scrollHandler);
    initBackArrows();
}

export { initArrows };