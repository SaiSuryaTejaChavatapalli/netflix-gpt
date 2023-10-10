const MainTrailerTitle = ({ title, description }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black text-white py-28 px-8 w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 mt-2">{description}</p>
      <div className="mt-2">
        <button className="bg-gray-500  text-2xl text-white px-4 py-1 rounded-lg mr-2">
          Play
        </button>
        <button className="bg-gray-500  text-2xl text-white px-4 py-1 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainTrailerTitle;
