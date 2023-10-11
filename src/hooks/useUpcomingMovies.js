import { getApiOptions, upcomingMoviesAPI } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";

const useUpcomingMovies = () => {
  const getUseUpcomingMoviesList = async () => {
    const data = await fetch(upcomingMoviesAPI, getApiOptions);
    const jsonData = await data.json();
    return jsonData.results;
  };

  return useQuery({
    queryKey: ["useUpcomingAPI"],
    queryFn: getUseUpcomingMoviesList,
  });
};

export default useUpcomingMovies;
