// Carousel Logic
const carouselInner = document.getElementById('carouselInner');
const bubblesContainer = document.getElementById('bubblesContainer');
const totalCards = document.querySelectorAll('.card').length;
let currentIndex = 0;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let isMobileView = vw <= 768;
let itemsToShow = (isMobileView) ? 2 : 3;
generateBubbles();

window.addEventListener('resize', () => resizeCards())

function resizeCards() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (isMobileView != (vw <= 768)) {
        isMobileView = vw <= 768;
        itemsToShow = (isMobileView) ? 2 : 3;
        while (bubblesContainer.firstChild) {
            bubblesContainer.removeChild(bubblesContainer.lastChild);
        }
        generateBubbles();
    }
    let totalBubbles = Math.ceil(totalCards / itemsToShow);
    moveToIndex((currentIndex >= totalBubbles) ? totalBubbles - 1 : currentIndex);
}

// Generate bubbles
function generateBubbles() {
    const totalBubbles = Math.ceil(totalCards / itemsToShow);
    for (let i = 0; i < totalBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        if (i === currentIndex) bubble.classList.add('active');
        bubble.addEventListener('click', () => moveToIndex(i));
        bubblesContainer.appendChild(bubble);
    }
}

function moveToIndex(index) {
    var cardSize = carouselInner.getBoundingClientRect().width
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${(index * (cardSize))}px)`;
    updateBubbles();
}

function updateBubbles() {
    document.querySelectorAll('.bubble').forEach((bubble, index) => {
        bubble.classList.toggle('active', index === currentIndex);
    });
}