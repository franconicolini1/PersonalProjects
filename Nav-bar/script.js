let icon = document.querySelector(".menu-icon");
let responsiveMenu = document.querySelector(".responsive-menu");

icon.addEventListener("click", deployMenu);

function deployMenu() {
    if (!responsiveMenu.classList.contains("show")) {
        responsiveMenu.style.transform = "none";
        responsiveMenu.classList.add("show");
    } else {
        responsiveMenu.style.transform = "translateX(-250vh)";
        responsiveMenu.classList.remove("show");
    }
}