import { validateNodes } from "./validateNodes";

const checkString = (name) => {
    if (
        typeof name === "undefined" ||
        typeof name !== "string" ||
        name.length === 0
    ) {
        return false;
    } else return true;
};
const checkPosition = (position) => {
    if (
        typeof position === "undefined" ||
        typeof position.x !== "number" ||
        isNaN(position.x) ||
        typeof position.y !== "number" ||
        isNaN(position.y)
    ) {
        return false;
    } else return true;
};

const checkNode = (node) => {
    let statusLabel = checkString(node.label);
    let statusPosition = checkPosition(node.position);
    if (!statusLabel || !statusPosition) {
        return false;
    } else return true;
};

const checkEdge = (edge) => {
    let statusSource = checkString(edge.source);
    let statusTarget = checkString(edge.target);
    let statusLabelEdge = checkString(edge.label);
    if (
        !statusSource ||
        !statusTarget ||
        !statusLabelEdge ||
        !Number.isInteger(parseInt(edge.label))
    ) {
        return false;
    } else return true;
};

const createFlow = (nodes, edges) => {
    var nodeListId = {};
    var nodeSample = {
        width: 77,
        height: 26,
        dragging: false,
        type: "default",
        className: "",
    };
    const newNodes = nodes.map((node, index) => {
        const nodeLabel = node.label;
        const nodeID = `node_${index}`;
        nodeListId[nodeLabel] = nodeID;
        if (index === 0)
            return {
                position: node.position,
                data: { label: `${node.label}`, startNode: true },
                id: nodeID,
                ...nodeSample,
                className: "StartNode",
            };
        else if (index === 1)
            return {
                position: node.position,
                data: { label: `${node.label}`, startNode: true },
                id: nodeID,
                ...nodeSample,
                className: "GoalNode",
            };
        else
            return {
                position: node.position,
                data: { label: `${node.label}` },
                id: nodeID,
                ...nodeSample,
            };
    });
    const newEdges = edges
        .map((edge, index) => {
            const source = nodeListId[edge.source];
            const target = nodeListId[edge.target];
            if (source && target)
                return {
                    id: `edge_${index}`,
                    source: source,
                    target: target,
                    label: edge.label,
                    data: { startNode: false },
                };
            else return;
        })
        .filter((element) => {
            return element !== undefined;
        });
    console.log(newEdges);
    return { newNodes, newEdges };
};

export const checkFlowFile = (startNode, goalNode, nodes, edges) => {
    if (!checkNode(startNode) || !checkNode(goalNode)) {
        throw "start node syntax or goal node syntax is not true";
    }
    for (let i = 0; i < nodes.length; i++) {
        let statusNode = checkNode(nodes[i]);
        if (!statusNode) {
            throw "nodes syntax not true";
        }
    }
    for (let j = 0; j < edges.length; j++) {
        let statusEdge = checkEdge(edges[j]);
        if (!statusEdge) {
            throw "edges syntax not true";
        }
    }
    // set start node as a first node and goal node as second node
    nodes.unshift(goalNode);
    nodes.unshift(startNode);
    const { newNodes, newEdges } = createFlow(nodes, edges);
    const validatedNodes = validateNodes(newNodes);

    if (!validatedNodes.valid) throw validatedNodes.errorMessage;
    else {
        return { newNodes, newEdges };
    }
};
