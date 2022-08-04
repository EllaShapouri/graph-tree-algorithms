export const validateEdges = (edges) => {
    const validateObject = checkValueExist(edges);
    return validateObject;
};

export const checkValueExist = (edges) => {
    let edgeVaّlue = {
        valid: true,
        errorMessage: "",
    };
    edges.forEach((edge) => {
        if (!edge.label)
            edgeVaّlue = {
                valid: false,
                errorMessage: "all edges must have a value",
            };
    });
    return edgeVaّlue;
};
