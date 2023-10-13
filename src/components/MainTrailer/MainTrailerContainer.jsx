import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainTrailerBackground from "./MainTrailerBackground";
import MainTrailerTitle from "./MainTrailerTitle";

const MainTrailerContainer = () => {
  const { data } = useNowPlayingMovies();
  if (!data) return;
  const trailerMovie = data[0];
  const { original_title, overview, id } = trailerMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <MainTrailerTitle
        title={original_title}
        description={overview}
        movieId={id}
      />
      <MainTrailerBackground movieId={id} />
    </div>
  );
};

export default MainTrailerContainer;
