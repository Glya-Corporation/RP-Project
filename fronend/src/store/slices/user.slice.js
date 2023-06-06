/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    }
  }
});

export const addUserThunk =
  ({ user, business }) =>
  dispatch => {
    dispatch(setIsLoading(true));
    return axios
      .post('http://localhost:1811/api/v1/user/register', { user, business })
      .then(() => dispatch(setIsLoading(false)))
      .catch(error => console.error(error));
  };

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
