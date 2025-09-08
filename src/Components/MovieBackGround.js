import React, { useEffect, useState } from "react";
import { MOVIE_CLIP_URL, OPTIONS } from "../utilities/constants";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const MovieBackGround = ({ id }) => {
  const { key } = useGetMovieTrailer(id);

  return (
    key && (
      <div className="">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            key +
            "?&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=" +
            key
          }
          title="YouTube video player"
          allow="autoplay;"
          className="w-screen aspect-video"
        ></iframe>
      </div>
    )
  );
};

export default MovieBackGround;
