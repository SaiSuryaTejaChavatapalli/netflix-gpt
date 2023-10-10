import { getApiOptions, nowPlayingAPI } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
const useNowPlayingMovies = () => {
  const getNowPlayingList = async () => {
    const data = await fetch(nowPlayingAPI, getApiOptions);
    const jsonData = await data.json();
    return jsonData.results;
  };

  return useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: getNowPlayingList,
  });
};

export default useNowPlayingMovies;
