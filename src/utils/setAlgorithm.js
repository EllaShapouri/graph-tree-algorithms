export const setAlgorithm = (AlgorithmName) => {
    let algorithm = {};
    switch (AlgorithmName) {
        case "BFS":
            algorithm = {
                name: "BFS",
                requiredPath: false,
            };
            break;
        case "UCS":
            algorithm = {
                name: "UCS",
                requiredPath: true,
            };
            break;
        case "RBFS":
            algorithm = {
                name: "RBFS",
                requiredPath: false,
            };
            break;
        case "DFS":
            algorithm = {
                name: "DFS",
                requiredPath: false,
            };
            break;
        case "A*":
            algorithm = {
                name: "A*",
                requiredPath: true,
            };
            break;

        default:
            algorithm = {
                name: AlgorithmName,
                requiredPath: true,
            };
            break;
    }
    return algorithm;
};
