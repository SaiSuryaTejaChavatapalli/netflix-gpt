import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    userSearchMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUserSearchMovies: (state, action) => {
      state.userSearchMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addUserSearchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
