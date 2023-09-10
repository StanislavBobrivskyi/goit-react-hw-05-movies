const apiKey = '7194b7b08f433157032a7a5a310c946f';

// Отримання інформації про акторський склад фільму за його ідентифікатором
async function fetchMovieCast(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
}

// Використання функції для отримання інформації про акторський склад
const movieId = '12345'; // Замініть це на фактичний ідентифікатор фільму
const cast = await fetchMovieCast(movieId);
console.log('Movie cast:', cast);
