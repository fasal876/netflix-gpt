import { useRef, useState } from "react";
import langConfig from "../utilities/langConfig";
import { OPTIONS, QUERY_MOVIE_URL } from "../utilities/constants";
import { addSuggestedMovies } from "../utilities/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = ({ lang }) => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getMovies = async (movieName) => {
    const res = await fetch(QUERY_MOVIE_URL + movieName, OPTIONS);
    const movies = await res.json();
    return movies.results;
  };
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const search = searchText.current.value;
    //use chat gpt ai to get movies suggestion, it is paid
    //simulate kind of results
    const suggestedMovies =
      "Iron Man, The Avengers, Guardians of the Galaxy, Black Panther, Avengers: Endgame".split(
        ", "
      );
    const similiarMovies = suggestedMovies.map((movie) => getMovies(movie));
    const resolvedResult = await Promise.all(similiarMovies);
    dispatch(
      addSuggestedMovies({
        names: suggestedMovies,
        similiarMovies: resolvedResult,
      })
    );
    setLoading(false);
  };
  return (
    <form
      className=" py-4 px-4 flex  w-6/12 mx-auto"
      onSubmit={(e) => {
        handleForm(e);
      }}
    >
      <input
        placeholder={langConfig[lang].gptPlaceHolder}
        className="py-5 px-4 border border-gray-600 flex-8 bg-black/90 text-white  rounded-sm"
        ref={searchText}
      />
      <button className=" font-bold text-white flex-4 mx-2  py-4 rounded-lg cursor-pointer  bg-red-600 hover:bg-red-800 ">
        {loading ? "Loading....." : langConfig[lang].gptSubmit}
      </button>
    </form>
  );
};

export default GptSearchBar;
