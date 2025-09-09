import { IMAGE_CDN } from "../utilities/constants";

const MovieCard = ({ movie_data }) => {
  return (
    <div className=" w-[240px] aspect-video px-4">
      <img src={IMAGE_CDN + movie_data.poster_path}></img>
    </div>
  );
};

export default MovieCard;
