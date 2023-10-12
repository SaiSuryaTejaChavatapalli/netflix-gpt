import { getApiOptions, setMovieToMovieDetails } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
const useMovieDetails = (movieId) => {
  const getMovieDetails = async (movieId) => {
    const movieDetailsAPI = setMovieToMovieDetails(movieId);
    const data = await fetch(movieDetailsAPI, getApiOptions);
    const jsonData = await data.json();
    return jsonData;
  };

  return useQuery({
    queryKey: ["getMovieDetails"],
    queryFn: () => getMovieDetails(movieId),
  });
};

export default useMovieDetails;
