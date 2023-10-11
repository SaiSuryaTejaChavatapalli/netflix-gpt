import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieList from "./MovieList";

const MovieCardsContainer = () => {
  const { data: nowPlayingMoviesList } = useNowPlayingMovies();
  const { data: popularMoviesList } = usePopularMovies();
  const { data: topRatedMoviesList } = useTopRatedMovies();
  const { data: upcomingMoviesList } = useUpcomingMovies();

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-12">
        <MovieList
          listHeading={"Now Playing"}
          movieList={nowPlayingMoviesList}
        />
        <MovieList listHeading={"Popular"} movieList={popularMoviesList} />
        <MovieList listHeading={"Top Rated"} movieList={topRatedMoviesList} />
        <MovieList listHeading={"Upcoming"} movieList={upcomingMoviesList} />
      </div>
    </div>
  );
};

export default MovieCardsContainer;
