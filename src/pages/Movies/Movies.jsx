import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import { IoArrowBackCircle } from 'react-icons/io5';
import { InputStyle } from './Movies.styled';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [valueSearchMovies, setValueSearchMovies] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!searchQuery) return;

    async function searchMovies() {
      try {
        const resp = await fetchMoviesBySearch(searchQuery);
        setValueSearchMovies(resp.results);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [searchQuery]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchMovies.value });
    e.target.reset();
  };

  return (
    <>
      <NavLink to={backLinkHref}>
        <IoArrowBackCircle /> Go back
      </NavLink>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmitForm}>
        <label name="searchMovies">
          <InputStyle
            name="searchMovies"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies for name..."
          />
        </label>
      </form>
      <MoviesList movies={valueSearchMovies} />
    </>
  );
};

export default Movies;
