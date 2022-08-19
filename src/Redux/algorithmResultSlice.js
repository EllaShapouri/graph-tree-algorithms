import { createSlice } from "@reduxjs/toolkit";

export const algorithmResultSlice = createSlice({
    name: "algorithmResult",
    initialState: {
        result: {},
        nodeQueue: [],
        edgeQueue: [],
        step: -1,
        lastStep: 1,
    },
    reducers: {
        setResult: (state, action) => {
            var { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps } =
                action.payload;
            // nodeQueue contains index of nodes
            state.nodeQueue = visitedNodesAllSteps;
            state.lastStep = state.nodeQueue.length;
            // edgeQueue contains id of edges
            state.edgeQueue = visitedEdgesAllSteps;
            // all other result that have to show in sidebar
            state.result = resultQueue;
        },
        setStep: (state, action) => {
            if (action.payload === "start") state.step = -1;
            else if (state.step < action.payload) state.step = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setResult, setStep } = algorithmResultSlice.actions;

export default algorithmResultSlice.reducer;
