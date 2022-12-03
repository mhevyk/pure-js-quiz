(function () {
    const topArrow = document.querySelector(".arrow.up");

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function handleScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll >= 300) {
            topArrow.classList.remove("hide");
        } else {
            topArrow.classList.add("hide");
        }
    }

    topArrow.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);
})();