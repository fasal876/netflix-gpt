import Header from "./Header";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondoryContainer from "./SecondoryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  const gpt = useSelector((store) => store.gpt?.showGptPage);

  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
