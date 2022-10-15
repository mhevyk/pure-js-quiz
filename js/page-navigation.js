(function () {
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".page-open-button");

    function setPageTitle(title) {
        const titleContainer = document.querySelector(".header h1");
        titleContainer.textContent = title;
    }

    function showBackButton(pageRole) {
        const backButton = document.querySelector(".header .back");
        if (pageRole !== "main") {
            backButton.classList.add("open");
        } else {
            backButton.classList.remove("open");
        }
    }

    function hideAllPagesExcept(pageRole) {
        showBackButton(pageRole);
        pages.forEach(page => {
            if(page.dataset.role === pageRole){
                page.classList.add("open");
                setPageTitle(page.dataset.title);
            } else {
                page.classList.remove("open");
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            hideAllPagesExcept(this.dataset.role);
        });
    });
})();