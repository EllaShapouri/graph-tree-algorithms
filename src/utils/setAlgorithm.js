export const setAlgorithm = (AlgorithmName) => {
    let algorithm = {};
    switch (AlgorithmName) {
        case "BFS":
            algorithm = {
                name: "BFS",
                requiredPath: false,
                heuristic: false,
            };
            break;
        case "UCS":
            algorithm = {
                name: "UCS",
                requiredPath: true,
                heuristic: false,
            };
            break;

        case "DFS":
            algorithm = {
                name: "DFS",
                requiredPath: false,
                heuristic: false,
            };
            break;
        case "IDDFS":
            algorithm = {
                name: "IDDFS",
                requiredPath: false,
                heuristic: false,
            };
            break;
        case "BIDIRECTIONAL":
            algorithm = {
                name: "BIDIRECTIONAL",
                requiredPath: false,
                heuristic: false,
            };
            break;
        case "DLS":
            algorithm = {
                name: "DLS",
                requiredPath: false,
                heuristic: false,
            };
            break;
        case "A":
            algorithm = {
                name: "A",
                requiredPath: true,
                heuristic: true,
            };
            break;

        case "GBFS":
            algorithm = {
                name: "GBFS",
                requiredPath: true,
                heuristic: true,
            };
            break;

        case "RBFS":
            algorithm = {
                name: "RBFS",
                requiredPath: true,
                heuristic: true,
            };
            break;

        default:
            algorithm = {
                name: AlgorithmName,
                requiredPath: false,
                heuristic: false,
            };
            break;
    }
    return algorithm;
};
