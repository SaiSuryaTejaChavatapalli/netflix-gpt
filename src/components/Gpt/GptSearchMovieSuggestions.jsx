import { useSelector } from "react-redux";
import MovieList from "../MovieCards/MovieList";

const GptSearchMovieSuggestions = () => {
  const userSearchMovies = useSelector(
    (store) => store.movies.userSearchMovies
  );
  return (
    userSearchMovies && (
      <div className="bg-black m-4 p-2">
        <MovieList listHeading={"Result Movies"} movieList={userSearchMovies} />
      </div>
    )
  );
};

export default GptSearchMovieSuggestions;
