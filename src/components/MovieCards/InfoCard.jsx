const InfoCard = ({ heading, description }) => {
  return (
    <div className="border border-red-800 shadow-lg p-4 rounded-lg hover:scale-110 transition duration-500 cursor-pointer object-cover bg-red-700 text-white font-semibold w-32">
      <div>{heading}</div>
      <div className="break-words">{description}</div>
    </div>
  );
};

export default InfoCard;
