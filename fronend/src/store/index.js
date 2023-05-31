/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import locationSlice from "./slices/localizacion.slice";
import isLoadingSlice from "./slices/isLoading.slice";
export default configureStore({
  reducer: {
    user: userSlice,
    location: locationSlice,
    isLoading: isLoadingSlice,
  },
});
