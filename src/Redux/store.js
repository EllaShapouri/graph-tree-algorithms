import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./../Redux/mainSlice";

export default configureStore({
    reducer: {
        flow: mainReducer,
    },
});
