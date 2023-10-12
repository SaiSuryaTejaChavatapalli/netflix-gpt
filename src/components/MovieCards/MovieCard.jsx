import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ movieDetails }) => {
  return (
    <Link to={`/browse/movieDetails/${movieDetails.id}`}>
      <div className="w-36 md:w-48 pr-4">
        <img src={IMG_CDN_URL + movieDetails.poster_path} alt="movie-card" />
      </div>
    </Link>
  );
};

export default MovieCard;
