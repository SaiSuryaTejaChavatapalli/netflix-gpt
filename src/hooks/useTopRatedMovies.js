import { getApiOptions, topRatedMoviesAPI } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
const useTopRatedMovies = () => {
  const getUseTopRatedMoviesList = async () => {
    const data = await fetch(topRatedMoviesAPI, getApiOptions);
    const jsonData = await data.json();
    return jsonData.results;
  };

  return useQuery({
    queryKey: ["useTopRatedAPI"],
    queryFn: getUseTopRatedMoviesList,
  });
};

export default useTopRatedMovies;
