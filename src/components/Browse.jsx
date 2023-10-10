import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainTrailerContainer from "./MainTrailerContainer";
import MovieCardsContainer from "./MovieCardsContainer";
const Browse = () => {
  const data = useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainTrailerContainer />
      <MovieCardsContainer />
    </div>
  );
};

export default Browse;
