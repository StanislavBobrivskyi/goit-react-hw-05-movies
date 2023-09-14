import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: '7194b7b08f433157032a7a5a310c946f',
};

export async function fetchTrendingMovies() {
  const resp = await axios.get(`trending/movie/day`);

  return resp.data;
}

export const fetchMoviesById = async moviesId => {
  const resp = await axios.get(`/movie/${moviesId}?&language=en-US`);

  return resp.data;
};

export async function fetchMoviesBySearch(searchQuery) {
  const resp = await axios.get(`search/movie?query=${searchQuery}`);

  return resp.data;
}

export async function fetchCastMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/credits`);

  return resp.data;
}
export async function fetchReviwsMovie(moviesId) {
  const resp = await axios.get(`movie/${moviesId}/reviews`);

  return resp.data;
}
