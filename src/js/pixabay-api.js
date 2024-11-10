`use strict`;

import { fetchImages } from './js/pixabay-api.js';

import 'simplelightbox/dist/simple-lightbox.min.css';

export async function fetchImages(query) {
  const API_KEY = 'your-api-key'; // замініть на ваш ключ
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(URL);
  const data = await response.json();

  if (data.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return [];
  }

  return data.hits;
}
