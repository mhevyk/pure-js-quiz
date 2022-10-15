(function () {
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".page-open-button");

    function hideAllPagesExcept(pageRole) {
        pages.forEach(page => {
            if(page.dataset.role === pageRole){
                page.classList.add("open");
                document.querySelector(".header h1").textContent = page.dataset.title;
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