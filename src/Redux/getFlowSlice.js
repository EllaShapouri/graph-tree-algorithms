import { createSlice } from "@reduxjs/toolkit";

export const getFlowSlice = createSlice({
    name: "flow",
    initialState: {
        edges: [],
        nodes: [],
        selectedElement: {},
        changeElement: false,
        deleteElement: false,
        depth: 0,
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
        setDepth: (state, action) => {
            state.depth = action.payload;
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
    setDepth,
} = getFlowSlice.actions;

export default getFlowSlice.reducer;
