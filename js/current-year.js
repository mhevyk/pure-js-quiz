(function () {
    const currentYear = new Date().getFullYear();
    const yearContainerList = document.querySelectorAll(".current-year-container");
    
    yearContainerList.forEach(container => container.textContent = currentYear);
})();