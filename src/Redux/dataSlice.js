import { createSlice } from "@reduxjs/toolkit";
import { setAlgorithm } from "./../utils/setAlgorithm";

var initialNodeExample = {
    id: "node_0",
    type: "default",
    data: { label: "root node", startNode: true },
    className: "StartNode",
    position: { x: 250, y: 5 },
};

var initialGoalNodeExample = {
    id: "node_1",
    type: "default",
    data: { label: "goal", startNode: true },
    className: "GoalNode",
    position: { x: 250, y: 50 },
};

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        dataStructure: "",
        algorithm: {},
        initialNode: [],
    },
    reducers: {
        setSelectedAlgorithm: (state, action) => {
            state.algorithm = setAlgorithm(action.payload);
        },

        setSelectedDataStructure: (state, action) => {
            state.dataStructure = action.payload;
            if (action.payload === "tree") {
                state.initialNode = [
                    {
                        ...initialNodeExample,
                        type: "input",
                        data: { label: "root node", startNode: true },
                    },
                ];
                if (state.algorithm.targetNode) {
                    state.initialNode.push(initialGoalNodeExample);
                }
            } else if (action.payload === "graph") {
                state.initialNode = [
                    {
                        ...initialNodeExample,
                        data: { label: "start node", startNode: true },
                    },
                ];
                if (state.algorithm.targetNode) {
                    state.initialNode.push(initialGoalNodeExample);
                }
            } else {
                state.initialNode = [];
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedAlgorithm, setSelectedDataStructure } =
    dataSlice.actions;

export default dataSlice.reducer;
