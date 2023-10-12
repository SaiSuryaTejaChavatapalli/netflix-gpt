import { useSelector } from "react-redux";
import { lang } from "../../utils/languageConstants";
// import { openai } from "../../utils/openAI";
import { useRef } from "react";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const gptSearchInput = useRef();
  const handleGptSearch = async () => {
    const gptSearchText = gptSearchInput.current.value;
    console.log(gptSearchText);
    const prompt = `Act as a movie recommendation system and suggest some movies for the query:"${gptSearchText}" only give names of 5 movies, comma separated like example ahead Ex:Bahubali,Mission Impossible,Jawan,James Bond,Don`;
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: prompt }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(chatCompletion.choices);
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
