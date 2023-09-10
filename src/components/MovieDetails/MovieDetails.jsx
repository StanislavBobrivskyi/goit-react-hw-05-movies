const apiKey = '7194b7b08f433157032a7a5a310c946f';

// Отримання деталей фільму за його ідентифікатором
async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

// Використання функції для отримання деталей фільму
const movieId = '12345'; // Замініть це на фактичний ідентифікатор фільму
const movieDetails = await fetchMovieDetails(movieId);
console.log('Movie details:', movieDetails);
