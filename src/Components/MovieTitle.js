const MovieTitle = ({ original_title, overview }) => {
  return (
    <div className="absolute  px-20  text-justify w-screen aspect-video bg-gradient-to-r from-black text-white z-10">
      <h1 className="text-5xl font-bold p-4 mt-52">{original_title}</h1>
      <p className="p-4 w-3/12">{overview}</p>
      <div className="">
        <button className="text-black bg-white/70 px-14 py-4 mx-4 rounded-lg hover:bg-white">
          Play
        </button>
        <button className="text-black bg-gray-500/70 px-12 py-4 rounded-lg hover:bg-gray-600/100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
