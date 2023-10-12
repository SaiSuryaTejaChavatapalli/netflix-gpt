const MainTrailerTitle = ({ title, description }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black text-white py-16 md:py-40 px-8 w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="text-xs md:inline-block w-2/6 mt-2">{description}</p>
      <div className="mt-2 my-4">
        <button className="bg-white  text-2xl text-black px-3 md:px-6 py-1 md:py-4 rounded-lg mr-2">
          ▶ Play
        </button>
        <button className="bg-gray-500  text-2xl text-white px-3 md:px-6 py-1 md:py-4 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainTrailerTitle;
