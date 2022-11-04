(function () {
    const exit = document.querySelector(".exit");

    function exitApp() {
        const dialogContent = {
            header: "Вихід з програми",
            body: "Справді вийти із програми?",
            submitBtn: "Так",
            cancelBtn: "Скасувати"
        };

        confirmDecorator(dialogContent, () => {
            window.open(location, '_self').close();
        });
    }

    exit.addEventListener("click", exitApp);
})();