
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load Navbar and Footer
loadComponent('navbar', 'components/navbar.html');
loadComponent('footer', 'components/footer.html');



function toggleMenu() {
var nav = document.getElementById("myTopnav");
var icon = document.getElementById("menuIcon").children[0];
nav.classList.toggle("responsive");
if (nav.classList.contains("responsive")) {
icon.classList.remove("fa-bars");
icon.classList.add("fa-times"); // Switch to close icon
} else {
icon.classList.remove("fa-times");
icon.classList.add("fa-bars"); // Switch back to menu icon
}
}
