import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "flow",
    initialState: {
        edges: [],
        nodes: [],
        selectedElement: {},
        changeElement: false,
    },
    reducers: {
        setAllEdges: (state, action) => {
            state.edges = action.payload;
        },

        setAllNodes: (state, action) => {
            state.nodes = action.payload;
        },

        setSelectedElement: (state, action) => {
            state.selectedElement = action.payload;
        },

        setChangeElement: (state, action) => {
            state.changeElement = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setSelectedElement,
    setChangeElement,
    setAllEdges,
    setAllNodes,
} = mainSlice.actions;

export default mainSlice.reducer;
