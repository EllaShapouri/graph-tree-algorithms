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
        heuristic: [],
        showHeuristic: false,
    },
    reducers: {
        setAllEdges: (state, action) => {
            state.edges = [];
            state.edges = action.payload;
        },

        setAllNodes: (state, action) => {
            state.nodes = [];
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
        setHeuristic: (state, action) => {
            state.heuristic = action.payload;
        },
        SetShowHeuristic: (state, action) => {
            state.showHeuristic = action.payload;
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
    setHeuristic,
    SetShowHeuristic,
} = getFlowSlice.actions;

export default getFlowSlice.reducer;
