import { bfs } from "../BFS/BFS";
import { dfs } from "../DFS/DFS";

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
            resualts = dfs(matrix, 0);
            break;
        case "A*":
            break;

        default:
            break;
    }
    return resualts;
};
