import MovieCard from "./MovieCard";

const MovieList = ({ listHeading, movieList }) => {
  console.log(movieList);
  return (
    <div className="p-2 text-white">
      <h1 className="text-2xl">{listHeading}</h1>
      <div className="flex overflow-x-scroll py-2">
        <div className="flex gap-1">
          {movieList?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
