import { useSelector } from "react-redux";
import GptSearch from "./Gpt/GptSearch";
import Header from "./Header";
import MainTrailerContainer from "./MainTrailer/MainTrailerContainer";
import MovieCardsContainer from "./MovieCards/MovieCardsContainer";
const Browse = () => {
  const gptSearchState = useSelector((store) => store.gpt.gptSearch);
  return (
    <div>
      <Header />
      {gptSearchState ? (
        <GptSearch />
      ) : (
        <>
          <MainTrailerContainer />
          <MovieCardsContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
