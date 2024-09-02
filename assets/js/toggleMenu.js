function toggleMenu() {
    var nav = document.getElementById("myTopnav");
    var icon = document.getElementById("menuIcon").children[0];
    nav.classList.toggle("responsive");
    if (nav.classList.contains("responsive")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}