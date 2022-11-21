(function () {
    const downloadButton = document.querySelector("#download-txt-template");
    const form = document.querySelector(".form__import-txt");

    async function download() {
        const response = await fetch("templates/text.txt");
        const templateText = await response.text();
        const separator = getValueFromSelect(form.separators);
        const templateTextWithSeparator = templateText.replaceAll("&", separator);

        const link = document.createElement("a");
        link.download = "template.txt";
        link.href = `data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(templateTextWithSeparator)}`;
        link.click();
    }

    downloadButton.addEventListener("click", download);
})();