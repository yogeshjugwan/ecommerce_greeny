import { configureStore } from "@reduxjs/toolkit";

// import navSlice from "../redux/navbar_slice";
import authSlice from "../redux/auth.slice.redux";

const store = configureStore({
    reducer: {
        //navbar: navSlice.reducer
        user: authSlice.reducer
    }
})
export default store