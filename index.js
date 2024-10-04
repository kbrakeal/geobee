// Carousel Logic
const carouselInner = document.getElementById('carouselInner');
const bubblesContainer = document.getElementById('bubblesContainer');
const totalCards = document.querySelectorAll('.card').length;
let currentIndex = 0;
const itemsToShow = 3;

// Generate bubbles
const totalBubbles = Math.ceil(totalCards / itemsToShow);
for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    if (i === currentIndex) bubble.classList.add('active');
    bubble.addEventListener('click', () => moveToIndex(i));
    bubblesContainer.appendChild(bubble);
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