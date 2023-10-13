import MovieCard from "./MovieCard";

const MovieList = ({ listHeading, movieList }) => {
  return (
    <>
      <div className="p-2 text-white">
        <h1 className="text-lg md:text-3xl font-bold">{listHeading}</h1>
        <div className="flex overflow-x-scroll py-2">
          <div className="flex gap-1">
            {movieList?.map((movie) => (
              <MovieCard key={movie.id} movieDetails={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
