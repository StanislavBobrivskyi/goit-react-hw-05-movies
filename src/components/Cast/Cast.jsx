import CastDetail from 'components/CastItem/CastDetail';
import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'api';

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
          <ul>
            {cast.map((actor, id) => {
              return <CastDetail cast={actor} index={id} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
