import MovieTitle from "./MovieTitle";
import MovieBackGround from "./MovieBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const nowPlayingMovie = movies?.nowPlayingMovies?.[13];

  return (
    <div>
      <MovieTitle
        original_title={nowPlayingMovie?.original_title}
        overview={nowPlayingMovie?.overview}
      />
      {nowPlayingMovie && <MovieBackGround id={nowPlayingMovie?.id} />}
    </div>
  );
};

export default MainContainer;
