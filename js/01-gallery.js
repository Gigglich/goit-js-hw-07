import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItem({ preview, original, description }) {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `;
  }
  
  
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryItems.map(createGalleryItem).join('');

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${largeImageUrl}" alt="">
      </div>
    `);
    
    instance.show();
  }
  });

console.log(galleryItems);

