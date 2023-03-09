import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchContent = createAsyncThunk("content/fetchContent", async (enter) => {
  const res = await axios(
    `https://api.shrtco.de/v2/shorten?url=${enter}/very/long/link.html`
  );
  const data = await res.data;

  return data;
});

export default fetchContent;
