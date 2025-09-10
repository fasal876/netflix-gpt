import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    backGoundTrailerKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBackGroundTrailer: (state, action) => {
      state.backGoundTrailerKey = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addBackGroundTrailer } = movieSlice.actions;
export default movieSlice.reducer;
