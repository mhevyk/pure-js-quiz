(() => {
    const scrollUpArrow = document.querySelector('.arrow__up');

    const scrollConfig = {
        top: 0,
        behavior: 'smooth'
    };

    const handleClick = () => window.scrollTo(scrollConfig);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll >= 300) {
            scrollUpArrow.classList.add('open');
        } else {
            scrollUpArrow.classList.remove('open');
        }
    }

    scrollUpArrow.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
})();