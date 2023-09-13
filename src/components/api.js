// api.js

import axios from 'axios';

const apiKey = '7194b7b08f433157032a7a5a310c946f';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

// Функція для отримання списку найпопулярніших фільмів
export const getTrendingMovies = () => {
  return api.get('/trending/movie/day');
};

// Функція для отримання повної інформації про фільм за його ідентифікатором
export const getMovieDetails = movieId => {
  return api.get(`/movie/${movieId}`);
};

// Функція для пошуку фільмів за ключовим словом
export const searchMovies = query => {
  return api.get('/search/movie', {
    params: {
      query,
    },
  });
};

// Інші функції для інших запитів до API можна додати за аналогією
