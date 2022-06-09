import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "flow",
    initialState: {
        edges: [],
        nodes: [],
        selectedElement: {},
        changeElement : false
    },
    reducers: {
        setEdges: (state, action) => {
            state.edges = action.payload;
        },

        setNodes: (state, action) => {
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
export const { setSelectedElement,setChangeElement, setEdges, setNodes } =
    mainSlice.actions;

export default mainSlice.reducer;
