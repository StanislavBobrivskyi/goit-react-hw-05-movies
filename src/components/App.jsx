import { Route, Routes, Link } from 'react-router-dom';

import MovieDetails from '../pages/MovieDetails/MovieDetails'; // Імпортуємо компонент Movies
import MoviesDetails from './MoviesDetails/MoviesDetails'; // Імпортуємо компонент MovieDetails
import Cast from './Cast/Cast'; // Імпортуємо компонент Cast
import Reviews from './Reviews/Reviews'; // Імпортуємо компонент Reviews
import Home from '../pages/Home/Home';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
        </ul>
      </nav>
      <Routes fallback={<div>Loading...</div>}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<MovieDetails />} />
        {/* Сторінка пошуку фільмів */}
        <Route exact path="/movies/:movieId" element={<MoviesDetails />} />{' '}
        {/* Сторінка деталей фільму */}
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        {/* Сторінка акторського складу */}
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        {/* Сторінка оглядів */}
        <Route render={() => <div>Page not found</div>} />
      </Routes>
    </div>
  );
};

// key:7194b7b08f433157032a7a5a310c946f
