import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";const initialState = {
  address: null,
  status: "",
  error: "",
};

export const fetchData = createAsyncThunk("Ip/fetchData", async ({ ip }) => {
  console.log();
  const res = await fetch(`${import.meta.env.VITE_API}${ip}`);
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
