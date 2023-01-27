import Stack from './stack';
import { dialog } from '../popups/dialog';
import { scrollPage } from '../utils';
import { backArrows } from '../components/arrow';

const backButton = backArrows[0];

export const config = {
    canGoBack: true
};

class PageNavigator {
    #pageStack;
    #pagesToSkipWhenGoingBack;

    constructor(startPage) {
        this.#pageStack = new Stack(startPage);
        this.#pagesToSkipWhenGoingBack = ['quiz-input-answer'];

        const navigateHandler = (event) => {
            const navigationButton = event.target.closest('[data-page-button]');
            if (!navigationButton) {
                return;
            }
            
            dialog.isOpen() && dialog.close();
            this.goToPage(navigationButton.dataset.pageButton);
        };
        document.addEventListener('click', navigateHandler);
    }

    setPageTitle = (title) => {
        const titleContainer = document.querySelector('[data-main-title]');
        titleContainer.textContent = title;
    };

    setPageSubtitle = (subtitle) => {
        const defaultSubtitle = 'найкраща програма для якісного вивчення слів';
        const titleContainer = document.querySelector('[data-main-subtitle]');
        titleContainer.textContent = subtitle || defaultSubtitle;
    };

    showBackButton = (page) => {
        if (page !== 'main') {
            backButton.classList.remove('hidden');
        } else {
            backButton.classList.add('hidden');
        }
    };

    showOnlyPage = (newPage) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.dataset.page === newPage) {
                page.classList.add('open');
                this.setPageTitle(page.dataset.title);
                this.setPageSubtitle(page.dataset.subtitle);
            } else {
                page.classList.remove('open');
            }
        });
    };

    goToPage = (page) => {
        scrollPage('top');
        this.showBackButton(page);
        this.showOnlyPage(page);

        if (this.#pageStack.top() !== page) {
            this.#pageStack.push(page);
        }
    };

    goToPreviousPage = () => {
        if (!config.canGoBack) {
            return;
        }

        const pages = this.#pageStack;
        pages.pop();

        if (this.#pagesToSkipWhenGoingBack.includes(pages.top())) {
            pages.pop();
        }

        if (!pages.isEmpty()) {
            this.goToPage(pages.top());
        }
    };
}

export const pageNavigator = new PageNavigator('main');