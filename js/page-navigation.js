(function () {
    const backButton = document.querySelector(".header .back");
    const navigationButtons = document.querySelectorAll(".page-open-button");
    const pageStack = new Stack();

    pageStack.push("main");

    function showBackButton(pageName) {
        if (pageName !== "main") {
            backButton.classList.add("open");
        } else {
            backButton.classList.remove("open");
        }

        if (pageStack.top() !== pageName) {
            pageStack.push(pageName);
        }
    }

    function setPageTitle(title) {
        const titleContainer = document.querySelector(".header h1");
        titleContainer.textContent = title;
    }

    function showOnlyPage(pageName) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => {
            if (page.dataset.page === pageName) {
                page.classList.add("open");
                setPageTitle(page.dataset.title);
            } else {
                page.classList.remove("open");
            }
        });
    }

    function goToPreviousPage() {
        pageStack.pop();
        goToPage(pageStack.top());
    }

    function goToPage(pageName) {
        showBackButton(pageName);
        showOnlyPage(pageName);
    }

    backButton.addEventListener("click", goToPreviousPage);

    navigationButtons.forEach(button => {
        button.addEventListener(
            "click",
            goToPage.bind(null, button.dataset.page)
        );
    });
})();
