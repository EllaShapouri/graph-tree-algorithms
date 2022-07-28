import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import dataReducer from "./dataSlice";

export default configureStore({
    reducer: {
        flow: mainReducer,
        data: dataReducer
    },
});
