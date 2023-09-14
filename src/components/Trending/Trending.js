// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getTrendingMovies } from '../API';

// export default function Trending() {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Отримуємо список популярних фільмів після завантаження компонента
//     getTrendingMovies()
//       .then(response => {
//         setTrendingMovies(response);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching trending movies:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Trending Movies</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {trendingMovies.map(movie => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
import MovieDetails from 'pages/Movie/Movie';
import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from '../API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const resp = await fetchTrendingMovies();
        setTrendingMovies(resp.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading}

      <MovieDetails movies={trendingMovies} />
    </main>
  );
};

export default Home;
