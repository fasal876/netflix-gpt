import { useDispatch } from "react-redux";
import { OPTIONS, TM_URL } from "../utilities/constants";
import { addNowPlayingMovies } from "../utilities/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
  const fetchNowPlayingMovies = async () => {
    try {
      const res = await fetch(TM_URL, OPTIONS);
      const movieList = await res.json();
      dispatch(addNowPlayingMovies(movieList.results));
    } catch (err) {}
  };
};
export default useNowPlayingMovies;
