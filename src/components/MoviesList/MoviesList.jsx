import { NavLink, useLocation } from 'react-router-dom';
import { MovieColumn, MovieItems } from './MovieList.styled';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <MovieColumn>
        {movies.map(movie => {
          return (
            <MovieItems key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </MovieItems>
          );
        })}
      </MovieColumn>
    </div>
  );
};

export default MoviesList;
