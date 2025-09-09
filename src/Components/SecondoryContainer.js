import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondoryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) {
    return "";
  }
  return (
    <div className="bg-black">
      <div className="relative -top-65 z-10">
        <MovieList
          title={"Now playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Recommended"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Now playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Now playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Now playing Movies"}
          movies={movies.nowPlayingMovies}
        />
      </div>
    </div>
  );
};

export default SecondoryContainer;
