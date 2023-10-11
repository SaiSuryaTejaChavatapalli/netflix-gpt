import { getApiOptions, popularMoviesAPI } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
const usePopularMovies = () => {
  const getUsePopularMoviesList = async () => {
    const data = await fetch(popularMoviesAPI, getApiOptions);
    const jsonData = await data.json();
    return jsonData.results;
  };

  return useQuery({
    queryKey: ["usePopularMovies"],
    queryFn: getUsePopularMoviesList,
  });
};

export default usePopularMovies;
