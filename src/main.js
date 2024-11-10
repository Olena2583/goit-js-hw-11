'use strict';
import { fetchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'css-loader/dist/css-loader.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox;

const showLoader = () => {
  document.querySelector('.loader').classList.add('visible');
};

const hideLoader = () => {
  document.querySelector('.loader').classList.remove('visible');
};

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();
  if (!query) {
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
