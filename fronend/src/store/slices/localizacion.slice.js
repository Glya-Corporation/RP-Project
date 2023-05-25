/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
export const locationSlice = createSlice({
  name: "location",
  initialState: [],
  reducers: {
    setLocation: (state, action) => {
      const location = action.payload;
      return location;
    },
  },
});

export const getProvThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://apis.datos.gob.ar/georef/api/provincias?&orden=nombre")
    .then((res) => dispatch(setLocation(res.data.provincias)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
