import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";
import { BG_IMG_URL } from "../../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG_URL}
          alt="gpt-search-bg"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSearchMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
