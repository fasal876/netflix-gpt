import { useEffect, useState } from "react";
import { MOVIE_CLIP_URL, OPTIONS } from "../utilities/constants";
import { addBackGroundTrailer } from "../utilities/movieSlice";
import { useDispatch } from "react-redux";

function useGetMovieTrailer(id, backGoundTrailerKey) {
  const dispatch = useDispatch();
  useEffect(() => {
    !backGoundTrailerKey && getMovieVideos();
  }, []);
  const getMovieVideos = async () => {
    try {
      const res = await fetch(
        MOVIE_CLIP_URL + id + "/videos?language=en-US",
        OPTIONS
      );
      const videos = await res.json();
      const filteredVidoes = videos?.results?.filter(
        (video) => video.type === "Trailer"
      );
      dispatch(addBackGroundTrailer(filteredVidoes[0].key));
    } catch (err) {
      console.log(err);
    }
  };
}
export default useGetMovieTrailer;
