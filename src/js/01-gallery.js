
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const pictureContainer = document.querySelector('.gallery');

const pictureMarkup = createColorCardsMarkup(galleryItems);

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup);


function createColorCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image"
                            style="display: block"
                            src="${preview}" 
                            alt="${description}" />
                    </a>
            `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "buttom",
    captionDelay: "250"
});

