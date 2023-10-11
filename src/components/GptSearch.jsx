import { BG_IMG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG_URL} alt="gpt-search-bg" />
      </div>
      <GptSearchBar />
      <GptSearchMovieSuggestions />
    </div>
  );
};

export default GptSearch;
