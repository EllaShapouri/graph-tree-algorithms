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

export const createInitialNodes = (create, dataStructure, fileFlowNodes) => {
    var nodes = [];
    if (create === "draw" && dataStructure === "graph") {
        nodes.push(initialNodeExample);
        nodes.push(initialGoalNodeExample);
        return nodes;
    } else if (create === "draw" && dataStructure === "tree") {
        nodes.push({
            ...initialNodeExample,
            type: "input",
            data: { label: "root node", startNode: true },
        });
        nodes.push(initialGoalNodeExample);
        return nodes;
    } else if (create === "file" && dataStructure === "graph") {
        return [...fileFlowNodes];
    } else if (create === "file" && dataStructure === "tree") {
        fileFlowNodes[0].type = "input";
        return [...fileFlowNodes];
    } else return nodes;
};

export const createInitialEdges = (create, fileFlowEdges) => {
    if (create === "draw") return [];
    else return [...fileFlowEdges];
};
