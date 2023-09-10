const apiKey = '7194b7b08f433157032a7a5a310c946f';

// Отримання результатів пошуку фільмів за ключовим словом
async function searchMoviesByKeyword(keyword) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        keyword
      )}`
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
}

// Використання функції для пошуку фільмів за ключовим словом
const keyword = 'YourSearchKeyword'; // Замініть це на фактичний ключовий запит
const searchResults = await searchMoviesByKeyword(keyword);
console.log('Search results:', searchResults);
