import { configureStore } from "@reduxjs/toolkit";
import getFlowReducer from "./getFlowSlice";
import dataReducer from "./dataSlice";
import algorithmResultReducer from "./algorithmResultSlice";

export default configureStore({
    reducer: {
        flow: getFlowReducer,
        data: dataReducer,
        result: algorithmResultReducer,
    },
});
