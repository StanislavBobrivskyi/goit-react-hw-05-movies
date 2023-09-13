// const apiKey = '7194b7b08f433157032a7a5a310c946f';

// // Отримання оглядів фільму за його ідентифікатором
// async function fetchMovieReviews(movieId) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
//     );
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error('Error fetching movie reviews:', error);
//     throw error;
//   }
// }

// // Використання функції для отримання оглядів фільму
// const movieId = '12345'; // Замініть це на фактичний ідентифікатор фільму
// const reviews = await fetchMovieReviews(movieId);
// console.log('Movie reviews:', reviews);
const Reviews = () => {
  return <div>PUSH me</div>;
};
export default Reviews;
