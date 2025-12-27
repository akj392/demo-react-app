import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
        isInitializing: true
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
            state.isInitializing = false;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isInitializing = false;
        },
        finishInitializing: (state) => {
            state.isInitializing = false;
        }
    }
});

export const { setCredentials, logOut, finishInitializing } = authSlice.actions;

export default authSlice.reducer;