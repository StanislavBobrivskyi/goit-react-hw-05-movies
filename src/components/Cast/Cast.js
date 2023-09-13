// Cast.js

import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../API'; // Імпортуємо функцію з API.js

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Викликаємо функцію для отримання акторського складу при завантаженні компонента
    getMovieCredits(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => {
        console.error('Error fetching movie credits:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Акторський склад:</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
