function showSearch() {
    search.style.display = search.style.display == "none" ? "block" : "none";
}

function changeTheme(el) {
    if (el.dataset.theme == "light") {
        // document.querySelector()
        el.dataset.theme = "dark";
        el.children[0].src = "img/moon.svg";
        document.body.style.background = "var(--bg-color-d)";
        document.body.style.color = "var(--text-color-d)";
    } else {
        el.dataset.theme = "light";
        el.children[0].src = "img/sun.svg";
        document.body.style.background = "var(--bg-color-l)";
        document.body.style.color = "var(--text-color-l)";
    }

}