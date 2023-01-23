import Stack from './stack';
import { dialog } from '../popups/dialog';

export const backButton = document.querySelector('.app__header .arrow__back');

export const config = {
    canGoBack: true
};

class PageNavigator {
    constructor(startPage) {
        this.pageStack = new Stack(startPage);

        const navigateHandler = (event) => {
            const navigationButton = event.target.closest('[data-page-button]');
            if (!navigationButton) {
                return;
            }
            dialog.isOpen() && dialog.close();
            this.goToPage(navigationButton.dataset.pageButton);
        };
        document.addEventListener('click', navigateHandler);

        backButton.addEventListener('click', this.goToPreviousPage);
    }

    setPageTitle = (title) => {
        const titleContainer = document.querySelector('.app__header .header__title');
        titleContainer.textContent = title;
    };

    showBackButton = (page) => {
        if (page !== 'main') {
            backButton.classList.add('open');
        } else {
            backButton.classList.remove('open');
        }

        if (this.pageStack.top() !== page) {
            this.pageStack.push(page);
        }
    };

    showOnlyPage = (newPage) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.dataset.page === newPage) {
                page.classList.add('open');
                this.setPageTitle(page.dataset.title);
            } else {
                page.classList.remove('open');
            }
        });
    };

    goToPage = (page) => {
        this.showBackButton(page);
        this.showOnlyPage(page);
    };

    goToPreviousPage = () => {
        if (!config.canGoBack) {
            return;
        }

        this.pageStack.pop();

        if (!this.pageStack.isEmpty()) {
            this.goToPage(this.pageStack.top());
        }
    };
}

export const pageNavigator = new PageNavigator('main');