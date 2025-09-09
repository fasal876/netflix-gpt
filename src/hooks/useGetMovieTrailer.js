import { useEffect, useState } from "react";
import { MOVIE_CLIP_URL, OPTIONS } from "../utilities/constants";

function useGetMovieTrailer(id) {
  const [key, setKey] = useState("");
  useEffect(() => {
    getMovieVideos();
  }, []);
  const getMovieVideos = async () => {
    const res = await fetch(
      MOVIE_CLIP_URL + id + "/videos?language=en-US",
      OPTIONS
    );
    const videos = await res.json();
    const filteredVidoes = videos?.results?.filter(
      (video) => video.type === "Trailer"
    );
    setKey(filteredVidoes ? filteredVidoes[0].key : "");
  };
  return { key };
}
export default useGetMovieTrailer;
