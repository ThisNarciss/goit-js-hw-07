import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector("div.gallery");

const createGallery = (items) => {
  const createImagesEl = items
    .reduce((arr, { original, preview, description }) => {
      arr.push(
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
      );
      return arr;
    }, [])
    .join("");

  galleryEl.insertAdjacentHTML("afterBegin", createImagesEl);
};

createGallery(galleryItems);

const linkToggleEvent = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `
  );

  instance.show();
};

galleryEl.addEventListener("click", linkToggleEvent);
