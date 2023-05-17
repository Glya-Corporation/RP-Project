
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
    },
});

export const getUserThunk = id => dispatch => {
    return axios.get(`http://localhost:1811/api/v1/user/${id}`)
        .then(res => dispatch(setUser(res.data)))
        .catch(error => console.error(error));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
