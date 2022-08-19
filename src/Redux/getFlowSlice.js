import { createSlice } from "@reduxjs/toolkit";

export const getFlowSlice = createSlice({
    name: "flow",
    initialState: {
        edges: [],
        nodes: [],
        selectedElement: {},
        changeElement: false,
        deleteElement : false,
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

        setDeleteElement: (state, action) => {
            state.deleteElement = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setSelectedElement,
    setChangeElement,
    setAllEdges,
    setAllNodes,
    setDeleteElement,
} = getFlowSlice.actions;

export default getFlowSlice.reducer;
