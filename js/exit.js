(function () {
    const exit = document.querySelector(".exit");
    exit.addEventListener("click", dialog.open);

    function exitApp() {
        window.open(location, '_self').close();
    }

    const dialog = new Dialog();
    dialog.content({
        header: "Вихід з програми",
        body: "Справді вийти із програми?",
        submitBtn: "Так",
        cancelBtn: "Скасувати"
    });

    dialog.addEventListener("submit", exitApp);
})();