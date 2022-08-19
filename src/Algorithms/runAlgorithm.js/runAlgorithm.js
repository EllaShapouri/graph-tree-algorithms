import { bfs } from "../BFS/BFS";

export const runAlgorithm = (algorithm, matrix) => {
    var resualts = {};
    switch (algorithm) {
        case "BFS":
            // start node is always node_0
            resualts = bfs(matrix, 0);
            break;
        case "UCS":
            break;
        case "RBFS":
            break;
        case "DFS":
            break;
        case "A*":
            break;

        default:
            break;
    }
    return resualts;
};
