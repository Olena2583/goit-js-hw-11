`use strict`;

import 'izitoast/dist/css/iziToast.min.css';

export async function fetchImages(query) {
  const API_KEY = '46878929-31b62e2632123f6a0a302d7dc';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
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
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching images. Please try again.',
    });
    console.error('Error fetching images:', error);
    return [];
  }
}
