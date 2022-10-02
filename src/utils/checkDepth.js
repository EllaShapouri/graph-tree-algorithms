export const checkDepth = (algorithm, depth) => {
    if (algorithm.name === "DLS") {
        if (depth > 0) return { valid: true };
        else return { valid: false, errorMessage: "you must set a depth !" };
    } else return { valid: true };
};
