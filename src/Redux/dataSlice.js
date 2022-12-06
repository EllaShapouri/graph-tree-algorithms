import { createSlice } from "@reduxjs/toolkit";
import { createInitialEdges, createInitialNodes } from "../utils/initialFlow";
import { setAlgorithm } from "./../utils/setAlgorithm";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        dataStructure: "",
        algorithm: {},
        initialNodes: [],
        initialEdges: [],
        create: "draw",
        fileFlowNodes: [],
        fileFlowEdges: [],
    },
    reducers: {
        setFileFlow: (state, action) => {
            state.fileFlowNodes = action.payload.newNodes;
            state.fileFlowEdges = action.payload.newEdges;
        },

        setSelectedData: (state, action) => {
            state.create = action.payload.create;
            state.algorithm = setAlgorithm(action.payload.algorithm);
            state.dataStructure = action.payload.dataStructure;
            state.initialNodes = createInitialNodes(
                state.create,
                state.dataStructure,
                state.fileFlowNodes
            );
            state.initialEdges = createInitialEdges(
                state.create,
                state.fileFlowEdges
            );
            state.fileFlowNodes = [];
            state.fileFlowEdges = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedData, setFileFlow } = dataSlice.actions;

export default dataSlice.reducer;
