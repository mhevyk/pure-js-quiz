(() => {
    const yearContainerList = document.querySelectorAll('.app-existance-date-range');
    const currentYear = new Date().getFullYear();
    const yearOfDevelopmentStart = 2019;

    const yearRange = [yearOfDevelopmentStart, currentYear];
    
    yearContainerList.forEach(container => {
        const dateTags = yearRange.map(year => `<time datetime='${year}'>${year}</time>`);
        container.innerHTML = dateTags.join('-');
    });
})();