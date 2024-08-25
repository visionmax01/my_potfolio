
// function loadComponent(id, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(id).innerHTML = data;
//         })
//         .catch(error => console.error('Error loading component:', error));
// }

// // Load Navbar and Footer
// loadComponent('navbar', 'components/navbar.html');
// loadComponent('footer', 'components/footer.html');



// function toggleMenu() {
// var nav = document.getElementById("myTopnav");
// var icon = document.getElementById("menuIcon").children[0];
// nav.classList.toggle("responsive");
// if (nav.classList.contains("responsive")) {
// icon.classList.remove("fa-bars");
// icon.classList.add("fa-times"); // Switch to close icon
// } else {
// icon.classList.remove("fa-times");
// icon.classList.add("fa-bars"); // Switch back to menu icon
// }
// }

const phrases = [
    "Web Developer",
    "Photographer",
    "Video Editor",
    "UI/UX Designer"
];

let i = 0;
let currentPhrase = '';
let isDeleting = false;
let loopCount = 0;
let typingSpeed = 150; // Same speed for both typing and deleting
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    if (loopCount < phrases.length) {
        if (isDeleting) {
            currentPhrase = phrases[loopCount].substring(0, currentPhrase.length - 1);
        } else {
            currentPhrase = phrases[loopCount].substring(0, currentPhrase.length + 1);
        }

        typewriter.textContent = currentPhrase + '|';

        if (!isDeleting && currentPhrase === phrases[loopCount]) {
            typingSpeed = 300; // Pause before starting to delete
            isDeleting = true;
        } else if (isDeleting && currentPhrase === '') {
            isDeleting = false;
            loopCount = (loopCount + 1) % phrases.length;
            typingSpeed = 150;
        }

        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


