/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class PageNavigator {
    static #instance;
    constructor(startPage = 'main') {
        if (PageNavigator.#instance) {
            return PageNavigator.#instance;
        }

        this.pageStack = new Stack();
        this.pageStack.push(startPage);

        this.navigateHandler = event => this.goToPage(event.dataset.page);

        this.backButton = document.querySelector('.app__header .arrow__back');
        this.update();

        PageNavigator.#instance = this;
    }

    update = () => {
        this.linkButtons = document.querySelectorAll('.page-open-button');
        this.backButton.addEventListener('click', this.goToPreviousPage);

        this.linkButtons.forEach(button => {
            button.addEventListener(
                'click',
                () => this.goToPage(button.dataset.page)
            );
        });
    }

    setPageTitle = (title) => {
        const titleContainer = document.querySelector('.app__header .header__title');
        titleContainer.textContent = title;
    }

    showBackButton = (page) => {
        if (page !== 'main') {
            this.backButton.classList.add('open');
        } else {
            this.backButton.classList.remove('open');
        }

        if (this.pageStack.top() !== page) {
            this.pageStack.push(page);
        }
    }

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
    }

    goToPage = (page) => {
        this.showBackButton(page);
        this.showOnlyPage(page);
    }

    goToPreviousPage = () => {
        this.pageStack.pop();
        this.goToPage(this.pageStack.top());
    }
}