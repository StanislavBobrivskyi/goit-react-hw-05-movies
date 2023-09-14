import CastDetail from 'components/CastDetail/CastDetail';
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'api';
import { CastList } from './Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respCast = await fetchCastMovie(moviesId);
        setCast(respCast.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }
    fetchCastInf();
  }, [moviesId]);

  return (
    <>
      {error && <ErrorMessage />}
      {cast && (
        <div>
          <CastList>
            {cast.map((actor, id) => {
              return <CastDetail cast={actor} index={id} />;
            })}
          </CastList>
        </div>
      )}
    </>
  );
};

export default Cast;
