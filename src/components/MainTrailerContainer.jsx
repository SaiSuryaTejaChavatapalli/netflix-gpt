import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainTrailerBackground from "./MainTrailerBackground";
import MainTrailerTitle from "./MainTrailerTitle";

const MainTrailerContainer = () => {
  const { data } = useNowPlayingMovies();
  if (!data) return;
  const trailerMovie = data[0];
  const { original_title, overview } = trailerMovie;
  return (
    <div className="py-40 px-16">
      <MainTrailerTitle title={original_title} description={overview} />
      <MainTrailerBackground />
    </div>
  );
};

export default MainTrailerContainer;
