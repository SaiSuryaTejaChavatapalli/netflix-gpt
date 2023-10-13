import { useSelector } from "react-redux";
import MovieList from "../MovieCards/MovieList";

const GptSearchMovieSuggestions = () => {
  const userSearchMovies = useSelector(
    (store) => store.movies.userSearchMovies
  );
  console.log("userSearchMovies", userSearchMovies);
  if (userSearchMovies?.length === 0)
    return (
      <div className="flex justify-center items-center">
        <div className="text-white bg-black w-full md:w-1/3 p-24 text-center text-4xl font-bold rounded-lg opacity-80">
          <h1>Oops!</h1>
          <h3 className="text-xl">Couldn't find movies!!</h3>
        </div>
      </div>
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
