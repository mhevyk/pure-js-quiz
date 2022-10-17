(function () {
    const exit = document.querySelector(".exit");
    const dialog = new Dialog();

    function exitApp() {
        window.open(location, '_self').close();
    }

    dialog.content({
        header: "Вихід з програми",
        body: "Справді вийти із програми?",
        submitBtn: "Так",
        cancelBtn: "Скасувати"
    });

    exit.addEventListener("click", () => dialog.open());
    dialog.addEventListener("submit", exitApp);
})();