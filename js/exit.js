(function () {
    const exit = document.querySelector(".exit");
    const dialog = new Dialog();

    function exitApp() {
        window.open(location, '_self').close();
    }

    exit.addEventListener("click", () => {
        dialog.open();
        dialog.content({
            header: "Вихід з програми",
            body: "Справді вийти із програми?",
            submitBtn: "Так",
            cancelBtn: "Скасувати"
        });
        dialog.addEventListener("submit", exitApp);
    });
})();