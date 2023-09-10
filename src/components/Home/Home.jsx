const apiKey = '7194b7b08f433157032a7a5a310c946f';

// Отримання списку найпопулярніших фільмів
async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}

// Використання функції для отримання списку найпопулярніших фільмів
const trendingMovies = await fetchTrendingMovies();
console.log('Trending movies:', trendingMovies);
