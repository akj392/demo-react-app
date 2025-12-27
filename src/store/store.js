import { configureStore } from "@reduxjs/toolkit";
import { authSlice, navDrawerSlice } from "./slices";

const store = configureStore({
    reducer: {
        navDrawer: navDrawerSlice,
        auth: authSlice
    }
})

export default store;