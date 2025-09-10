import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const MovieBackGround = ({ id }) => {
  const { backGoundTrailerKey } = useSelector((store) => store.movies);
  useGetMovieTrailer(id, backGoundTrailerKey);
  if (!backGoundTrailerKey) {
    return <div className="w-screen aspect-video"></div>;
  }

  return (
    <div className="">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          backGoundTrailerKey +
          "?&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=" +
          backGoundTrailerKey
        }
        title="YouTube video player"
        allow="autoplay;"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
};

export default MovieBackGround;
