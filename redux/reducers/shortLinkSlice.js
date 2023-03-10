import { createSlice } from "@reduxjs/toolkit";
import fetchContent from "./fetchContent";
const initialState = {
  value: {
    url: "",
    loading: false,
    err: "",
  },
};

export const shortLink = createSlice({
  name: "shortLink",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContent.pending]: (state) => {
      state.value.loading = true;
      state.value.err = "";
    },
    [fetchContent.fulfilled]: (state, { payload }) => {
      state.value.loading = false;
      state.value.url = payload.result.full_short_link;
      state.value.err = "";
    },
    [fetchContent.rejected]: (state) => {
      state.value.loading = false;
      state.value.err = "Please add correct link!";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = shortLink.actions;

export default shortLink.reducer;
