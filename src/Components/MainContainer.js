import MovieTitle from "./MovieTitle";
import MovieBackGround from "./MovieBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store?.movies);
  if (!nowPlayingMovies) {
    return null;
  }
  const nowPlayingMovie = nowPlayingMovies[13];

  return (
    <div>
      <MovieTitle
        original_title={nowPlayingMovie?.original_title}
        overview={nowPlayingMovie?.overview}
      />
      <MovieBackGround id={nowPlayingMovie?.id} />
    </div>
  );
};

export default MainContainer;
