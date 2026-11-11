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

