window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    
    if (window.scrollY > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});