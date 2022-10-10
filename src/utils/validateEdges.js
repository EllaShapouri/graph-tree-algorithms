var validateObject = {};
export const validateEdges = (edges, requiredPath) => {
    validateObject = {
        valid: true,
        errorMessage: "",
    };
    validFlow(edges);
    if (requiredPath) checkValueExist(edges);
    return validateObject;
};

const checkValueExist = (edges) => {
    edges.forEach((edge) => {
        if (!edge.label)
            validateObject = {
                valid: false,
                errorMessage: "all edges must have a value",
            };
    });
};

const validFlow = (edges) => {
    if (edges.length === 0)
        validateObject = {
            valid: false,
            errorMessage: "Flow is not valid",
        };
};
