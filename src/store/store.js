import { configureStore } from "@reduxjs/toolkit";
import { navDrawerSlice } from "./slices";

const store = configureStore({
    reducer: {
        navDrawer: navDrawerSlice
    }
})

export default store;