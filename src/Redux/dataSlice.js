import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        dataStructure: "",
        algorithm: "",
    },
    reducers: {
        setSelectedAlgorithm: (state, action) => {
            state.algorithm = action.payload;
        },

        setSelectedDataStructure: (state, action) => {
            state.dataStructure = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedAlgorithm, setSelectedDataStructure } = dataSlice.actions;

export default dataSlice.reducer;
