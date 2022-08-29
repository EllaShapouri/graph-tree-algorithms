export const setAlgorithm = (AlgorithmName) => {
    let algorithm = {};
    switch (AlgorithmName) {
        case "BFS":
            algorithm = {
                name: "BFS",
                requiredPath: false,
                targetNode: false,
            };
            break;
        case "UCS":
            algorithm = {
                name: "UCS",
                requiredPath: true,
                targetNode: true,
            };
            break;
        case "RBFS":
            algorithm = {
                name: "RBFS",
                requiredPath: false,
                targetNode: false,
            };
            break;
        case "DFS":
            algorithm = {
                name: "DFS",
                requiredPath: false,
                targetNode: false,
            };
            break;
        case "IDDFS":
            algorithm = {
                name: "IDDFS",
                requiredPath: false,
                targetNode: false,
            };
            break;
        case "BIDIRECTIONAL":
            algorithm = {
                name: "BIDIRECTIONAL",
                requiredPath: false,
                targetNode: true,
            };
            break;
        case "A*":
            algorithm = {
                name: "A*",
                requiredPath: true,
                targetNode: true,
            };
            break;
        case "DLS":
            algorithm = {
                name: "DLS",
                requiredPath: false,
                targetNode: false,
            };
            break;

        default:
            algorithm = {
                name: AlgorithmName,
                requiredPath: true,
                targetNode: true,
            };
            break;
    }
    return algorithm;
};
