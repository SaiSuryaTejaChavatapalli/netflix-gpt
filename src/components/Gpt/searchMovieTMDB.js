import { getApiOptions, setMovieQuerySearch } from "../../utils/constants";

export const searchMovieTMDB = async (query) => {
  const resultQuery = setMovieQuerySearch(query);
  try {
    const data = await fetch(resultQuery, getApiOptions);
    const json = await data.json();
    return json.results;
  } catch (error) {
    console.log("Error", error);
  }
};
