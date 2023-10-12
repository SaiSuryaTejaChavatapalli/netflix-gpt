import { useParams } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import { IMG_CDN_URL } from "../../utils/constants";

const InfoCard = ({ heading, description }) => {
  return (
    <div className="border border-red-800 shadow-lg p-4 rounded-lg hover:scale-110 transition duration-500 cursor-pointer object-cover bg-red-700 text-white font-semibold w-32">
      <div>{heading}</div>
      <div className="break-words">{description}</div>
    </div>
  );
};

const MovieCardDetails = () => {
  const { movieId } = useParams();
  const { data: movieDetails } = useMovieDetails(movieId);
  console.log("movieDetails", movieDetails);

  return (
    <div className="flex flex-col md:flex-row bg-black md:min-h-screen">
      <div className="w-full md:w-2/5 border border-gray-700 py-3 px-0">
        <img
          src={IMG_CDN_URL + movieDetails?.poster_path}
          alt="poster"
          className="rounded-lg mx-10 h-screen"
        />
      </div>
      <div className="w-full md:w-3/5 text-white p-5">
        <div className="flex flex-col items-center gap-7">
          <div className="text-white text-5xl">{movieDetails?.title}</div>
          <div className="flex flex-wrap gap-3">
            <InfoCard heading="Runtime:" description={movieDetails?.runtime} />
            <InfoCard
              heading="Release Date:"
              description={movieDetails?.release_date}
            />
            <InfoCard
              heading="Average Votes:"
              description={movieDetails?.vote_average}
            />
            <InfoCard
              heading="Number of Votes:"
              description={movieDetails?.vote_count}
            />
            <InfoCard
              heading="Genres:"
              description={movieDetails?.genres.map((genre) => (
                <div key={genre.id}>{genre.name}</div>
              ))}
            />
            <InfoCard
              heading="Adult"
              description={movieDetails?.adult ? "18+" : "Not 18+"}
            />
            <InfoCard
              heading="Production Companies:"
              description={movieDetails?.production_companies.map((company) => (
                <div key={company.id} className="mr-2 text-xs">
                  {company.name}
                </div>
              ))}
            />
            <InfoCard
              heading="Budget:"
              description={`${movieDetails?.budget}$`}
            />
            <InfoCard
              heading="Revenue:"
              description={`${movieDetails?.revenue}$`}
            />
            <InfoCard
              heading="Popularity:"
              description={movieDetails?.popularity}
            />
          </div>
          <div></div>
          <div>
            <div className="font-semibold">
              <a
                href={`https://www.imdb.com/title/${movieDetails?.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                View more on IMDB
              </a>
            </div>
            <div className="text-3xl font-semibold">Description:</div>
            <div>{movieDetails?.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
