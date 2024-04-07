import { configureStore } from "@reduxjs/toolkit";import ipAddressReducer from "./IpAdressSlice";
const store = configureStore({
  reducer: {
    ip: ipAddressReducer,
  },
});

export default store;
