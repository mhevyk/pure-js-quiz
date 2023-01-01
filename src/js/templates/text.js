/* eslint-disable no-undef */
(() => {
    const downloadButton = document.querySelector('#download-txt-template');
    const form = document.querySelector('.form__import-txt');

    const download = async () => {
        const response = await fetch('templates/text.txt');
        const templateText = await response.text();
        const separator = getValueFromSelect(form.separators);
        const templateTextWithSeparator = templateText.replaceAll('&', separator);
        const templateTextWithDescription = 
            `*** Це шаблон коректного словника з вибраним роздільником '${separator}'\n'
            + '*** Якщо хочете завантажити цей шаблон у словник, то видаліть текст із зірочками на початку\n'
            + '*** [слово] ${separator} [переклад1], [переклад2], ...\n`
            + templateTextWithSeparator;

        const link = document.createElement('a');
        link.download = 'template.txt';
        link.href = `data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(templateTextWithDescription)}`;
        link.click();
    }

    downloadButton.addEventListener('click', download);
})();