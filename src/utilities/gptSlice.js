import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
    suggestedMovieNames: [],
    movieNameResult: [],
  },
  reducers: {
    setShowGptPage: (state, action) => {
      state.showGptPage = !state.showGptPage;
    },
    addSuggestedMovies: (state, action) => {
      const { names, similiarMovies } = action.payload;
      state.suggestedMovieNames = names;
      state.movieNameResult = similiarMovies;
    },
  },
});
export const { setShowGptPage, addSuggestedMovies } = gptSlice.actions;
export default gptSlice.reducer;
