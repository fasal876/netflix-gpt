import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, TM_URL } from "../utilities/constants";
import { addNowPlayingMovies } from "../utilities/movieSlice";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
