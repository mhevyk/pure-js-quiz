function initFooterYearRange() {
    const yearContainer = document.querySelector('[data-app-existance-period]');
    const developmentStartYear = 2019;
    const currentYear = new Date().getFullYear();
    
    const dateTags = [developmentStartYear, currentYear].map(
        year => `<time datetime="${year}">${year}</time>`
    );
    yearContainer.innerHTML = dateTags.join('-');
}

export { initFooterYearRange };