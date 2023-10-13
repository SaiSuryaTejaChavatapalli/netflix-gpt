import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/languageConstants";
// import { openai } from "../../utils/openAI";
import { useRef } from "react";
import { searchMovieTMDB } from "./searchMovieTMDB";
import { addUserSearchMovies } from "../../utils/moviesSlice";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const gptSearchInput = useRef();
  const handleGptSearch = async () => {
    const gptSearchText = gptSearchInput.current.value;
    const resultMovies = await searchMovieTMDB(gptSearchText);
    dispatch(addUserSearchMovies(resultMovies));
  };
  return (
    <div className="flex items-center justify-center pt-[35%] md:pt-[8%]">
      <form
        className="w-full md:w-1/2 m-6 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
          ref={gptSearchInput}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearch}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
