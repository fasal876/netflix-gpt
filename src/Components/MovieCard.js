import { retry } from "@reduxjs/toolkit/query";
import { IMAGE_CDN } from "../utilities/constants";

const MovieCard = ({ movie_data }) => {
  const { poster_path } = movie_data;
  if (!poster_path) {
    return null;
  }
  return (
    <div className=" w-[240px] aspect-video px-4">
      <img src={IMAGE_CDN + poster_path}></img>
    </div>
  );
};

export default MovieCard;
