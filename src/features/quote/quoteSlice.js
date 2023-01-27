import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: {
    _id: "l1g_brfDMZy",
    author: "Billie Jean King",
    content:
      "Tennis is a perfect combination of violent action taking place in an atmosphere of total tranquillity.",
    tags: ["sports", "competition"],
    authorSlug: "billie-jean-king",
    length: 102,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08",
  },
  status: "idle",
};

export const getRandomQuoteAsync = createAsyncThunk(
  "quote/random",
  async (quote) => {
    const response = await fetch("https://api.quotable.io/random").then(
      (data) => data.json()
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuoteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRandomQuoteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.quote = action.payload.quote;
      });
  },
});

export const selectQuote = (state) => state.quote;

export default quoteSlice.reducer;
