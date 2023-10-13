import { useQuery } from "@tanstack/react-query";
import { getApiOptions } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      getApiOptions
    );
    const json = await data.json();
    return json.results;
  };

  const { data } = useQuery({
    queryKey: ["getTrailerVideo"],
    queryFn: getTrailerVideo,
  });
  if (!data) return;
  const filteredData = data?.filter((movie) => movie.type === "Trailer");
  const trailerVideo = filteredData?.length ? filteredData[0] : data[0];
  return trailerVideo;
};

export default useTrailerVideo;
