import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainTrailerContainer from "./MainTrailerContainer";
import MovieCardsContainer from "./MovieCardsContainer";
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
