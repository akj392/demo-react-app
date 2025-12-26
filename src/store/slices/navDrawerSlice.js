import { createSlice } from "@reduxjs/toolkit";

const navDrawerSlice = createSlice({
    name: 'navDrawerSlice',
    initialState: {
        mobileOpen: false,
        isClosing: false
    },
    reducers: {
        setMobileOpen: (state, action) => {
            state.mobileOpen = action.payload
        },
        setIsClosing: (state, action) => {
            state.isClosing = action.payload
        }
    }
})

export const { setMobileOpen, setIsClosing } = navDrawerSlice.actions;

export default navDrawerSlice.reducer
