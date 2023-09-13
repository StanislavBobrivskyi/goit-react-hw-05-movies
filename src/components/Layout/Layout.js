import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../API'; // Імпортуємо функцію для отримання популярних фільмів

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Отримуємо список популярних фільмів після завантаження компонента
    getTrendingMovies()
      .then(response => {
        setTrendingMovies(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
