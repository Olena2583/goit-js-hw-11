`use strict`;

import { renderImages } from './js/render-functions.js';

import 'simplelightbox/dist/simple-lightbox.min.css';
export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const imageElement = `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <p>Likes: ${image.likes} | Views: ${image.views}</p>
      </a>
    `;
    gallery.insertAdjacentHTML('beforeend', imageElement);
  });
}
