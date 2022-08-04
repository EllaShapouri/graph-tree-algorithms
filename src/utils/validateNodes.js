export const validateNodes = (nodes) => {
    const validateObject = uniqueNodesNames(nodes);
    return validateObject;
};

export const uniqueNodesNames = (nodes) => {
    let nodeVaّlue = {
        valid: true,
        errorMessage: "",
    };
    let names = nodes.map((node) => node.data.label);
    let uniqueNames = [];
    names.forEach((name) => {
        if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
        }
    });

    if (names.length !== uniqueNames.length)
        nodeVaّlue = {
            valid: false,
            errorMessage: "nodes must have unique names",
        };

    return nodeVaّlue;
};
