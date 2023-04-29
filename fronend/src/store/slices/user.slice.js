/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const getUserThunk = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:1811/api/v1/user/${id}`, getConfig())
    .then((res) => dispatch(setUser(res.data)))
    .catch((error) => console.error(error));
};
export const addUserThunk = (newUser) => (dispatch) => {
  return axios
    .post(`http://localhost:1811/api/v1/user`, newUser)
    .then((res) => dispatch(setUser(res.data)))
    .catch((error) => console.error(error));
};

export const updateUserThunk = (id, data) => (dispatch) => {
  return axios
    .put(`http://localhost:1811/api/v1/users/${id}`, data, getConfig())
    .then((res) => dispatch(setUser(res.data)))
    .catch((error) => console.error(error));
};

export const { setUser, addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
