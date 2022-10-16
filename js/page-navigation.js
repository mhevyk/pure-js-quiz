(function () {
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".page-open-button");

    function setPageTitle(title) {
        const titleContainer = document.querySelector(".header h1");
        titleContainer.textContent = title;
    }

    function showBackButton(pageHref) {
        const backButton = document.querySelector(".header .back");
        if (pageHref !== "main") {
            backButton.classList.add("open");
        } else {
            backButton.classList.remove("open");
        }
    }

    function hideAllPagesExcept(pageHref) {
        showBackButton(pageHref);
        pages.forEach(page => {
            if(page.dataset.href === pageHref){
                page.classList.add("open");
                setPageTitle(page.dataset.title);
            } else {
                page.classList.remove("open");
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => hideAllPagesExcept(button.dataset.href));
    });
})();