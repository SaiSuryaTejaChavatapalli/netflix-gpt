import { Link } from "react-router-dom";
const MainTrailerTitle = ({ title, description, movieId }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black text-white py-9 md:py-40 px-8 w-screen aspect-video ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="text-[8px] md:text-sm md:inline-block w-1/3 md:w-2/6 mt-2">
        {description}
      </p>
      <div className="mt-2 my-4">
        <button className="bg-white text-md md:text-2xl text-black px-1 md:px-6 py-1 md:py-4 rounded-lg mr-2">
          ▶ Play
        </button>
        <Link to={`/browse/movieDetails/${movieId}`}>
          <button className="bg-gray-500 text-md md:text-2xl text-white px-1 md:px-6 py-1 md:py-4 rounded-lg">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainTrailerTitle;
