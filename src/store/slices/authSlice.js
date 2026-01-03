import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/axios'

const token = localStorage.getItem('accessToken');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: !!token,
        isAuthenticated: false,
        isInitializing: true,
        isSignedUp: false
    },
    reducers: {
        setAccessToken: (state, action) => {
            const { accessToken } = action.payload;
            localStorage.setItem('accessToken', accessToken);
            state.accessToken = accessToken;
            state.isAuthenticated = true;
        },
        finishInitializing: (state) => {
            state.isInitializing = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, state => {
                state.isInitializing = true;
                state.isAuthenticated = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.meta.arg.email;
                state.isAuthenticated = true;
                state.isSignedUp = true;
                state.isInitializing = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
                state.isInitializing = false;
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.isInitializing = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isInitializing = false;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.isAuthenticated = false;
                state.isInitializing = false;
            })
            .addCase(signup.pending, (state) => {
                state.isInitializing = true;
            })
            .addCase(signup.fulfilled, (state) => {
                state.isInitializing = false;
                state.isSignedUp = true;
            })
            .addCase(signup.rejected, (state) => {
                state.isInitializing = false;
            })
            .addCase(logout.pending, (state) => {
                state.isInitializing = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.accessToken = null;
                state.isAuthenticated = false;
                state.isInitializing = false;
            })
            .addCase(logout.rejected, (state) => {
                state.isAuthenticated = false;
                state.isInitializing = false;
            });
    }
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const res = await api.post('/auth/login', payload);
    const { accessToken } = res.data;
    localStorage.setItem('accessToken', accessToken);
    return { accessToken };
});

export const fetchCurrentUser = createAsyncThunk('auth/me', async () => {
    const res = await api.get('/auth/me');
    return res.data;
}
);

export const signup = createAsyncThunk('auth/signup', async (payload) => {
    await api.post('/auth/signup', payload);
    return true;
});

export const logout = createAsyncThunk('auth/logout', async (payload) => {
    await api.post('/auth/logout', payload);
     localStorage.removeItem("accessToken");
    return true;
});

export const { setAccessToken, finishInitializing } = authSlice.actions;

export default authSlice.reducer;