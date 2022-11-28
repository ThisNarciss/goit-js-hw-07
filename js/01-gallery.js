import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery');

const createGallery = items => {
  const createGalleryItem = items
    .reduce((arr, { original, preview, description }) => {
      arr.push(
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
      );
      return arr;
    }, [])
    .join('');

  gallery.insertAdjacentHTML('afterBegin', createGalleryItem);
};

createGallery(galleryItems);

const onGalleryImgClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const carousel = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: carousel => {
        document.addEventListener('keydown', onEscapeKeyDown);
      },
      onClose: carousel => {
        document.removeEventListener('keydown', onEscapeKeyDown);
      },
    }
  );
  carousel.show();

  function onEscapeKeyDown(event) {
    if (event.code !== 'Escape') {
      return;
    }
    carousel.close();
  }
};

gallery.addEventListener('click', onGalleryImgClick);
