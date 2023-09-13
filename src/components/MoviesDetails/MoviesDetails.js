// const apiKey = '7194b7b08f433157032a7a5a310c946f';

const { default: Cast } = require('components/Cast/Cast');
const { default: Reviews } = require('components/Reviews/Reviews');

const MoviesDetails = () => {
  return (
    <div>
      <Reviews />
      <Cast />
    </div>
  );
};
export default MoviesDetails;
