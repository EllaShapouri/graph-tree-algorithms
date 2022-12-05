var matrix = [];
export const createMatrixHeuristics = (nodes, edges) => {
    // dictionary for node id and node index
    var nodeId = {};
    // create matrix of flow
    for (var i = 0; i < nodes.length; i++) {
        matrix[i] = [];
        for (var j = 0; j < nodes.length; j++) {
            matrix[i][j] = {
                value: -1,
            };
        }
        nodeId[nodes[i].id] = i;
    }
    // set value of matrix
    edges.forEach((edge) => {
        const indexNodeSource = nodeId[edge.source];
        const indexNodeTarget = nodeId[edge.target];
        var edgeValue = {};

        edgeValue = {
            value: parseInt(edge.label),
            id: edge.id,
        };
        setMatrixValue(indexNodeSource, indexNodeTarget, edgeValue);
    });
    return matrix;
};

const setMatrixValue = (index1, index2, value) => {
    matrix[index1][index2] = value;
};
