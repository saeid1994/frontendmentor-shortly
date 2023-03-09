import { createSlice } from "@reduxjs/toolkit";
import fetchContent from "./fetchContent";
const initialState = {
  value: {
    url: "",
    loading: false,
  },
};

export const shortLink = createSlice({
  name: "shortLink",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContent.pending]: (state) => {
      state.value.loading = true;
    },
    [fetchContent.fulfilled]: (state, { payload }) => {
      state.value.loading = false;
      state.value.url = payload.result.full_short_link;
    },
    [fetchContent.rejected]: (state) => {
      state.value.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = shortLink.actions;

export default shortLink.reducer;
