import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";
import dummyMovieCard from "../../images/dummyMovieCard.jpg";
const MovieCard = ({ movieDetails }) => {
  return (
    <Link to={`/browse/movieDetails/${movieDetails.id}`}>
      <div className="w-36 md:w-48 pr-4 hover:scale-110 transition duration-500 cursor-pointer object-cover h-full">
        {movieDetails.poster_path ? (
          <img
            src={IMG_CDN_URL + movieDetails?.poster_path}
            alt="movie-card"
            className="rounded-lg"
          />
        ) : (
          <img
            src={dummyMovieCard}
            alt="dummy-card"
            className="rounded-lg h-full"
          />
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
