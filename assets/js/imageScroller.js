const container = document.querySelector('.workExperance');
const nextButton = document.querySelector('.buttonNext');
const backButton = document.querySelector('.buttonBack');
const dots = document.querySelectorAll('.dot');

let scrollIndex = 0;
const totalImages = container.children.length;
const imageWidth = container.querySelector('img').clientWidth;

// Function to update the dot indicator
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === scrollIndex) {
            dot.classList.add('active');
        }
    });
}

// Function to update the container transform
function updateContainerTransform() {
    container.style.transform = `translateX(${-imageWidth * scrollIndex}px)`;
}

// Scroll to the next image
function scrollNext() {
    if (scrollIndex < totalImages - 1) {
        scrollIndex++;
    } else {
        scrollIndex = 0;
    }
    updateContainerTransform();
    updateDots();
}

// Scroll to the previous image
function scrollBack() {
    if (scrollIndex > 0) {
        scrollIndex--;
    } else {
        scrollIndex = totalImages - 1;
    }
    updateContainerTransform();
    updateDots();
}

// Handle dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollIndex = index;
        updateContainerTransform();
        updateDots();
    });
});

// Auto-scroll interval
let autoScroll = setInterval(scrollNext, 8000);

// Button event listeners
nextButton.addEventListener('click', () => {
    clearInterval(autoScroll);
    scrollNext();
    autoScroll = setInterval(scrollNext, 8000);
});

backButton.addEventListener('click', () => {
    clearInterval(autoScroll);
    scrollBack();
    autoScroll = setInterval(scrollNext, 8000);
});

// Initial dot update
updateDots();
