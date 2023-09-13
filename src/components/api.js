import axios from 'axios';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk0YjdiMDhmNDMzMTU3MDMyYTdhNWEzMTBjOTQ2ZiIsInN1YiI6IjY0ZmRlOGI2ZGI0ZWQ2MTAzODU0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sztJc-TGyzGJ71FcSXCwTZF-8--39MZuPwv_9dKwxLA';
const baseUrl = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/all/day?language=en-US');
    return response.data.results; // Повертаємо лише масив фільмів з результатів
  } catch (error) {
    console.error('There was a problem with the Axios request:', error);
    throw error; // Передаємо помилку наверх для обробки її в компоненті
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast; // Повертаємо лише акторський склад з результатів
  } catch (error) {
    console.error('There was a problem with the Axios request:', error);
    throw error; // Передаємо помилку наверх для обробки її в компоненті
  }
};
