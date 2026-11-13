let x = 0, y = 0;
const cardsReviews = Array.from(document.querySelectorAll('.review-item-card'));
cardsReviews.forEach((elem, i) => {
    elem.addEventListener('mousemove', (event) => {
        x = event.layerX / 3 - 100;
        y = event.layerY / 3 - 100;
        elem.style.setProperty('--bg-x', (Math.round(x) + "px"));
        elem.style.setProperty('--bg-y', (Math.round(y) + "px"));
    });
    elem.addEventListener('mouseout', () => {
        elem.style.removeProperty('--bg-x');
        elem.style.removeProperty('--bg-y');

        elem.removeAttribute('style');
    });
});
