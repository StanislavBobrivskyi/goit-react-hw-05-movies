import ErrorMessage from 'components/ErrorMessages/ErrorMessages';
import ReviewDetail from 'components/ReviewDetail/ReviewDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviwsMovie } from 'api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCastInf() {
      try {
        const respReviews = await fetchReviwsMovie(moviesId);
        setReviews(respReviews.results);
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
      {reviews && (
        <div>
          <ul>
            {reviews.map((review, index) => {
              return <ReviewDetail review={review} index={index} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
