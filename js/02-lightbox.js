import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('div.gallery');

const createGalleryEl = array => {
  const imagesEl = array
    .map(
      item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join('');

  return (list.innerHTML = imagesEl);
};

createGalleryEl(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
