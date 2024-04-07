import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";const initialState = {
  address: null,
  status: "",
  error: "",
};

export const fetchData = createAsyncThunk("Ip/fetchData", async ({ ip }) => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_eHUa2KiA6RcR4yrUjjEiMbx4V2VBy&ipAddress=${ip}`
  );
  return res.json();
});
const IpAdressSlice = createSlice({
  name: "IpAdress",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.address = action.payload;
        state.status = "ready";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
      });
  },
});
export default IpAdressSlice.reducer;
