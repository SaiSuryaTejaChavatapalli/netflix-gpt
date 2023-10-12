import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ movieDetails }) => {
  return (
    <Link to={`/browse/movieDetails/${movieDetails.id}`}>
      <div className="w-36 md:w-48 pr-4 hover:scale-110 transition duration-500 cursor-pointer object-cover">
        <img
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="movie-card"
          className="rounded-lg"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
