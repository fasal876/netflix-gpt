import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return "";
  }
  return (
    <div className="px-20 text-white">
      <h1 className="text-2xl py-5 px-4">{title}</h1>
      <div className="flex  overflow-x-scroll my-2 no-scrollbar">
        <div className="flex py-2  ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie_data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
