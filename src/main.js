const galleryContainer = document.querySelector('.gallery-items'),
    galleryItemsAll = galleryContainer.querySelectorAll('.gallery-item'), 
    galleryItems = Array.from(galleryItemsAll); 

function layout(n) {
    galleryItems.forEach((element, i) => {
        element.classList.toggle('main-img', i === n);
        element.style.order = i === n ? 0 : (i === 0 ? n : i);
    });
}
layout(0);


galleryContainer.addEventListener('click', (event) => {
    if (event.target.closest(".gallery-item")) {
        const item = event.target.closest('.gallery-item');
        if (item) layout(galleryItems.indexOf(item));
    }
});

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
