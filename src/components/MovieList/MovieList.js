import React, { useState } from 'react';
import { searchMovies } from '../API'; // Імпортуємо функцію для пошуку фільмів

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (!searchQuery) return;

    setLoading(true);

    searchMovies(searchQuery)
      .then(response => {
        setSearchResults(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
