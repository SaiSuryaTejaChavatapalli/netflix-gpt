import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="flex items-center justify-center pt-[8%]">
      <form className="w-1/2 m-6 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
