'use strict';
import { fetchImages } from '../src/js/pixabay-api.js';
import { renderImages } from '../src/js/render-functions.js';

import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

const showLoader = () => loader.classList.add('visible');
const hideLoader = () => loader.classList.remove('visible');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term!' });
    return;
  }

  showLoader();

  try {
    const images = await fetchImages(query);
    renderImages(images);

    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
});
