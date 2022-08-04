import { createSlice } from "@reduxjs/toolkit";
import { setAlgorithm } from "./../utils/setAlgorithm";

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
                        id: "node_0",
                        type: "input",
                        data: { label: "root node", startNode: true },
                        className: "StartNode",
                        position: { x: 250, y: 5 },
                    },
                ];
            } else if (action.payload === "graph") {
                state.initialNode = [
                    {
                        id: "node_0",
                        type: "default",
                        data: { label: "start node", startNode: true },
                        className: "StartNode",
                        position: { x: 250, y: 5 },
                    },
                ];
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
